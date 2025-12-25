// ===========================
// Home Page - MediaPipe Interactive Canvas
// ===========================

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const videoElement = document.getElementsByClassName('input_video')[0];

// Custom Cursor
const cursorEl = document.createElement('div');
cursorEl.classList.add('custom-cursor');
cursorEl.style.opacity = '1';
document.body.appendChild(cursorEl);

// Config
const PARTICLE_COUNT_DESKTOP = 80;
const PARTICLE_COUNT_MOBILE = 40;
const CONNECTION_DISTANCE = 140;
const MOUSE_DISTANCE = 250;
const PARTICLE_BASE_VELOCITY = 0.8;
const SHOCKWAVE_FORCE = 15;
const SMOOTHING_FACTOR = 0.2;
const GATHER_STRENGTH = 0.5;
const CAMERA_TIMEOUT_MS = 2000;
const PINCH_THRESHOLD = 0.05;
const EFFECT_NODE_RADIUS = 28;
const EFFECT_NODE_HOVER_RADIUS = 38;

const COLORS = ['#111111', '#333333', '#555555', '#777777'];

// Effect Pages Data
const EFFECT_PAGES = [
    { id: 'pa', name: 'Pixel Art', icon: '■', url: '/pa/', color: '#4CAF50' },
    { id: 'sv', name: 'Sound', icon: '♪', url: '/sv/', color: '#9C27B0' },
    { id: 'vp', name: 'Air Music', icon: '♫', url: '/vp/', color: '#00BCD4' },
    { id: 'wd', name: 'Water', icon: '◯', url: '/wd/', color: '#2196F3' },
    { id: 'fg', name: 'Fog', icon: '≋', url: '/fg/', color: '#607D8B' },
    { id: 'dm', name: 'Mirror', icon: '◇', url: '/dm/', color: '#E91E63' },
    { id: 'oc', name: 'Cloak', icon: '◈', url: '/oc/', color: '#FF5722' }
];

// Utility: HEX -> rgba string (avoid browser differences in #RRGGBBAA)
function hexToRgba(hex, alpha = 1) {
    const normalized = hex.replace('#', '');
    const bigint = parseInt(normalized, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

// State
let width, height;
let particles = [];
let effectNodes = [];
let isMobile = false;
let targetX, targetY;
let isGathering = false;
let isPinching = false;
let lastHandDetectedTime = 0;
let latestResults = null;

const mouse = { x: undefined, y: undefined };

function detectMobile() {
    isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
}

function isCameraActive() {
    return (Date.now() - lastHandDetectedTime) < CAMERA_TIMEOUT_MS;
}

class Particle {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * PARTICLE_BASE_VELOCITY;
        this.vy = (Math.random() - 0.5) * PARTICLE_BASE_VELOCITY;
        this.size = Math.random() * 2 + 0.5;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
    }

    update() {
        if (isGathering && mouse.x !== undefined) {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const angle = Math.atan2(dy, dx);
            this.vx += Math.cos(angle) * GATHER_STRENGTH;
            this.vy += Math.sin(angle) * GATHER_STRENGTH;
            this.vx *= 0.9;
            this.vy *= 0.9;
            this.x += this.vx;
            this.y += this.vy;
        } else {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;

            if (mouse.x !== undefined) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < MOUSE_DISTANCE) {
                    const force = (MOUSE_DISTANCE - distance) / MOUSE_DISTANCE;
                    const angle = Math.atan2(dy, dx);
                    this.vx += Math.cos(angle + 0.8) * force * 0.5;
                    this.vy += Math.sin(angle + 0.8) * force * 0.5;
                }
            }
        }

        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        const maxSpeed = isGathering ? 20 : PARTICLE_BASE_VELOCITY * 8;
        if (speed > maxSpeed) { this.vx *= 0.9; this.vy *= 0.9; }
        else if (!isGathering && speed < PARTICLE_BASE_VELOCITY * 0.5) { this.vx *= 1.05; this.vy *= 1.05; }
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = 0.8;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * (Math.sin(Date.now() * 0.005 + this.x) * 0.5 + 1), 0, Math.PI * 2);
        ctx.fill();
    }
}

// ===========================
// Effect Node Class
// ===========================
class EffectNode {
    constructor(data, index, total) {
        this.data = data;
        this.index = index;
        
        // Free roaming initial position
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 1.0;
        this.vy = (Math.random() - 0.5) * 1.0;
        this.targetX = Math.random() * width;
        this.targetY = Math.random() * height;
        this.wanderTimer = 0;
        this.wanderInterval = 2 + Math.random() * 2; // seconds
        
        this.radius = EFFECT_NODE_RADIUS;
        this.targetRadius = EFFECT_NODE_RADIUS;
        this.isHovered = false;
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.glowIntensity = 0;
    }

    updatePosition() {
        // Keep inside the new viewport on resize
        this.x = clamp(this.x, this.radius, width - this.radius);
        this.y = clamp(this.y, this.radius, height - this.radius);
        this.targetX = clamp(this.targetX, this.radius, width - this.radius);
        this.targetY = clamp(this.targetY, this.radius, height - this.radius);
    }

    update() {
        // Wander target update
        const dt = 0.016;
        this.wanderTimer -= dt;
        if (this.wanderTimer <= 0) {
            this.targetX = clamp(Math.random() * width, this.radius, width - this.radius);
            this.targetY = clamp(Math.random() * height, this.radius, height - this.radius);
            this.wanderInterval = 2 + Math.random() * 2; // 2-4s
            this.wanderTimer = this.wanderInterval;
        }
        
        // Steering toward target with slight sway
        const dx = this.targetX - this.x;
        const dy = this.targetY - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy) + 0.001;
        const steerStrength = 0.08;
        this.vx += (dx / dist) * steerStrength;
        this.vy += (dy / dist) * steerStrength;
        
        // Add subtle noise
        this.pulsePhase += 0.02;
        this.vx += Math.sin(this.pulsePhase + this.index) * 0.02;
        this.vy += Math.cos(this.pulsePhase * 0.8 + this.index) * 0.02;
        
        // Damping and speed clamp
        this.vx *= 0.98;
        this.vy *= 0.98;
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        const maxSpeed = 2.0;
        if (speed > maxSpeed) {
            this.vx = (this.vx / speed) * maxSpeed;
            this.vy = (this.vy / speed) * maxSpeed;
        }
        
        this.x += this.vx;
        this.y += this.vy;
        
        // Bounce on edges
        if (this.x < this.radius) { this.x = this.radius; this.vx *= -0.9; }
        if (this.x > width - this.radius) { this.x = width - this.radius; this.vx *= -0.9; }
        if (this.y < this.radius) { this.y = this.radius; this.vy *= -0.9; }
        if (this.y > height - this.radius) { this.y = height - this.radius; this.vy *= -0.9; }
        
        // Check hover
        if (mouse.x !== undefined) {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            this.isHovered = dist < this.radius + 20;
            
            // Slight attraction/repulsion from mouse
            if (dist < 150 && dist > 30) {
                const force = (150 - dist) / 150 * 0.3;
                this.vx += (dx / dist) * force;
                this.vy += (dy / dist) * force;
            }
        } else {
            this.isHovered = false;
        }
        
        // Smooth radius transition
        this.targetRadius = this.isHovered ? EFFECT_NODE_HOVER_RADIUS : EFFECT_NODE_RADIUS;
        this.radius += (this.targetRadius - this.radius) * 0.15;
        
        // Glow intensity
        this.glowIntensity += ((this.isHovered ? 1 : 0) - this.glowIntensity) * 0.1;
    }

    draw() {
        ctx.save();
        
        // Outer glow when hovered
        if (this.glowIntensity > 0.01) {
            const gradient = ctx.createRadialGradient(
                this.x, this.y, this.radius * 0.5,
                this.x, this.y, this.radius * 2
            );
            gradient.addColorStop(0, hexToRgba(this.data.color, clamp(this.glowIntensity * 0.16, 0, 0.25)));
            gradient.addColorStop(1, 'transparent');
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius * 2, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Main circle
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        
        // Fill with gradient
        const bgGradient = ctx.createRadialGradient(
            this.x - this.radius * 0.3, this.y - this.radius * 0.3, 0,
            this.x, this.y, this.radius
        );
        const baseAlpha = this.isHovered ? 0.95 : 0.8;
        bgGradient.addColorStop(0, hexToRgba(this.data.color, clamp(baseAlpha, 0, 1)));
        bgGradient.addColorStop(1, hexToRgba(this.data.color, 0.6));
        ctx.fillStyle = bgGradient;
        ctx.fill();
        
        // Border
        ctx.strokeStyle = this.isHovered ? '#fff' : 'rgba(255,255,255,0.5)';
        ctx.lineWidth = this.isHovered ? 2 : 1;
        ctx.stroke();
        
        // Icon
        ctx.fillStyle = '#fff';
        ctx.font = `${this.radius * 0.7}px sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.data.icon, this.x, this.y);
        
        // Label (show on hover)
        if (this.isHovered) {
            ctx.font = '600 11px Outfit, sans-serif';
            ctx.fillStyle = '#fff';
            ctx.fillText(this.data.name, this.x, this.y + this.radius + 16);
        }
        
        ctx.restore();
    }

    isPointInside(px, py) {
        const dx = px - this.x;
        const dy = py - this.y;
        return Math.sqrt(dx * dx + dy * dy) < this.radius + 10;
    }

    navigate() {
        window.location.href = this.data.url;
    }
}

function burst() {
    if (mouse.x === undefined) return;
    particles.forEach(p => {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy) + 0.1;
        const power = Math.min((SHOCKWAVE_FORCE * 100) / dist, 50);
        const angle = Math.atan2(dy, dx);
        p.vx += Math.cos(angle) * power;
        p.vy += Math.sin(angle) * power;
    });
}

function init() {
    detectMobile();
    resize();
    particles = [];
    effectNodes = [];
    const pCount = isMobile ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP;
    for (let i = 0; i < pCount; i++) particles.push(new Particle());
    
    // Initialize effect nodes
    EFFECT_PAGES.forEach((page, i) => {
        effectNodes.push(new EffectNode(page, i, EFFECT_PAGES.length));
    });
}

function resize() {
    const dpr = window.devicePixelRatio || 1;
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(1, 0, 0, 1, 0, 0); // reset before scaling to avoid cumulative scale
    ctx.scale(dpr, dpr);
    
    // Update effect node positions
    effectNodes.forEach(node => node.updatePosition());
}

function animate() {
    updateInputPosition();
    
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.fillRect(0, 0, width, height);

    ctx.lineWidth = 0.5;
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < CONNECTION_DISTANCE) {
                ctx.strokeStyle = `rgba(0, 0, 0, ${(1 - dist / CONNECTION_DISTANCE) * 0.15})`;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }

    if (mouse.x !== undefined) {
        particles.forEach(p => {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < MOUSE_DISTANCE) {
                ctx.strokeStyle = `rgba(0, 0, 0, ${(1 - dist / MOUSE_DISTANCE) * 0.2})`;
                ctx.beginPath();
                ctx.moveTo(mouse.x, mouse.y);
                ctx.lineTo(p.x, p.y);
                ctx.stroke();
            }
        });
    }
    
    // Draw connections between particles and effect nodes
    effectNodes.forEach(node => {
        particles.forEach(p => {
            const dx = node.x - p.x;
            const dy = node.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < CONNECTION_DISTANCE * 1.5) {
                const alpha = clamp((1 - dist / (CONNECTION_DISTANCE * 1.5)) * 0.1, 0, 0.12);
                ctx.strokeStyle = hexToRgba(node.data.color, alpha);
                ctx.beginPath();
                ctx.moveTo(node.x, node.y);
                ctx.lineTo(p.x, p.y);
                ctx.stroke();
            }
        });
    });

    particles.forEach(p => { p.update(); p.draw(); });
    
    // Update and draw effect nodes
    effectNodes.forEach(node => {
        node.update();
        node.draw();
    });
    
    drawHandVisuals();
    requestAnimationFrame(animate);
}

// MediaPipe
function onResults(results) {
    latestResults = results;
    if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
        lastHandDetectedTime = Date.now();
        const landmarks = results.multiHandLandmarks[0];
        targetX = (1 - landmarks[8].x) * width;
        targetY = landmarks[8].y * height;

        const dx = landmarks[8].x - landmarks[4].x;
        const dy = landmarks[8].y - landmarks[4].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < PINCH_THRESHOLD) {
            if (!isPinching) {
                isPinching = true;
                isGathering = true;
                cursorEl.style.transform = 'translate(-50%, -50%) scale(0.5)';
            }
        } else if (isPinching) {
            isPinching = false;
            isGathering = false;
            
            // Check if pinch release is over an effect node
            for (const node of effectNodes) {
                if (node.isPointInside(mouse.x, mouse.y)) {
                    node.navigate();
                    return;
                }
            }
            
            burst();
            cursorEl.style.transform = 'translate(-50%, -50%) scale(1)';
        }

        if (mouse.x === undefined) { mouse.x = targetX; mouse.y = targetY; }
    } else {
        isPinching = false;
        isGathering = false;
    }
}

function drawHandVisuals() {
    if (isCameraActive() && latestResults && latestResults.multiHandLandmarks) {
        for (const landmarks of latestResults.multiHandLandmarks) {
            // Hand connections - 5 fingers + palm
            const fingerConnections = [
                [0, 1, 2, 3, 4],      // Thumb
                [0, 5, 6, 7, 8],      // Index
                [0, 9, 10, 11, 12],   // Middle
                [0, 13, 14, 15, 16],  // Ring
                [0, 17, 18, 19, 20],  // Pinky
                [5, 9, 13, 17]        // Palm connections
            ];

            ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
            ctx.lineWidth = 2;

            // Draw all finger connections
            fingerConnections.forEach(finger => {
                ctx.beginPath();
                ctx.moveTo((1 - landmarks[finger[0]].x) * width, landmarks[finger[0]].y * height);
                for (let i = 1; i < finger.length; i++) {
                    ctx.lineTo((1 - landmarks[finger[i]].x) * width, landmarks[finger[i]].y * height);
                }
                ctx.stroke();
            });

            // Draw joints
            landmarks.forEach((point, idx) => {
                ctx.beginPath();
                const size = [4, 8, 12, 16, 20].includes(idx) ? 5 : 3; // Fingertips larger
                ctx.arc((1 - point.x) * width, point.y * height, size, 0, 2 * Math.PI);
                ctx.fillStyle = [4, 8, 12, 16, 20].includes(idx) ? '#000000' : 'rgba(0,0,0,0.6)';
                ctx.fill();
            });
        }
    }
}

function updateInputPosition() {
    if (isCameraActive() && targetX !== undefined) {
        mouse.x += (targetX - mouse.x) * SMOOTHING_FACTOR;
        mouse.y += (targetY - mouse.y) * SMOOTHING_FACTOR;
        cursorEl.style.left = mouse.x + 'px';
        cursorEl.style.top = mouse.y + 'px';
        cursorEl.classList.add('camera-active');
    } else {
        cursorEl.classList.remove('camera-active');
    }
}

// MediaPipe Hands
const hands = new Hands({
    locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
});
hands.setOptions({ maxNumHands: 1, modelComplexity: 1, minDetectionConfidence: 0.5, minTrackingConfidence: 0.5 });
hands.onResults(onResults);

// Camera Control
const cameraBtn = document.getElementById('camera-btn');
let cameraInstance = null;
let isCameraRunning = false;

if (cameraBtn) {
    cameraBtn.addEventListener('click', () => {
        if (isCameraRunning) {
            if (cameraInstance) {
                cameraInstance.stop();
                if (videoElement.srcObject) {
                    videoElement.srcObject.getTracks().forEach(t => t.stop());
                    videoElement.srcObject = null;
                }
            }
            isCameraRunning = false;
            cameraInstance = null;
            cameraBtn.innerText = "Enable Camera Control";
            lastHandDetectedTime = 0;
            return;
        }

        cameraBtn.innerText = "Initializing...";
        try {
            cameraInstance = new Camera(videoElement, {
                onFrame: async () => { if (isCameraRunning) await hands.send({ image: videoElement }); },
                width: 640, height: 480
            });
            cameraInstance.start()
                .then(() => { isCameraRunning = true; cameraBtn.innerText = "Stop Camera"; lastHandDetectedTime = Date.now(); })
                .catch(err => { cameraBtn.innerText = "Camera Denied"; isCameraRunning = false; });
        } catch (e) { cameraBtn.innerText = "Error"; isCameraRunning = false; }
    });
}

// Mouse Events - Always track mouse position and show cursor
window.addEventListener('mousemove', (e) => {
    // Always update cursor position visually
    cursorEl.style.left = e.clientX + 'px';
    cursorEl.style.top = e.clientY + 'px';
    cursorEl.style.opacity = '1';
    
    // Only update particle interaction when camera is not active
    if (!isCameraActive()) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    }
});

window.addEventListener('mouseleave', () => { 
    cursorEl.style.opacity = '0';
    if (!isCameraActive()) { 
        mouse.x = undefined; 
        mouse.y = undefined; 
    }
});

window.addEventListener('mouseenter', () => { 
    cursorEl.style.opacity = '1'; 
});

window.addEventListener('focus', () => { 
    cursorEl.style.opacity = '1'; 
});

document.addEventListener('visibilitychange', () => { 
    if (!document.hidden) cursorEl.style.opacity = '1'; 
});

window.addEventListener('mousedown', (e) => { 
    // Check if clicking on effect node
    for (const node of effectNodes) {
        if (node.isPointInside(e.clientX, e.clientY)) {
            node.navigate();
            return;
        }
    }
    
    if (!isCameraActive()) { 
        isGathering = true; 
        cursorEl.style.transform = 'translate(-50%, -50%) scale(0.8)'; 
    } 
});

window.addEventListener('mouseup', () => { 
    if (!isCameraActive()) { 
        isGathering = false; 
        burst(); 
        cursorEl.style.transform = 'translate(-50%, -50%) scale(1)'; 
    } 
});

// Touch Events for Mobile
window.addEventListener('touchstart', (e) => {
    if (isCameraActive()) return;
    
    const touch = e.touches[0];
    
    // Check if tapping on effect node
    for (const node of effectNodes) {
        if (node.isPointInside(touch.clientX, touch.clientY)) {
            node.navigate();
            return;
        }
    }
    
    mouse.x = touch.clientX;
    mouse.y = touch.clientY;
    isGathering = true;
    
    // Update cursor position
    cursorEl.style.left = touch.clientX + 'px';
    cursorEl.style.top = touch.clientY + 'px';
    cursorEl.style.opacity = '1';
    cursorEl.style.transform = 'translate(-50%, -50%) scale(0.8)';
}, { passive: true });

window.addEventListener('touchmove', (e) => {
    if (isCameraActive()) return;
    
    const touch = e.touches[0];
    mouse.x = touch.clientX;
    mouse.y = touch.clientY;
    
    // Update cursor position
    cursorEl.style.left = touch.clientX + 'px';
    cursorEl.style.top = touch.clientY + 'px';
}, { passive: true });

window.addEventListener('touchend', () => {
    if (isCameraActive()) return;
    
    isGathering = false;
    burst();
    cursorEl.style.transform = 'translate(-50%, -50%) scale(1)';
    
    // Keep particles interactive for a moment, then reset
    setTimeout(() => {
        mouse.x = undefined;
        mouse.y = undefined;
        cursorEl.style.opacity = '0';
    }, 300);
}, { passive: true });

window.addEventListener('resize', resize);

init();
animate();
