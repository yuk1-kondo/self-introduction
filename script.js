const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Modal Elements
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalCategory = document.getElementById('modal-category');
const modalDescription = document.getElementById('modal-description');
const modalLink = document.getElementById('modal-link');
const closeModal = document.getElementById('close-modal');

let width, height;
let particles = [];
let projectNodes = [];
const particleCount = 80; // Reduced slightly to make room for projects
const connectionDistance = 150;
const mouseDistance = 200;

// Mouse state
const mouse = {
    x: undefined,
    y: undefined,
    isPressed: false
};

// Colors - Monochrome Palette
const colors = [
    '#000000', // Black
    '#333333', // Dark Gray
    '#666666', // Medium Gray
    '#999999', // Light Gray
    '#cccccc'  // Very Light Gray
];

class Particle {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
        this.baseVelocity = 1.5; // Store base velocity for normalization
        this.size = Math.random() * 3 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.baseSize = this.size;
        this.shape = Math.random() > 0.5 ? 'circle' : 'square';
        this.dampingActive = false; // Only apply damping after shockwave
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
        if (mouse.x != undefined && mouse.y != undefined) {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < mouseDistance) {
                const forceDirectionX = dx / distance;
                const forceDirectionY = dy / distance;
                const force = (mouseDistance - distance) / mouseDistance;
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

class ProjectNode {
    constructor(data) {
        this.data = data;
        this.x = Math.random() * (width - 200) + 100; // Keep away from edges
        this.y = Math.random() * (height - 200) + 100;
        this.vx = (Math.random() - 0.5) * 0.5; // Slower movement
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = 8; // Larger base size
        this.baseSize = 8;
        this.hoverSize = 15;
        this.color = '#000000'; // Main projects are black (or dark)
        this.isHovered = false;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 50 || this.x > width - 50) this.vx *= -1;
        if (this.y < 50 || this.y > height - 50) this.vy *= -1;

        // Check hover
        if (mouse.x != undefined && mouse.y != undefined) {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 30) { // Hover radius
                this.isHovered = true;
                if (this.size < this.hoverSize) this.size += 1;
                document.body.style.cursor = 'pointer';
            } else {
                this.isHovered = false;
                if (this.size > this.baseSize) this.size -= 1;
            }
        } else {
            this.isHovered = false;
            if (this.size > this.baseSize) this.size -= 1;
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

        // Draw Label if hovered
        if (this.isHovered || this.size > this.baseSize + 2) {
            ctx.fillStyle = '#333';
            ctx.font = '16px Outfit';
            ctx.textAlign = 'center';
            ctx.fillText(this.data.title, this.x, this.y - this.size - 10);
        }
    }

    checkClick() {
        if (this.isHovered) {
            openModal(this.data);
        }
    }
}

function init() {
    resize();
    particles = [];
    projectNodes = [];

    // Create background particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    // Create Project Nodes
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
}

function animate() {
    ctx.clearRect(0, 0, width, height);

    let allNodes = [...particles, ...projectNodes];

    // Draw connections
    for (let a = 0; a < allNodes.length; a++) {
        for (let b = a; b < allNodes.length; b++) {
            let dx = allNodes[a].x - allNodes[b].x;
            let dy = allNodes[a].y - allNodes[b].y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < connectionDistance) {
                let opacityValue = 1 - (distance / connectionDistance);
                ctx.strokeStyle = 'rgba(0, 0, 0,' + opacityValue * 0.1 + ')';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(allNodes[a].x, allNodes[a].y);
                ctx.lineTo(allNodes[b].x, allNodes[b].y);
                ctx.stroke();
            }
        }
    }

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

    if (!cursorPointer) {
        document.body.style.cursor = 'default';
    }

    // Mouse connections
    if (mouse.x != undefined && mouse.y != undefined) {
        allNodes.forEach(node => {
            let dx = mouse.x - node.x;
            let dy = mouse.y - node.y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < mouseDistance) {
                let opacityValue = 1 - (distance / mouseDistance);
                ctx.strokeStyle = 'rgba(50, 50, 50,' + opacityValue * 0.2 + ')';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(mouse.x, mouse.y);
                ctx.lineTo(node.x, node.y);
                ctx.stroke();
            }
        });
    }

    requestAnimationFrame(animate);
}

// Modal Logic
function openModal(data) {
    modalTitle.innerText = data.title;
    modalCategory.innerText = data.category;
    modalDescription.innerText = data.description;
    modalLink.href = data.link;
    
    // Reset default styles first
    modalLink.style.pointerEvents = 'auto';
    modalLink.style.opacity = '1';
    modalLink.onclick = null;
    
    // Change button text based on project type
    if (data.link.startsWith('mailto:')) {
        modalLink.innerText = 'Send Email';
        // Force mailto to work by using location.href on click
        modalLink.onclick = function(e) {
            e.preventDefault();
            window.location.href = data.link;
            return false;
        };
    } else if (data.link === '#') {
        modalLink.innerText = 'Coming Soon';
        modalLink.style.pointerEvents = 'none';
        modalLink.style.opacity = '0.5';
    } else {
        modalLink.innerText = 'View Project';
    }
    
    modal.classList.remove('hidden');
}

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
    }
});

// Event Listeners
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

window.addEventListener('click', (e) => {
    // Check if clicked on a project node
    // Only if modal is hidden
    if (modal.classList.contains('hidden')) {
        projectNodes.forEach(node => node.checkClick());
    }
});

window.addEventListener('dblclick', (e) => {
    // Shockwave effect on double-click
    // Only affect particles, not projectNodes
    if (modal.classList.contains('hidden')) {
        const clickX = e.clientX;
        const clickY = e.clientY;
        
        particles.forEach(p => {
            const dx = p.x - clickX;
            const dy = p.y - clickY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const force = 1500 / (dist + 10); // Stronger repulsive force
            
            const angle = Math.atan2(dy, dx);
            p.vx += Math.cos(angle) * force;
            p.vy += Math.sin(angle) * force;
            p.dampingActive = true; // Enable damping after shockwave
        });
    }
});

window.addEventListener('mouseout', () => {
    mouse.x = undefined;
    mouse.y = undefined;
    mouse.isPressed = false;
});

// Touch support for mobile
window.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    mouse.x = touch.clientX;
    mouse.y = touch.clientY;
    mouse.isPressed = true;
});

window.addEventListener('touchmove', (e) => {
    e.preventDefault(); // Prevent scrolling
    const touch = e.touches[0];
    mouse.x = touch.clientX;
    mouse.y = touch.clientY;
}, { passive: false });

window.addEventListener('touchend', () => {
    mouse.isPressed = false;
    setTimeout(() => {
        mouse.x = undefined;
        mouse.y = undefined;
    }, 300);
});

// Double-tap for shockwave on mobile
let lastTap = 0;
window.addEventListener('touchstart', (e) => {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;
    
    if (tapLength < 300 && tapLength > 0) {
        // Double tap detected
        const touch = e.touches[0];
        const clickX = touch.clientX;
        const clickY = touch.clientY;
        
        particles.forEach(p => {
            const dx = p.x - clickX;
            const dy = p.y - clickY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const force = 1500 / (dist + 10); // Stronger force
            
            const angle = Math.atan2(dy, dx);
            p.vx += Math.cos(angle) * force;
            p.vy += Math.sin(angle) * force;
            p.dampingActive = true; // Enable damping after shockwave
        });
    }
    lastTap = currentTime;
});

init();
animate();
