// ===========================
// DOM Elements
// ===========================
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalCategory = document.getElementById('modal-category');
const modalDescription = document.getElementById('modal-description');
const modalLink = document.getElementById('modal-link');
const modalImageWrapper = document.getElementById('modal-image-wrapper');
const modalImage = document.getElementById('modal-image');
const closeModal = document.getElementById('close-modal');
const defaultModalImageSrc = (modalImage && modalImage.dataset.defaultImage) || 'profile.png';

// Custom Cursor Element
const cursorEl = document.createElement('div');
cursorEl.style.position = 'fixed';
cursorEl.style.top = '0';
cursorEl.style.left = '0';
cursorEl.style.width = '8px';
cursorEl.style.height = '8px';
cursorEl.style.background = 'white';
cursorEl.style.borderRadius = '50%';
cursorEl.style.pointerEvents = 'none';
cursorEl.style.zIndex = '9999';
cursorEl.style.mixBlendMode = 'exclusion';
cursorEl.style.transform = 'translate(-50%, -50%)';
cursorEl.style.transition = 'width 0.2s, height 0.2s';
document.body.appendChild(cursorEl);

function resolveImagePath(path) {
    if (!path) return null;
    try {
        return new URL(path, window.location.href).href;
    } catch (error) {
        return path;
    }
}

if (defaultModalImageSrc) {
    const preloadImage = new Image();
    preloadImage.src = resolveImagePath(defaultModalImageSrc);
}

// ===========================
// Configuration Constants
// ===========================
const PARTICLE_COUNT_DESKTOP = 120; // Increased for denser networking
const PARTICLE_COUNT_MOBILE = 60;
const CONNECTION_DISTANCE = 120;
const MOUSE_DISTANCE = 250;
const PARTICLE_BASE_VELOCITY = 0.8; // Slower, more elegant
const PROJECT_NODE_VELOCITY = 0.2;
const SHOCKWAVE_FORCE = 1000;
const DAMPING_FACTOR = 0.95;

const COLORS = [
    '#111111', // Black
    '#333333',
    '#555555',
    '#777777'
];

// ===========================
// State Variables
// ===========================
let width, height;
let particles = [];
let projectNodes = [];
let tapStartX, tapStartY;
let lastTap = 0;
let isMobile = false;

const mouse = {
    x: undefined,
    y: undefined,
    isPressed: false
};

// Detect mobile device once
function detectMobile() {
    isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        ('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0);
}

// ===========================
// Particle Class
// ===========================
class Particle {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * PARTICLE_BASE_VELOCITY;
        this.vy = (Math.random() - 0.5) * PARTICLE_BASE_VELOCITY;
        this.size = Math.random() * 2 + 0.5; // Smaller, star-like
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.baseSize = this.size;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Mouse interaction (Magnetic Flow)
        if (mouse.x !== undefined && mouse.y !== undefined) {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < MOUSE_DISTANCE) {
                const forceDirectionX = dx / distance;
                const forceDirectionY = dy / distance;
                const force = (MOUSE_DISTANCE - distance) / MOUSE_DISTANCE;

                // Stronger swirl effect
                const angle = Math.atan2(dy, dx);
                const rotator = 0.8; // Stronger spiral

                this.vx += (Math.cos(angle + rotator) * force * 0.5); // Increased influence
                this.vy += (Math.sin(angle + rotator) * force * 0.5);

                // Color boost on interaction
                // this.color = '#ffffff'; // Optional: flash white
            }
        }

        // Speed limit with more dynamism
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        const maxSpeed = PARTICLE_BASE_VELOCITY * 8; // Faster climax
        if (speed > maxSpeed) {
            this.vx *= 0.9;
            this.vy *= 0.9;
        } else if (speed < PARTICLE_BASE_VELOCITY * 0.5) {
            // Keep them moving
            this.vx *= 1.05;
            this.vy *= 1.05;
        }
    }

    draw() {
        ctx.fillStyle = this.color;
        // Pulse size
        const pulse = Math.sin(Date.now() * 0.005 + this.x) * 0.5 + 1;
        ctx.globalAlpha = 0.8;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * pulse, 0, Math.PI * 2);
        ctx.fill();
    }
}

// ===========================
// ProjectNode Class
// ===========================
class ProjectNode {
    constructor(data, index) {
        this.data = data;
        this.x = Math.random() * (width - 200) + 100;
        this.y = Math.random() * (height - 200) + 100;
        this.vx = (Math.random() - 0.5) * PROJECT_NODE_VELOCITY;
        this.vy = (Math.random() - 0.5) * PROJECT_NODE_VELOCITY;
        this.size = 12; // Static large size
        this.hoverSize = 25; // Expands significantly
        this.color = '#111111'; // Black nodes
        this.isHovered = false;

        // Load animation
        this.opacity = 0;
        this.scale = 0;
        this.loadDelay = 500 + index * 200;
        this.loaded = false;
        this.introTime = 0;
    }

    update() {
        // Intro Animation
        if (!this.loaded) {
            this.introTime += 16; // approximate frame time
            if (this.introTime > this.loadDelay) {
                const progress = Math.min((this.introTime - this.loadDelay) / 800, 1);
                // Ease out elastic
                const p = progress;
                this.scale = p === 0 ? 0 : p === 1 ? 1 : Math.pow(2, -10 * p) * Math.sin((p * 10 - 0.75) * (2 * Math.PI) / 3) + 1;
                this.opacity = Math.min(progress * 2, 1);

                if (progress >= 1) this.loaded = true;
            }
        }

        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Interaction
        if (mouse.x !== undefined && mouse.y !== undefined) {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 50) {
                this.isHovered = true;
                cursorEl.style.width = '50px';
                cursorEl.style.height = '50px';
                cursorEl.style.mixBlendMode = 'exclusion'; // ensure visibility
            } else if (this.isHovered) {
                this.isHovered = false;
                cursorEl.style.width = '8px';
                cursorEl.style.height = '8px';
            }
        } else {
            this.isHovered = false;
        }

        // Smooth size transition
        const targetSize = this.isHovered ? this.hoverSize : 12;
        this.size += (targetSize - this.size) * 0.1;
    }

    draw() {
        if (this.scale <= 0.01) return;

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.scale(this.scale, this.scale);

        // Draw Diamond
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;

        // Outer Glow (when hovered)
        if (this.isHovered) {
            ctx.shadowColor = 'white';
            ctx.shadowBlur = 20;
        }

        ctx.beginPath();
        ctx.moveTo(0, -this.size);
        ctx.lineTo(this.size, 0);
        ctx.lineTo(0, this.size);
        ctx.lineTo(-this.size, 0);
        ctx.closePath();
        ctx.fill();

        // Label
        if (this.isHovered || isMobile) {
            ctx.fillStyle = '#111111'; // Black text
            ctx.font = '500 14px Outfit';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.shadowColor = 'black';
            ctx.shadowBlur = 4;
            ctx.fillText(this.data.title, 0, -this.size - 15);
        }

        ctx.restore();
    }

    checkClick(x, y) {
        if (x !== undefined && y !== undefined) {
            const dx = x - this.x;
            const dy = y - this.y;
            if (Math.sqrt(dx * dx + dy * dy) < 60) {
                openModal(this.data);
                return true;
            }
        } else if (this.isHovered) {
            openModal(this.data);
            return true;
        }
        return false;
    }
}

// ===========================
// Core Functions
// ===========================
function init() {
    detectMobile();
    resize();
    particles = [];
    projectNodes = [];

    const pCount = isMobile ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP;
    for (let i = 0; i < pCount; i++) {
        particles.push(new Particle());
    }

    if (typeof portfolioData !== 'undefined') {
        portfolioData.projects.forEach((project, index) => {
            projectNodes.push(new ProjectNode(project, index));
        });
    }
}

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
}

function animate() {
    // Create a subtle trail effect
    // Use white with low opacity to fade out previous frames (creating trails)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.fillRect(0, 0, width, height);

    const allNodes = [...particles, ...projectNodes];

    // Connections
    ctx.lineWidth = 0.5;
    for (let i = 0; i < allNodes.length; i++) {
        const nodeA = allNodes[i];

        // Optimization: check spatial partitioning if needed, but for <200 nodes n^2 is fine
        for (let j = i + 1; j < allNodes.length; j++) {
            const nodeB = allNodes[j];
            const dx = nodeA.x - nodeB.x;
            const dy = nodeA.y - nodeB.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < CONNECTION_DISTANCE) {
                const alpha = 1 - (dist / CONNECTION_DISTANCE);
                ctx.strokeStyle = `rgba(0, 0, 0, ${alpha * 0.15})`; // Dark lines
                ctx.beginPath();
                ctx.moveTo(nodeA.x, nodeA.y);
                ctx.lineTo(nodeB.x, nodeB.y);
                ctx.stroke();
            }
        }
    }

    // Mouse Connections (Constellations)
    if (mouse.x !== undefined && mouse.y !== undefined) {
        allNodes.forEach(node => {
            const dx = mouse.x - node.x;
            const dy = mouse.y - node.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < MOUSE_DISTANCE) {
                const alpha = 1 - (dist / MOUSE_DISTANCE);
                ctx.strokeStyle = `rgba(0, 0, 0, ${alpha * 0.2})`; // Dark interaction lines
                ctx.beginPath();
                ctx.moveTo(mouse.x, mouse.y);
                ctx.lineTo(node.x, node.y);
                ctx.stroke();
            }
        });
    }

    // Update & Draw
    particles.forEach(p => { p.update(); p.draw(); });
    projectNodes.forEach(n => { n.update(); n.draw(); });

    requestAnimationFrame(animate);
}

// ===========================
// Interaction & Events
// ===========================

// Custom Cursor Position
window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    // Smooth cursor follow
    // For bespoke feel, we can just set it directly or use lerp. 
    // Direct for responsiveness since we have CSS transition on width/height
    cursorEl.style.left = e.clientX + 'px';
    cursorEl.style.top = e.clientY + 'px';
});

window.addEventListener('mouseout', () => {
    mouse.x = undefined;
    mouse.y = undefined;
    cursorEl.style.opacity = '0';
});

window.addEventListener('mouseenter', () => {
    cursorEl.style.opacity = '1';
});

window.addEventListener('mousedown', () => {
    cursorEl.style.transform = 'translate(-50%, -50%) scale(0.8)';
});

window.addEventListener('mouseup', () => {
    cursorEl.style.transform = 'translate(-50%, -50%) scale(1)';
});

// Click Interaction
window.addEventListener('click', (e) => {
    if (modal.classList.contains('hidden')) {
        let clicked = false;
        // Check nodes first
        for (let node of projectNodes) {
            if (node.checkClick(e.clientX, e.clientY)) {
                clicked = true;
                break;
            }
        }
    } else if (e.target === modal) {
        closeModalHandler();
    }
});

// Modal Logic
function openModal(data) {
    modalTitle.innerText = data.title;
    modalCategory.innerText = data.category;
    modalDescription.innerText = data.description;

    // Image Handling
    if (data.image) {
        const resolvedSrc = resolveImagePath(data.image);
        modalImage.src = resolvedSrc;
        modalImageWrapper.classList.remove('hidden');
    } else {
        modalImageWrapper.classList.add('hidden');
    }

    // Link Handling
    if (data.link === '#') {
        modalLink.style.display = 'none';
    } else {
        modalLink.style.display = 'inline-block';
        modalLink.href = data.link;
        modalLink.innerText = data.link.startsWith('mailto:') ? 'Contact' : 'View Project';
    }

    modal.classList.remove('hidden');
    // slight delay to allow display:block to apply before opacity transition
    requestAnimationFrame(() => {
        modal.classList.add('open');
    });
}

function closeModalHandler() {
    modal.classList.remove('open');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 400);
}

closeModal.addEventListener('click', closeModalHandler);
window.addEventListener('resize', resize);

// Touch Support
window.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    mouse.x = touch.clientX;
    mouse.y = touch.clientY;
}, { passive: false });

window.addEventListener('touchend', (e) => {
    mouse.x = undefined;
    mouse.y = undefined;
    // Simple tap check could go here if needed
});

// ===========================
// MediaPipe Hands Integration
// ===========================
const videoElement = document.getElementsByClassName('input_video')[0];
let handLandmarks = null;
let camera = null;

// Smoothing variables
let targetX = undefined;
let targetY = undefined;
const SMOOTHING_FACTOR = 0.15;

function onResults(results) {
    if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
        // Get the first hand detected
        const landmarks = results.multiHandLandmarks[0];

        // Use Index Finger Tip (Landmark 8) for interaction
        // Landmarks are 0.0 - 1.0 (normalized)
        const indexTip = landmarks[8];

        // Mirror horizontally for natural mirror interaction
        const x = (1 - indexTip.x) * width;
        const y = indexTip.y * height;

        targetX = x;
        targetY = y;

        // If mouse was previously undefined, snap to it immediately
        if (mouse.x === undefined) {
            mouse.x = x;
            mouse.y = y;
        }
    }
}

// Initialize Hands
const hands = new Hands({
    locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
    }
});

hands.setOptions({
    maxNumHands: 1,
    modelComplexity: 1,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5
});

hands.onResults(onResults);

// Initialize Camera on Button Click
// Browsers require a user gesture to grant permissions reliably
const cameraBtn = document.getElementById('camera-btn');

if (cameraBtn) {
    cameraBtn.addEventListener('click', () => {
        cameraBtn.innerText = "Initializing...";
        try {
            camera = new Camera(videoElement, {
                onFrame: async () => {
                    await hands.send({ image: videoElement });
                },
                width: 640,
                height: 480
            });
            camera.start()
                .then(() => {
                    cameraBtn.innerText = "Camera Active";
                    cameraBtn.style.opacity = '0.5';
                    cameraBtn.disabled = true;
                    // Provide feedback that it's working
                    const originalText = document.getElementById('instructions').innerHTML;
                    // Keep instructions but maybe fade out the button
                })
                .catch(err => {
                    console.error(err);
                    cameraBtn.innerText = "Camera Access Denied";
                    alert("Could not access camera. Please ensure you are on HTTPS and have allowed permissions.");
                });
        } catch (e) {
            console.warn("Camera setup failed:", e);
            cameraBtn.innerText = "Error";
        }
    });
}


// Start
init();
animate();

// Update loop needs to handle the smoothing
function updateInputPosition() {
    if (targetX !== undefined && targetY !== undefined) {
        mouse.x += (targetX - mouse.x) * SMOOTHING_FACTOR;
        mouse.y += (targetY - mouse.y) * SMOOTHING_FACTOR;

        // Visual update
        cursorEl.style.left = mouse.x + 'px';
        cursorEl.style.top = mouse.y + 'px';

        // Dynamic "Active" state for cursor when controlled by camera
        cursorEl.style.width = '20px';
        cursorEl.style.height = '20px';
        cursorEl.style.border = '2px solid cyan';
        cursorEl.style.background = 'transparent';
    }
}

// Hook into existing animation loop
const originalAnimate = animate;
animate = function () {
    updateInputPosition();
    originalAnimate();
};
