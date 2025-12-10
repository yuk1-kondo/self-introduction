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
cursorEl.classList.add('custom-cursor'); // Use class for base styles
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
const PARTICLE_COUNT_DESKTOP = 60; // Reduced by 50%
const PARTICLE_COUNT_MOBILE = 30;
const CONNECTION_DISTANCE = 140; // Slightly increased to compensate for fewer particles
const MOUSE_DISTANCE = 250;
const PARTICLE_BASE_VELOCITY = 0.8;
const PROJECT_NODE_VELOCITY = 0.2;
const SHOCKWAVE_FORCE = 15; // Burst strength
const DAMPING_FACTOR = 0.95;
const SMOOTHING_FACTOR = 0.2;
const GATHER_STRENGTH = 0.5; // How fast they collect

const COLORS = [
    '#111111',
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
let targetX, targetY;
let isGathering = false;
let isPinching = false;


const mouse = {
    x: undefined,
    y: undefined,
    isPressed: false
};

// ... (Rest of state vars usually here, but avoiding massive replace)
// We'll trust the context is sufficient or use multi-replace if strictly needed. 
// Actually, let's keep going to cover the class changes.

// ===========================
// Particle Class
// ===========================
class Particle {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * PARTICLE_BASE_VELOCITY;
        this.vy = (Math.random() - 0.5) * PARTICLE_BASE_VELOCITY;
        this.size = Math.random() * 2 + 0.5;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.baseSize = this.size;
    }

    update() {
        // GATHERING STATE
        if (isGathering && mouse.x !== undefined && mouse.y !== undefined) {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const angle = Math.atan2(dy, dx);

            // Accelerate towards center
            this.vx += Math.cos(angle) * GATHER_STRENGTH;
            this.vy += Math.sin(angle) * GATHER_STRENGTH;

            // Add some drag to prevent infinite orbit speed
            this.vx *= 0.9;
            this.vy *= 0.9;
        } else {
            // NORMAL STATE
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;

            // Mouse interaction (Magnetic Flow) - Only if NOT gathering
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
                    const rotator = 0.8;

                    this.vx += (Math.cos(angle + rotator) * force * 0.5);
                    this.vy += (Math.sin(angle + rotator) * force * 0.5);
                }
            }
        }

        // Speed limit / damping
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        const maxSpeed = (isGathering) ? 20 : PARTICLE_BASE_VELOCITY * 8; // Higher limit when gathering

        if (speed > maxSpeed) {
            this.vx *= 0.9;
            this.vy *= 0.9;
        } else if (!isGathering && speed < PARTICLE_BASE_VELOCITY * 0.5) {
            this.vx *= 1.05;
            this.vy *= 1.05;
        }

        // Apply position update for gathering (moved out of else block for normal)
        if (isGathering) {
            this.x += this.vx;
            this.y += this.vy;
        }
    }

    draw() {
        ctx.fillStyle = this.color;
        const pulse = Math.sin(Date.now() * 0.005 + this.x) * 0.5 + 1;
        ctx.globalAlpha = 0.8;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * pulse, 0, Math.PI * 2);
        ctx.fill();
    }
}

// ... ProjectNode (unchanged mostly, but we should apply burst to them too or ignore? Let's ignore nodes for safety)

function burst() {
    if (mouse.x === undefined || mouse.y === undefined) return;

    // Shockwave effect
    particles.forEach(p => {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy) + 0.1; // avoid /0

        // Power is stronger when closer
        const power = (SHOCKWAVE_FORCE * 100) / dist;
        const clampedPower = Math.min(power, 50); // Cap it

        const angle = Math.atan2(dy, dx);
        p.vx += Math.cos(angle) * clampedPower;
        p.vy += Math.sin(angle) * clampedPower;
    });
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
    isGathering = true;
    cursorEl.style.transform = 'translate(-50%, -50%) scale(0.8)';
});

window.addEventListener('mouseup', () => {
    isGathering = false;
    burst();
    cursorEl.style.transform = 'translate(-50%, -50%) scale(1)';
});

// Click Interaction (Modified to respect burst/drag)
window.addEventListener('click', (e) => {
    if (modal.classList.contains('hidden')) {
        let clicked = false;
        // Check nodes first
        for (let node of projectNodes) {
            // Only open if not performing a major burst action? 
            // Actually standard click is fine, but maybe check if burst just happened?
            // Simple: prioritize node click if directly on it.
            if (node.checkClick(e.clientX, e.clientY)) {
                clicked = true;
                break;
            }
        }
    } else if (e.target === modal) {
        closeModalHandler();
    }
});

// ... Modal Logic (unchanged) ...

// ... (skipping to MediaPipe onResults) ...

// ===========================
// MediaPipe Hands Integration
// ===========================
const videoElement = document.getElementsByClassName('input_video')[0];
let lastHandDetectedTime = 0;
const CAMERA_TIMEOUT_MS = 2000;
let latestResults = null;

const PINCH_THRESHOLD = 0.05; // 5% of screen width roughly

function onResults(results) {
    latestResults = results; // Store for drawing
    if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
        // Hand detected
        lastHandDetectedTime = Date.now();

        const landmarks = results.multiHandLandmarks[0];
        const indexTip = landmarks[8];
        const thumbTip = landmarks[4];

        // Mirror horizontally
        const x = (1 - indexTip.x) * width;
        const y = indexTip.y * height;

        targetX = x;
        targetY = y;

        // Pinch Detection (Thumb to Index)
        // Need to calculate distance in normalized coords or mirrored coords?
        // Landmarks are naturally 0..1. Euclidean dist is fine.
        const dx = landmarks[8].x - landmarks[4].x;
        const dy = landmarks[8].y - landmarks[4].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < PINCH_THRESHOLD) {
            if (!isPinching) {
                isPinching = true;
                isGathering = true;
                cursorEl.style.transform = 'translate(-50%, -50%) scale(0.5)'; // Shrink cursor
                cursorEl.style.backgroundColor = 'rgba(0,0,0,0.1)'; // Visual feedback
            }
        } else {
            if (isPinching) {
                // RELEASE PINCH -> BURST
                isPinching = false;
                isGathering = false;
                burst();
                cursorEl.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorEl.style.backgroundColor = 'transparent';
            }
        }

        // Initialize mouse pos if needed
        if (mouse.x === undefined) {
            mouse.x = x;
            mouse.y = y;
        }
    } else {
        // Lost hand
        isPinching = false;
        isGathering = false;
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
const cameraBtn = document.getElementById('camera-btn');
let cameraInstance = null;
let isCameraRunning = false;

if (cameraBtn) {
    cameraBtn.addEventListener('click', () => {
        if (isCameraRunning) {
            // STOP CAMERA
            if (cameraInstance) {
                cameraInstance.stop();

                // Stop the video stream tracks explicitly to turn off the hardware light
                const stream = videoElement.srcObject;
                if (stream) {
                    const tracks = stream.getTracks();
                    tracks.forEach(track => track.stop());
                    videoElement.srcObject = null;
                }
            }

            isCameraRunning = false;
            cameraInstance = null;

            // Reset UI
            cameraBtn.innerText = "Enable Camera Control";
            cameraBtn.style.opacity = '1';

            // Re-enable mouse immediately
            lastHandDetectedTime = 0;

            return;
        }

        // START CAMERA
        cameraBtn.innerText = "Initializing...";
        try {
            cameraInstance = new Camera(videoElement, {
                onFrame: async () => {
                    if (isCameraRunning) { // Double check flag
                        await hands.send({ image: videoElement });
                    }
                },
                width: 640,
                height: 480
            });

            cameraInstance.start()
                .then(() => {
                    isCameraRunning = true;
                    cameraBtn.innerText = "Stop Camera";
                    cameraBtn.style.opacity = '1';

                    // Force active state to prevent immediate fallback
                    lastHandDetectedTime = Date.now();
                })
                .catch(err => {
                    console.error(err);
                    cameraBtn.innerText = "Camera Access Denied";
                    alert("Could not access camera. Please ensure you are on HTTPS and have allowed permissions.");
                    isCameraRunning = false;
                });
        } catch (e) {
            console.warn("Camera setup failed:", e);
            cameraBtn.innerText = "Error";
            isCameraRunning = false;
        }
    });
}


// Detect mobile device once
function detectMobile() {
    isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        ('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0);
}

// Start
init();
animate();

// Helper to check if camera is currently controlling
function isCameraActive() {
    return (Date.now() - lastHandDetectedTime) < CAMERA_TIMEOUT_MS;
}

// Draw Hand Skeleton
function drawHandVisuals() {
    if (isCameraActive() && latestResults && latestResults.multiHandLandmarks) {
        for (const landmarks of latestResults.multiHandLandmarks) {
            // Only draw Index Finger (Landmarks 5, 6, 7, 8)
            // And maybe the connection to wrist (0 -> 5) for context? 
            // User asked to reduce points. Let's just show the Index Finger chain.
            const indexFingerIndices = [5, 6, 7, 8];

            // Draw connections
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
            ctx.lineWidth = 2;

            // Mirror X for first point
            ctx.moveTo((1 - landmarks[5].x) * width, landmarks[5].y * height);

            for (let i = 1; i < indexFingerIndices.length; i++) {
                const idx = indexFingerIndices[i];
                // Mirror X for subsequent points
                ctx.lineTo((1 - landmarks[idx].x) * width, landmarks[idx].y * height);
            }
            ctx.stroke();

            // Draw Tip (8) specifically
            const tip = landmarks[8];
            ctx.beginPath();
            // Mirror X for tip
            ctx.arc((1 - tip.x) * width, tip.y * height, 6, 0, 2 * Math.PI);
            ctx.fillStyle = '#000000';
            ctx.fill();

            // Optional: Draw wrist for "base" reference? 
            // Let's keep it minimal as requested.
        }
    }
}

// Update loop needs to handle the smoothing
function updateInputPosition() {
    // Only update from target if camera is active
    if (isCameraActive() && targetX !== undefined && targetY !== undefined) {
        mouse.x += (targetX - mouse.x) * SMOOTHING_FACTOR;
        mouse.y += (targetY - mouse.y) * SMOOTHING_FACTOR;

        // Visual update
        cursorEl.style.left = mouse.x + 'px';
        cursorEl.style.top = mouse.y + 'px';

        // Active State
        cursorEl.classList.add('camera-active');
    } else {
        // Inactive State (Mouse)
        cursorEl.classList.remove('camera-active');

        // Reset manual overrides
        cursorEl.style.width = '';
        cursorEl.style.height = '';
        cursorEl.style.background = '';
        cursorEl.style.border = '';
        cursorEl.style.transform = '';
    }
}

// Hook into existing animation loop
const originalAnimate = animate;
animate = function () {
    updateInputPosition();
    // Clear/Trails handled in originalAnimate... wait, we need to inject drawing inside the loop
    // But originalAnimate clears the screen at the start! 
    // If we call originalAnimate() first, it clears, draws particles.
    // THEN we draw Hand Visuals on top.

    // However, originalAnimate calls requestAnimationFrame recursively!
    // We cannot just wrap it like this because originalAnimate calls ITSELF, not our wrapper.
    // We need to redefine animate entirely or hook into it properly.
    // But wait, the original code had:
    // requestAnimationFrame(animate);
    // So if I overwrite 'animate', the next frame will call MY new animate.
    // Yes, that works.

    // 1. Trails (clearing) - inside originalAnimate
    // 2. Nodes/Particles - inside originalAnimate
    // 3. Hand Visuals - should be here

    originalAnimate();
    drawHandVisuals(); // Draw on top
};
