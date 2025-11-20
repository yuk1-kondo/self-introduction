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
const PARTICLE_COUNT_DESKTOP = 80;
const PARTICLE_COUNT_MOBILE = 50;
const CONNECTION_DISTANCE = 150;
const MOUSE_DISTANCE = 200;
const PARTICLE_BASE_VELOCITY = 2.5;
const PROJECT_NODE_VELOCITY_DESKTOP = 0.3;
const PROJECT_NODE_VELOCITY_MOBILE = 1.0;
const SHOCKWAVE_FORCE = 1500;
const DOUBLE_TAP_DELAY = 300;
const TOUCH_RESET_DELAY = 300;
const PROJECT_NODE_HIT_AREA = 40;

const COLORS = [
    '#000000', // Black
    '#333333', // Dark Gray
    '#666666', // Medium Gray
    '#999999', // Light Gray
    '#cccccc'  // Very Light Gray
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
        this.baseVelocity = PARTICLE_BASE_VELOCITY;
        this.size = Math.random() * 3 + 1;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.baseSize = this.size;
        this.shape = Math.random() > 0.5 ? 'circle' : 'square';
        this.dampingActive = false;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        // Apply damping only if particle was affected by shockwave
        if (this.dampingActive) {
            const currentSpeed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
            if (currentSpeed > this.baseVelocity * 1.2) {
                const dampingFactor = 0.97; // Gradual slowdown
                this.vx *= dampingFactor;
                this.vy *= dampingFactor;
            } else {
                // Reset to base velocity and turn off damping
                const angle = Math.atan2(this.vy, this.vx);
                this.vx = Math.cos(angle) * this.baseVelocity;
                this.vy = Math.sin(angle) * this.baseVelocity;
                this.dampingActive = false;
            }
        }

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Mouse interaction (Repel/Attract)
        if (mouse.x !== undefined && mouse.y !== undefined) {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < MOUSE_DISTANCE) {
                const forceDirectionX = dx / distance;
                const forceDirectionY = dy / distance;
                const force = (MOUSE_DISTANCE - distance) / MOUSE_DISTANCE;
                const directionX = forceDirectionX * force * 2;
                const directionY = forceDirectionY * force * 2;

                if (mouse.isPressed) {
                    this.x += directionX * 2; // Attract
                    this.y += directionY * 2;
                } else {
                    this.x -= directionX; // Repel
                    this.y -= directionY;
                }
            }
        }
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        if (this.shape === 'circle') {
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        } else {
            ctx.rect(this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
        }
        ctx.fill();
    }
}

// ===========================
// ProjectNode Class
// ===========================
class ProjectNode {
    constructor(data) {
        this.data = data;
        this.x = Math.random() * (width - 200) + 100; // Keep away from edges
        this.y = Math.random() * (height - 200) + 100;
        // Use faster velocity for mobile, slower for desktop
        const velocity = isMobile ? PROJECT_NODE_VELOCITY_MOBILE : PROJECT_NODE_VELOCITY_DESKTOP;
        this.vx = (Math.random() - 0.5) * velocity;
        this.vy = (Math.random() - 0.5) * velocity;
        this.baseVelocity = velocity;
        this.size = 8; // Larger base size
        this.baseSize = 8;
        this.hoverSize = 15;
        this.color = '#000000'; // Main projects are black (or dark)
        this.isHovered = false;
        this.dampingActive = false;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        // Apply damping only if node was affected by shockwave
        if (this.dampingActive) {
            const currentSpeed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
            if (currentSpeed > this.baseVelocity * 1.2) {
                const dampingFactor = 0.97; // Gradual slowdown
                this.vx *= dampingFactor;
                this.vy *= dampingFactor;
            } else {
                // Reset to base velocity and turn off damping
                const angle = Math.atan2(this.vy, this.vx);
                this.vx = Math.cos(angle) * this.baseVelocity;
                this.vy = Math.sin(angle) * this.baseVelocity;
                this.dampingActive = false;
            }
        }

        if (this.x < 50 || this.x > width - 50) this.vx *= -1;
        if (this.y < 50 || this.y > height - 50) this.vy *= -1;

        // Check hover
        if (mouse.x != undefined && mouse.y != undefined) {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 30) { // Hover radius
                this.isHovered = true;
                // Smooth size transition
                if (this.size < this.hoverSize) {
                    this.size += (this.hoverSize - this.size) * 0.2;
                }
                document.body.style.cursor = 'pointer';
            } else {
                this.isHovered = false;
                // Smooth size transition back
                if (this.size > this.baseSize) {
                    this.size -= (this.size - this.baseSize) * 0.2;
                }
            }
        } else {
            this.isHovered = false;
            if (this.size > this.baseSize) {
                this.size -= (this.size - this.baseSize) * 0.2;
            }
        }
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        // Diamond shape for projects
        ctx.moveTo(this.x, this.y - this.size);
        ctx.lineTo(this.x + this.size, this.y);
        ctx.lineTo(this.x, this.y + this.size);
        ctx.lineTo(this.x - this.size, this.y);
        ctx.closePath();
        ctx.fill();

        // Draw Label - always visible on mobile, hover on desktop
        const shouldShowLabel = isMobile || this.isHovered || this.size > this.baseSize + 2;

        if (shouldShowLabel) {
            // Save context state
            ctx.save();

            // Optimize text rendering for smooth display
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';

            // Add shadow for better visibility
            ctx.shadowColor = 'rgba(255, 255, 255, 0.9)';
            ctx.shadowBlur = 6;
            ctx.fillStyle = '#000';
            ctx.font = isMobile ? '500 15px Outfit' : '500 16px Outfit';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            // Draw label text
            const textY = this.y - this.size - 18;
            ctx.fillText(this.data.title, this.x, textY);

            // Restore context state
            ctx.restore();
        }
    }

    checkClick(x, y) {
        // If x, y are provided (from touch), check distance directly
        if (x !== undefined && y !== undefined) {
            const dx = x - this.x;
            const dy = y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < PROJECT_NODE_HIT_AREA) {
                openModal(this.data);
                return true;
            }
        } else if (this.isHovered) {
            // Desktop: use hover state
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
    detectMobile(); // Detect device type once
    resize();
    particles = [];
    projectNodes = [];

    // Create background particles (adjust count based on device)
    const particleCount = isMobile ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP;
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    // Create project nodes from portfolio data
    if (typeof portfolioData !== 'undefined') {
        portfolioData.projects.forEach(project => {
            projectNodes.push(new ProjectNode(project));
        });
    }
}

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Optimize canvas rendering for smooth text
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.textRendering = 'optimizeLegibility';
}

function animate() {
    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    const allNodes = [...particles, ...projectNodes];

    // Batch path operations for better performance
    ctx.save();

    // Draw connections between nodes
    for (let a = 0; a < allNodes.length; a++) {
        for (let b = a + 1; b < allNodes.length; b++) {
            const dx = allNodes[a].x - allNodes[b].x;
            const dy = allNodes[a].y - allNodes[b].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < CONNECTION_DISTANCE) {
                const opacityValue = 1 - (distance / CONNECTION_DISTANCE);
                ctx.strokeStyle = `rgba(0, 0, 0, ${opacityValue * 0.08})`;
                ctx.lineWidth = 0.8;
                ctx.beginPath();
                ctx.moveTo(allNodes[a].x, allNodes[a].y);
                ctx.lineTo(allNodes[b].x, allNodes[b].y);
                ctx.stroke();
            }
        }
    }

    ctx.restore();

    // Update and draw particles
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });

    // Update and draw project nodes (draw last to be on top)
    let cursorPointer = false;
    projectNodes.forEach(node => {
        node.update();
        node.draw();
        if (node.isHovered) cursorPointer = true;
    });

    // Update cursor style
    document.body.style.cursor = cursorPointer ? 'pointer' : 'default';

    // Draw connections to mouse
    if (mouse.x !== undefined && mouse.y !== undefined) {
        ctx.save();
        allNodes.forEach(node => {
            const dx = mouse.x - node.x;
            const dy = mouse.y - node.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < MOUSE_DISTANCE) {
                const opacityValue = 1 - (distance / MOUSE_DISTANCE);
                ctx.strokeStyle = `rgba(50, 50, 50, ${opacityValue * 0.2})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(mouse.x, mouse.y);
                ctx.lineTo(node.x, node.y);
                ctx.stroke();
            }
        });
        ctx.restore();
    }

    requestAnimationFrame(animate);
}

// ===========================
// Modal Functions
// ===========================
function openModal(data) {
    modalTitle.innerText = data.title;
    modalCategory.innerText = data.category;
    modalDescription.innerText = data.description;

    // Apply left alignment for About Me, Repository, and other descriptive sections
    if (data.id === 'proj1' || data.id === 'proj2' || data.id === 'proj4') {
        modalDescription.classList.add('modal-description-left');
    } else {
        modalDescription.classList.remove('modal-description-left');
    }

    // Handle profile image - only show for About Me (proj1)
    if (data.id === 'proj1' && data.image) {
        const resolvedSrc = resolveImagePath(data.image);
        modalImage.onerror = () => {
            modalImage.onerror = null;
            modalImage.classList.add('hidden');
            if (modalImageWrapper) modalImageWrapper.classList.add('hidden');
        };
        modalImage.src = resolvedSrc;
        modalImage.alt = data.title;
        modalImage.classList.remove('hidden');
        if (modalImageWrapper) modalImageWrapper.classList.remove('hidden');
    } else {
        // Hide image for all other sections
        modalImage.onerror = null;
        modalImage.classList.add('hidden');
        if (modalImageWrapper) modalImageWrapper.classList.add('hidden');
    }

    // Reset default styles first
    modalLink.style.pointerEvents = 'auto';
    modalLink.style.opacity = '1';
    modalLink.style.display = 'inline-block';
    modalLink.onclick = null;
    modalLink.removeAttribute('target');

    // Change button text based on project type
    if (data.link.startsWith('mailto:')) {
        modalLink.innerText = 'Send Email';
        modalLink.href = data.link;
        // Let the browser handle mailto naturally
    } else if (data.link.startsWith('https://github.com/')) {
        modalLink.innerText = 'View on GitHub';
        modalLink.href = data.link;
        modalLink.setAttribute('target', '_blank');
    } else if (data.link === '#') {
        // Hide button for projects without links (except Contact)
        modalLink.style.display = 'none';
    } else {
        modalLink.innerText = 'View Project';
        modalLink.href = data.link;
        modalLink.setAttribute('target', '_blank');
    }

    modal.classList.remove('hidden');
}

// ===========================
// Event Listeners
// ===========================

// Close modal function
function closeModalHandler() {
    modal.classList.add('hidden');
}

// Modal event listeners
closeModal.addEventListener('click', closeModalHandler);

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModalHandler();
    }
});

// Close modal on ESC key press
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModalHandler();
    }
});

// Window and canvas event listeners
window.addEventListener('resize', resize);

window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

window.addEventListener('mousedown', () => {
    mouse.isPressed = true;
});

window.addEventListener('mouseup', () => {
    mouse.isPressed = false;
});

// Handle both click and tap for project nodes
function handleProjectNodeInteraction() {
    if (modal.classList.contains('hidden')) {
        projectNodes.forEach(node => node.checkClick());
    }
}

window.addEventListener('click', handleProjectNodeInteraction);

window.addEventListener('dblclick', (e) => {
    if (modal.classList.contains('hidden')) {
        const clickX = e.clientX;
        const clickY = e.clientY;

        // Apply shockwave to particles
        particles.forEach(p => {
            const dx = p.x - clickX;
            const dy = p.y - clickY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const force = SHOCKWAVE_FORCE / (dist + 10);

            const angle = Math.atan2(dy, dx);
            p.vx += Math.cos(angle) * force;
            p.vy += Math.sin(angle) * force;
            p.dampingActive = true;
        });

        // Apply shockwave to project nodes
        projectNodes.forEach(node => {
            const dx = node.x - clickX;
            const dy = node.y - clickY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const force = SHOCKWAVE_FORCE / (dist + 10);

            const angle = Math.atan2(dy, dx);
            node.vx += Math.cos(angle) * force;
            node.vy += Math.sin(angle) * force;
            node.dampingActive = true;
        });
    }
});

window.addEventListener('mouseout', () => {
    mouse.x = undefined;
    mouse.y = undefined;
    mouse.isPressed = false;
});

// Touch event listeners
window.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;

    // Update mouse position and interaction state
    mouse.x = touch.clientX;
    mouse.y = touch.clientY;
    mouse.isPressed = true;

    // Store tap position for modal opening
    tapStartX = touch.clientX;
    tapStartY = touch.clientY;

    // Check for double-tap (shockwave effect)
    if (tapLength < DOUBLE_TAP_DELAY && tapLength > 0 && modal.classList.contains('hidden')) {
        // Apply shockwave to particles
        particles.forEach(p => {
            const dx = p.x - touch.clientX;
            const dy = p.y - touch.clientY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const force = SHOCKWAVE_FORCE / (dist + 10);

            const angle = Math.atan2(dy, dx);
            p.vx += Math.cos(angle) * force;
            p.vy += Math.sin(angle) * force;
            p.dampingActive = true;
        });

        // Apply shockwave to project nodes
        projectNodes.forEach(node => {
            const dx = node.x - touch.clientX;
            const dy = node.y - touch.clientY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const force = SHOCKWAVE_FORCE / (dist + 10);

            const angle = Math.atan2(dy, dx);
            node.vx += Math.cos(angle) * force;
            node.vy += Math.sin(angle) * force;
            node.dampingActive = true;
        });
    }

    lastTap = currentTime;
});

window.addEventListener('touchmove', (e) => {
    e.preventDefault(); // Prevent scrolling
    const touch = e.touches[0];
    mouse.x = touch.clientX;
    mouse.y = touch.clientY;
}, { passive: false });

window.addEventListener('touchend', () => {
    mouse.isPressed = false;

    // Check if a project node was tapped
    if (modal.classList.contains('hidden') && tapStartX !== undefined) {
        for (let node of projectNodes) {
            if (node.checkClick(tapStartX, tapStartY)) {
                break;
            }
        }
    }

    // Reset mouse and tap position after delay
    setTimeout(() => {
        mouse.x = undefined;
        mouse.y = undefined;
        tapStartX = undefined;
        tapStartY = undefined;
    }, TOUCH_RESET_DELAY);
});

// ===========================
// Initialize and Start
// ===========================
init();
animate();
