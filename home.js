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

const COLORS = ['#111111', '#333333', '#555555', '#777777'];

// State
let width, height;
let particles = [];
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
    const pCount = isMobile ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP;
    for (let i = 0; i < pCount; i++) particles.push(new Particle());
}

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
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

    particles.forEach(p => { p.update(); p.draw(); });
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

window.addEventListener('mousedown', () => { 
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
window.addEventListener('resize', resize);

init();
animate();
