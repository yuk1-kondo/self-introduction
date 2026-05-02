// ===========================
// Home Page - MediaPipe Interactive Canvas
// ===========================

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const rainCanvas = document.getElementById('rain-canvas');
const videoElement = document.getElementsByClassName('input_video')[0];
const langToggle = document.getElementById('lang-toggle');
const rainmanBtn = document.getElementById('rainman-btn');

const UI_TEXTS = {
    ja: {
        navAbout: '自己紹介',
        navWork: '作品',
        navContact: '連絡',
        eyebrow: '理科教員志望 / 生成AI・教育・クリエイティブコーディング',
        lead: '関西出身の理科教員志望です。生成AI、Web表現、ハードウェアを組み合わせ、理科の学びを体験として理解できる教材やプロトタイプを制作しています。',
        viewWork: '作品を見る',
        readAbout: '自己紹介を読む',
        contactMe: '連絡する',
        factFocus: 'Focus',
        factFocusValue: '教育 x 生成AI x 体験型学習',
        factStrength: 'Strength',
        factStrengthValue: '教材アイデアを動く試作に落とす力',
        factBase: 'Base',
        factBaseValue: '関西 / 理科教育',
        aboutKicker: 'About',
        aboutTitle: '学びを「触れる体験」に変える',
        aboutBody1: '理科教員を目指しながら、Web・生成AI・ハードウェアを組み合わせた学習体験の制作に取り組んでいます。知識を説明するだけでなく、触って試して発見できる教材やアプリを作ることに関心があります。',
        aboutBody2: 'Spresenseを使ったピクセルアートカメラ、Geminiを活用したストーリーテリングAI、MediaPipeによるジェスチャー操作など、教育現場で使える可能性を意識しながら小さく試作しています。',
        skillsKicker: 'Skills',
        skillsTitle: '用途で使い分ける技術',
        workKicker: 'Work',
        workTitle: '学習体験につながる制作物',
        workPixel: 'カメラ表現と教材化の実験',
        workSound: '音と身体操作の実験',
        workAir: '空中操作による音楽体験',
        workWater: '雨滴表現とインタラクション',
        workFog: '曇りガラスを拭く体験設計',
        workMirror: '映像の歪みを使った表現',
        workCloak: '光学迷彩の表現実験',
        workGesture: 'ジェスチャーUIの実験集',
        achievementKicker: 'Achievement',
        achievementTitle: 'Google Cloud Generative AI Leader',
        achievementBody: '生成AIがビジネスや学びをどう変えるかを理解し、Google Cloud の生成AIサービスを活用するための基礎知識を身につけています。',
        contactKicker: 'Contact',
        contactTitle: '教育とテクノロジーの実験をご一緒できたら嬉しいです',
        gestureHint: '背景の丸いノードから作品へ移動できます',
        rainmanEnable: 'Rainman',
        rainmanDisable: '晴れに戻す',
        cameraEnable: '手で操作する',
        cameraStop: 'カメラ停止',
        cameraInitializing: '準備中...',
        cameraDenied: 'カメラ不可',
        cameraUnavailable: 'カメラ非対応'
    },
    en: {
        navAbout: 'About',
        navWork: 'Work',
        navContact: 'Contact',
        eyebrow: 'Science teacher trainee / Generative AI, education, creative coding',
        lead: 'I am a science teacher trainee from Kansai. I build learning prototypes that combine generative AI, web expression, and hardware so science concepts can be understood through hands-on experience.',
        viewWork: 'View Work',
        readAbout: 'Read About',
        contactMe: 'Contact',
        factFocus: 'Focus',
        factFocusValue: 'Education x GenAI x experiential learning',
        factStrength: 'Strength',
        factStrengthValue: 'Turning learning ideas into working prototypes',
        factBase: 'Base',
        factBaseValue: 'Kansai / Science education',
        aboutKicker: 'About',
        aboutTitle: 'Turning learning into something you can touch',
        aboutBody1: 'While working toward becoming a science teacher, I create learning experiences that combine the web, generative AI, and hardware. I am interested in tools and lessons that let learners discover ideas by trying them directly.',
        aboutBody2: 'I prototype with classroom use in mind: a pixel-art camera with Spresense, storytelling AI with Gemini, and gesture interactions with MediaPipe are examples of how I turn ideas into usable experiences.',
        skillsKicker: 'Skills',
        skillsTitle: 'Tools grouped by purpose',
        workKicker: 'Work',
        workTitle: 'Projects connected to learning experiences',
        workPixel: 'Camera expression and learning experiment',
        workSound: 'Sound and embodied interaction',
        workAir: 'Air-controlled music experience',
        workWater: 'Raindrop rendering and interaction',
        workFog: 'Foggy glass interaction design',
        workMirror: 'Visual distortion expression',
        workCloak: 'Optical camouflage expression',
        workGesture: 'Gesture UI experiment lab',
        achievementKicker: 'Achievement',
        achievementTitle: 'Google Cloud Generative AI Leader',
        achievementBody: 'I have foundational knowledge of how generative AI changes business and learning, and how to use Google Cloud generative AI services.',
        contactKicker: 'Contact',
        contactTitle: 'I would be glad to collaborate on experiments in education and technology',
        gestureHint: 'Use the floating circles as playful shortcuts to work',
        rainmanEnable: 'Rainman',
        rainmanDisable: 'Clear sky',
        cameraEnable: 'Control by hand',
        cameraStop: 'Stop camera',
        cameraInitializing: 'Initializing...',
        cameraDenied: 'Camera denied',
        cameraUnavailable: 'Unavailable'
    }
};

let currentLang = localStorage.getItem('preferredLang') || 'ja';

// Custom Cursor
const cursorEl = document.createElement('div');
cursorEl.classList.add('custom-cursor');
cursorEl.style.opacity = '1';
document.body.appendChild(cursorEl);

// Config
const PARTICLE_COUNT_DESKTOP = 56;
const PARTICLE_COUNT_MOBILE = 28;
const CONNECTION_DISTANCE = 118;
const MOUSE_DISTANCE = 190;
const PARTICLE_BASE_VELOCITY = 0.45;
const SHOCKWAVE_FORCE = 8;
const SMOOTHING_FACTOR = 0.2;
const GATHER_STRENGTH = 0.28;
const CAMERA_TIMEOUT_MS = 2000;
const PINCH_THRESHOLD = 0.05;
const EFFECT_NODE_RADIUS = 13;
const EFFECT_NODE_HOVER_RADIUS = 21;

const COLORS = ['#2b2b2b', '#5d5d55', '#8c8678', '#b7aa91'];

// Effect Pages Data
const EFFECT_PAGES = [
    { id: 'pa', name: 'Pixel Art', icon: '■', url: '/pa/', color: '#4CAF50' },
    { id: 'sv', name: 'Sound', icon: '♪', url: '/sv/', color: '#9C27B0' },
    { id: 'vp', name: 'Air Music', icon: '♫', url: '/vp/', color: '#00BCD4' },
    { id: 'wd', name: 'Water', icon: '◯', url: '/wd/', color: '#2196F3' },
    { id: 'fg', name: 'Fog', icon: '≋', url: '/fg/', color: '#607D8B' },
    { id: 'dm', name: 'Mirror', icon: '◇', url: '/dm/', color: '#E91E63' },
    { id: 'oc', name: 'Cloak', icon: '◈', url: '/oc/', color: '#FF5722' },
    { id: 'gl', name: 'Gesture Lab', icon: '✦', url: '/gl/', color: '#ffa575' }
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
let rainEngine = null;
let rainImagesPromise = null;
let rainRenderer = null;
let rainGl = null;
let rainRenderMode = null;
let rainSnapshotCanvas = null;
let rainSnapshotPromise = null;
let rainAnimationFrame = null;
let rainActive = false;
let rainLastFrame = 0;

const mouse = { x: undefined, y: undefined };

function detectMobile() {
    isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
}

function isCameraActive() {
    return (Date.now() - lastHandDetectedTime) < CAMERA_TIMEOUT_MS;
}

const RainDropProto = {
    x: 0,
    y: 0,
    r: 0,
    spreadX: 0,
    spreadY: 0,
    momentum: 0,
    momentumX: 0,
    lastSpawn: 0,
    nextSpawn: 0,
    parent: null,
    isNew: true,
    killed: false,
    shrink: 0
};

class HomeRaindrops {
    constructor(w, h, scale, dropAlpha, dropColor, options = {}) {
        this.width = w;
        this.height = h;
        this.scale = scale;
        this.dropAlpha = dropAlpha;
        this.dropColor = dropColor;
        this.options = Object.assign({
            minR: 10,
            maxR: 40,
            maxDrops: 900,
            rainChance: 0.3,
            rainLimit: 3,
            dropletsRate: 50,
            dropletsSize: [2, 4],
            dropletsCleaningRadiusMultiplier: 0.43,
            raining: true,
            globalTimeScale: 1,
            trailRate: 1,
            autoShrink: true,
            spawnArea: [-0.1, 0.95],
            trailScaleRange: [0.2, 0.5],
            collisionRadius: 0.65,
            collisionRadiusIncrease: 0.01,
            dropFallMultiplier: 1,
            collisionBoostMultiplier: 0.05,
            collisionBoost: 1
        }, options);
        this.drops = [];
        this.dropletsPixelDensity = 1;
        this.dropletsCounter = 0;
        this.textureCleaningIterations = 0;
        this.lastRender = null;
        this.init();
    }

    get deltaR() {
        return this.options.maxR - this.options.minR;
    }

    get area() {
        return (this.width * this.height) / this.scale;
    }

    get areaMultiplier() {
        return Math.sqrt(this.area / (1024 * 768));
    }

    init() {
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.ctx = this.canvas.getContext('2d');

        this.droplets = document.createElement('canvas');
        this.droplets.width = this.width * this.dropletsPixelDensity;
        this.droplets.height = this.height * this.dropletsPixelDensity;
        this.dropletsCtx = this.droplets.getContext('2d');

        this.renderDropsGfx();
    }

    renderDropsGfx() {
        const dropSize = 64;
        this.dropsGfx = [];
        const dropBuffer = document.createElement('canvas');
        dropBuffer.width = dropSize;
        dropBuffer.height = dropSize;
        const dropBufferCtx = dropBuffer.getContext('2d');

        for (let i = 0; i < 255; i++) {
            const drop = document.createElement('canvas');
            drop.width = dropSize;
            drop.height = dropSize;
            const dropCtx = drop.getContext('2d');

            dropBufferCtx.clearRect(0, 0, dropSize, dropSize);
            dropBufferCtx.globalCompositeOperation = 'source-over';
            dropBufferCtx.drawImage(this.dropColor, 0, 0, dropSize, dropSize);
            dropBufferCtx.globalCompositeOperation = 'screen';
            dropBufferCtx.fillStyle = `rgba(0, 0, ${i}, 1)`;
            dropBufferCtx.fillRect(0, 0, dropSize, dropSize);

            dropCtx.globalCompositeOperation = 'source-over';
            dropCtx.drawImage(this.dropAlpha, 0, 0, dropSize, dropSize);
            dropCtx.globalCompositeOperation = 'source-in';
            dropCtx.drawImage(dropBuffer, 0, 0, dropSize, dropSize);

            this.dropsGfx.push(drop);
        }

        this.clearDropletsGfx = document.createElement('canvas');
        this.clearDropletsGfx.width = 128;
        this.clearDropletsGfx.height = 128;
        const clearCtx = this.clearDropletsGfx.getContext('2d');
        clearCtx.fillStyle = '#000';
        clearCtx.beginPath();
        clearCtx.arc(64, 64, 64, 0, Math.PI * 2);
        clearCtx.fill();
    }

    resize(w, h) {
        this.width = w;
        this.height = h;
        this.canvas.width = w;
        this.canvas.height = h;
        this.droplets.width = w * this.dropletsPixelDensity;
        this.droplets.height = h * this.dropletsPixelDensity;
        this.drops = this.drops.filter(drop => drop.x < w && drop.y < h + drop.r);
    }

    random(from, to, interpolation) {
        if (interpolation === undefined) return from + Math.random() * (to - from);
        return from + interpolation(Math.random()) * (to - from);
    }

    createDrop(options) {
        if (this.drops.length >= this.options.maxDrops * this.areaMultiplier) return null;
        return Object.assign(Object.create(RainDropProto), options);
    }

    drawDroplet(x, y, r) {
        const ctx = this.dropletsCtx;
        const px = x * this.dropletsPixelDensity;
        const py = y * this.dropletsPixelDensity;
        const pr = r * this.dropletsPixelDensity;
        const depthIndex = Math.floor(Math.random() * 128) + 50;
        if (this.dropsGfx[depthIndex]) {
            ctx.drawImage(this.dropsGfx[depthIndex], px - pr, py - pr, pr * 2, pr * 2);
        }
    }

    drawDrop(ctx, drop) {
        const speed = Math.abs(drop.momentum);
        const speedStretch = 1 + Math.min(speed * 0.015, 0.4);
        const scaleX = 1 / Math.sqrt(speedStretch);
        const scaleY = 1.5 * speedStretch;
        const gravityBulge = Math.min(drop.r / this.options.maxR, 1) * 0.1;
        let d = Math.max(0, Math.min(1, ((drop.r - this.options.minR) / this.deltaR) * 0.9));
        d *= 1 / (((drop.spreadX + drop.spreadY) * 0.5) + 1);
        d = Math.floor(d * (this.dropsGfx.length - 1));

        const yOffset = drop.r * gravityBulge * this.scale;
        ctx.globalAlpha = 1;
        ctx.globalCompositeOperation = 'source-over';
        ctx.drawImage(
            this.dropsGfx[d],
            (drop.x - drop.r * scaleX * (drop.spreadX + 1)) * this.scale,
            (drop.y - drop.r * scaleY * (drop.spreadY + 1)) * this.scale + yOffset,
            drop.r * 2 * scaleX * (drop.spreadX + 1) * this.scale,
            drop.r * 2 * scaleY * (drop.spreadY + 1) * this.scale
        );
    }

    clearDroplets(x, y, r = 30) {
        const ctx = this.dropletsCtx;
        ctx.globalCompositeOperation = 'destination-out';
        ctx.drawImage(
            this.clearDropletsGfx,
            (x - r) * this.dropletsPixelDensity * this.scale,
            (y - r) * this.dropletsPixelDensity * this.scale,
            r * 2 * this.dropletsPixelDensity * this.scale,
            r * 2 * this.dropletsPixelDensity * this.scale * 1.5
        );
        ctx.globalCompositeOperation = 'source-over';
    }

    updateRain(timeScale) {
        const rainDrops = [];
        const limit = this.options.rainLimit * timeScale * this.areaMultiplier;
        let count = 0;
        while (Math.random() < this.options.rainChance * timeScale * this.areaMultiplier && count < limit) {
            count++;
            const r = this.random(this.options.minR, this.options.maxR, n => Math.pow(n, 3));
            const rainDrop = this.createDrop({
                x: Math.random() * this.width / this.scale,
                y: this.random((this.height / this.scale) * this.options.spawnArea[0], (this.height / this.scale) * this.options.spawnArea[1]),
                r,
                momentum: 1 + ((r - this.options.minR) * 0.1) + Math.random() * 2,
                spreadX: 1.5,
                spreadY: 1.5
            });
            if (rainDrop !== null) rainDrops.push(rainDrop);
        }
        return rainDrops;
    }

    updateDroplets(timeScale) {
        if (this.textureCleaningIterations > 0) {
            this.textureCleaningIterations -= 1 * timeScale;
            this.dropletsCtx.globalCompositeOperation = 'destination-out';
            this.dropletsCtx.fillStyle = `rgba(0,0,0,${0.05 * timeScale})`;
            this.dropletsCtx.fillRect(0, 0, this.droplets.width, this.droplets.height);
            this.dropletsCtx.globalCompositeOperation = 'source-over';
        }

        this.dropletsCounter += this.options.dropletsRate * timeScale * this.areaMultiplier;
        while (this.dropletsCounter >= 1) {
            this.dropletsCounter--;
            this.drawDroplet(
                Math.random() * this.width / this.scale,
                Math.random() * this.height / this.scale,
                this.random(this.options.dropletsSize[0], this.options.dropletsSize[1], n => n * n)
            );
        }
        this.ctx.drawImage(this.droplets, 0, 0, this.width, this.height);
    }

    updateDrops(timeScale) {
        let newDrops = [];
        this.updateDroplets(timeScale);
        newDrops = newDrops.concat(this.updateRain(timeScale));

        this.drops.sort((a, b) => ((a.y * (this.width / this.scale)) + a.x) - ((b.y * (this.width / this.scale)) + b.x));

        this.drops.forEach((drop, i) => {
            if (drop.killed) return;

            if (Math.random() < (drop.r - this.options.minR * this.options.dropFallMultiplier) * (0.1 / this.deltaR) * timeScale) {
                drop.momentum += Math.random() * (drop.r / this.options.maxR) * 4;
            }
            if (this.options.autoShrink && drop.r <= this.options.minR && Math.random() < 0.05 * timeScale) {
                drop.shrink += 0.01;
            }

            drop.r -= drop.shrink * timeScale;
            if (drop.r <= 0) drop.killed = true;

            drop.lastSpawn += drop.momentum * timeScale * this.options.trailRate;
            if (drop.lastSpawn > drop.nextSpawn) {
                const trailDrop = this.createDrop({
                    x: drop.x + this.random(-drop.r, drop.r) * 0.1,
                    y: drop.y - drop.r * 0.01,
                    r: drop.r * this.random(this.options.trailScaleRange[0], this.options.trailScaleRange[1]),
                    spreadY: drop.momentum * 0.1,
                    parent: drop
                });
                if (trailDrop !== null) {
                    newDrops.push(trailDrop);
                    drop.r *= Math.pow(0.97, timeScale);
                    drop.lastSpawn = 0;
                    drop.nextSpawn = this.random(this.options.minR, this.options.maxR) - drop.momentum * 2 * this.options.trailRate + (this.options.maxR - drop.r);
                }
            }

            drop.spreadX *= Math.pow(0.4, timeScale);
            drop.spreadY *= Math.pow(0.7, timeScale);

            const moved = drop.momentum > 0;
            if (moved) {
                drop.y += drop.momentum * this.options.globalTimeScale;
                drop.x += drop.momentumX * this.options.globalTimeScale;
                if (drop.y > this.height / this.scale + drop.r) drop.killed = true;
            }

            const checkCollision = (moved || drop.isNew) && !drop.killed;
            drop.isNew = false;
            if (checkCollision) {
                this.drops.slice(i + 1, i + 70).forEach(drop2 => {
                    if (drop === drop2 || drop.r <= drop2.r || drop.parent === drop2 || drop2.parent === drop || drop2.killed) return;
                    const dx = drop2.x - drop.x;
                    const dy = drop2.y - drop.y;
                    const d = Math.sqrt(dx * dx + dy * dy);
                    if (d < (drop.r + drop2.r) * (this.options.collisionRadius + drop.momentum * this.options.collisionRadiusIncrease * timeScale)) {
                        const a1 = Math.PI * drop.r * drop.r;
                        const a2 = Math.PI * drop2.r * drop2.r;
                        drop.r = Math.min(Math.sqrt((a1 + a2 * 0.8) / Math.PI), this.options.maxR);
                        drop.momentumX += dx * 0.1;
                        drop.spreadX = 0;
                        drop.spreadY = 0;
                        drop2.killed = true;
                        drop.momentum = Math.max(drop2.momentum, Math.min(40, drop.momentum + drop.r * this.options.collisionBoostMultiplier + this.options.collisionBoost));
                    }
                });
            }

            drop.momentum -= Math.max(1, (this.options.minR * 0.5) - drop.momentum) * 0.1 * timeScale;
            if (drop.momentum < 0) drop.momentum = 0;
            drop.momentumX *= Math.pow(0.7, timeScale);

            if (!drop.killed) {
                newDrops.push(drop);
                if (moved && this.options.dropletsRate > 0) {
                    this.clearDroplets(drop.x, drop.y, drop.r * this.options.dropletsCleaningRadiusMultiplier);
                }
                this.drawDrop(this.ctx, drop);
            }
        });

        this.drops = newDrops;
    }

    update() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        const now = Date.now();
        if (this.lastRender === null) this.lastRender = now;
        let timeScale = (now - this.lastRender) / ((1 / 60) * 1000);
        if (timeScale > 1.1) timeScale = 1.1;
        timeScale *= this.options.globalTimeScale;
        this.lastRender = now;
        this.updateDrops(timeScale);
    }

    clearDrops() {
        this.drops.forEach(drop => {
            drop.shrink = 0.12 + Math.random() * 0.45;
        });
        this.textureCleaningIterations = 50;
    }
}

class RainShaderRenderer {
    constructor(gl) {
        this.gl = gl;
        this.textureFg = document.createElement('canvas');
        this.textureFg.width = 192;
        this.textureFg.height = 128;
        this.textureFgCtx = this.textureFg.getContext('2d');
        this.textureBg = document.createElement('canvas');
        this.textureBg.width = 384;
        this.textureBg.height = 256;
        this.textureBgCtx = this.textureBg.getContext('2d');
        this.program = this.createProgram();
        this.buffers = this.createBuffers();
        this.textures = {
            water: this.createTexture(),
            fg: this.createTexture(),
            bg: this.createTexture()
        };
        this.locations = {
            position: gl.getAttribLocation(this.program, 'a_position'),
            texCoord: gl.getAttribLocation(this.program, 'a_texCoord'),
            waterMap: gl.getUniformLocation(this.program, 'u_waterMap'),
            textureFg: gl.getUniformLocation(this.program, 'u_textureFg'),
            textureBg: gl.getUniformLocation(this.program, 'u_textureBg'),
            resolution: gl.getUniformLocation(this.program, 'u_resolution'),
            minRefraction: gl.getUniformLocation(this.program, 'u_minRefraction'),
            refractionDelta: gl.getUniformLocation(this.program, 'u_refractionDelta'),
            brightness: gl.getUniformLocation(this.program, 'u_brightness'),
            alphaMultiply: gl.getUniformLocation(this.program, 'u_alphaMultiply'),
            alphaSubtract: gl.getUniformLocation(this.program, 'u_alphaSubtract')
        };
    }

    createShader(type, source) {
        const gl = this.gl;
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            throw new Error(gl.getShaderInfoLog(shader) || 'Shader compile failed');
        }
        return shader;
    }

    createProgram() {
        const gl = this.gl;
        const vert = this.createShader(gl.VERTEX_SHADER, `
            precision mediump float;
            attribute vec2 a_position;
            attribute vec2 a_texCoord;
            varying vec2 v_texCoord;
            void main() {
                gl_Position = vec4(a_position, 0.0, 1.0);
                v_texCoord = a_texCoord;
            }
        `);
        const frag = this.createShader(gl.FRAGMENT_SHADER, `
            precision mediump float;
            uniform sampler2D u_waterMap;
            uniform sampler2D u_textureFg;
            uniform sampler2D u_textureBg;
            varying vec2 v_texCoord;
            uniform vec2 u_resolution;
            uniform float u_minRefraction;
            uniform float u_refractionDelta;
            uniform float u_brightness;
            uniform float u_alphaMultiply;
            uniform float u_alphaSubtract;

            vec2 texCoord() {
                return vec2(gl_FragCoord.x, u_resolution.y - gl_FragCoord.y) / u_resolution;
            }

            vec2 pixel() {
                return vec2(1.0, 1.0) / u_resolution;
            }

            vec4 blend(vec4 bg, vec4 fg) {
                vec3 bgm = bg.rgb * bg.a;
                vec3 fgm = fg.rgb * fg.a;
                float ia = 1.0 - fg.a;
                float a = fg.a + bg.a * ia;
                vec3 rgb = a != 0.0 ? (fgm + bgm * ia) / a : vec3(0.0);
                return vec4(rgb, a);
            }

            void main() {
                vec2 uv = texCoord();
                vec4 bg = texture2D(u_textureBg, uv);
                vec4 cur = texture2D(u_waterMap, uv);
                float d = cur.b;
                float x = cur.g;
                float y = cur.r;
                float a = clamp(cur.a * u_alphaMultiply - u_alphaSubtract, 0.0, 1.0);
                vec2 refraction = (vec2(x, y) - 0.5) * 2.0;
                float thicknessMask = smoothstep(0.12, 0.72, d) * smoothstep(0.03, 0.42, a);
                float edgeMask = smoothstep(0.18, 0.78, 1.0 - length(refraction));
                float refractionMask = mix(0.38, 1.0, thicknessMask * edgeMask);
                float refractionStrength = (u_minRefraction + d * u_refractionDelta) * refractionMask;
                vec2 refractionR = uv + pixel() * refraction * refractionStrength * 0.97;
                vec2 refractionG = uv + pixel() * refraction * refractionStrength;
                vec2 refractionB = uv + pixel() * refraction * refractionStrength * 1.03;
                float texR = texture2D(u_textureFg, refractionR).r;
                float texG = texture2D(u_textureFg, refractionG).g;
                float texB = texture2D(u_textureFg, refractionB).b;
                vec3 refractedColor = vec3(texR, texG, texB) * u_brightness;
                float highlightY = (y - 0.5) * 2.0;
                float highlightX = abs((x - 0.5) * 2.0);
                float highlight = pow(max(0.0, highlightY * 0.8 + 0.2), 4.0) * (1.0 - highlightX * 0.5);
                highlight *= d * 0.6;
                float edgeDist = length(refraction);
                float fresnel = pow(edgeDist, 1.5) * 0.25;
                vec3 finalColor = mix(refractedColor, bg.rgb * 1.1, fresnel * a);
                finalColor = mix(finalColor, vec3(1.0), highlight * a * 0.5);
                float caustic = (1.0 - edgeDist) * d * 0.15;
                finalColor *= 1.0 + caustic;
                gl_FragColor = blend(bg, vec4(finalColor, a));
            }
        `);
        const program = gl.createProgram();
        gl.attachShader(program, vert);
        gl.attachShader(program, frag);
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            throw new Error(gl.getProgramInfoLog(program) || 'Program link failed');
        }
        return program;
    }

    createBuffers() {
        const gl = this.gl;
        const position = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, position);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
        const texCoord = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, texCoord);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0]), gl.STATIC_DRAW);
        return { position, texCoord };
    }

    createTexture() {
        const gl = this.gl;
        const texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        return texture;
    }

    updateTexture(texture, source, unit) {
        const gl = this.gl;
        gl.activeTexture(gl.TEXTURE0 + unit);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
    }

    generateTextures(snapshot) {
        this.textureFgCtx.clearRect(0, 0, this.textureFg.width, this.textureFg.height);
        this.textureFgCtx.drawImage(snapshot, 0, 0, this.textureFg.width, this.textureFg.height);

        this.textureBgCtx.clearRect(0, 0, this.textureBg.width, this.textureBg.height);
        this.textureBgCtx.drawImage(snapshot, 0, 0, this.textureBg.width, this.textureBg.height);
        this.textureBgCtx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        this.textureBgCtx.fillRect(0, 0, this.textureBg.width, this.textureBg.height);
    }

    render(waterMap, snapshot) {
        const gl = this.gl;
        this.generateTextures(snapshot);
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.useProgram(this.program);

        this.updateTexture(this.textures.water, waterMap, 0);
        this.updateTexture(this.textures.fg, this.textureFg, 1);
        this.updateTexture(this.textures.bg, this.textureBg, 2);

        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.position);
        gl.enableVertexAttribArray(this.locations.position);
        gl.vertexAttribPointer(this.locations.position, 2, gl.FLOAT, false, 0, 0);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.texCoord);
        gl.enableVertexAttribArray(this.locations.texCoord);
        gl.vertexAttribPointer(this.locations.texCoord, 2, gl.FLOAT, false, 0, 0);

        gl.uniform1i(this.locations.waterMap, 0);
        gl.uniform1i(this.locations.textureFg, 1);
        gl.uniform1i(this.locations.textureBg, 2);
        gl.uniform2f(this.locations.resolution, gl.canvas.width, gl.canvas.height);
        gl.uniform1f(this.locations.minRefraction, 140.0);
        gl.uniform1f(this.locations.refractionDelta, 240.0);
        gl.uniform1f(this.locations.brightness, 1.1);
        gl.uniform1f(this.locations.alphaMultiply, 6.0);
        gl.uniform1f(this.locations.alphaSubtract, 3.0);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    }
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
        ctx.globalAlpha = 0.34;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * (Math.sin(Date.now() * 0.005 + this.x) * 0.5 + 1), 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
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
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
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
        const steerStrength = 0.035;
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
        const maxSpeed = 0.85;
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
            if (dist < 120 && dist > 26) {
                const force = (120 - dist) / 120 * 0.08;
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
            gradient.addColorStop(0, hexToRgba(this.data.color, clamp(this.glowIntensity * 0.12, 0, 0.18)));
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
        const baseAlpha = this.isHovered ? 0.82 : 0.24;
        bgGradient.addColorStop(0, hexToRgba(this.data.color, clamp(baseAlpha, 0, 1)));
        bgGradient.addColorStop(1, hexToRgba(this.data.color, this.isHovered ? 0.54 : 0.16));
        ctx.fillStyle = bgGradient;
        ctx.fill();
        
        // Border
        ctx.strokeStyle = this.isHovered ? '#fff' : 'rgba(255,255,255,0.45)';
        ctx.lineWidth = this.isHovered ? 2 : 1;
        ctx.stroke();
        
        // Icon
        ctx.fillStyle = this.isHovered ? '#fff' : 'rgba(255,255,255,0.82)';
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

function resizeRainOverlay() {
    if (!rainCanvas) return;

    rainCanvas.width = width;
    rainCanvas.height = height;
    rainCanvas.style.width = `${width}px`;
    rainCanvas.style.height = `${height}px`;
    if (rainEngine) {
        rainEngine.resize(rainCanvas.width, rainCanvas.height);
    }
    rainSnapshotCanvas = null;
}

function updateRainButton() {
    if (!rainmanBtn) return;
    rainmanBtn.textContent = UI_TEXTS[currentLang][rainActive ? 'rainmanDisable' : 'rainmanEnable'];
    rainmanBtn.classList.toggle('active', rainActive);
    rainmanBtn.setAttribute('aria-pressed', String(rainActive));
}

function loadRainImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Failed to load ${src}`));
        img.src = src;
    });
}

function loadRainImages() {
    if (!rainImagesPromise) {
        rainImagesPromise = Promise.all([
            loadRainImage('wd/img/drop-alpha.png'),
            loadRainImage('wd/img/drop-color.png')
        ]).then(([dropAlpha, dropColor]) => ({ dropAlpha, dropColor }));
    }
    return rainImagesPromise;
}

function blobToDataURL(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(blob);
    });
}

async function prepareSnapshotImages(root) {
    if (!root) return;
    const images = Array.from(root.querySelectorAll('img'));
    images.forEach(img => {
        img.removeAttribute('src');
        img.style.visibility = 'hidden';
    });
}

function ensureRainRenderer() {
    if (!rainCanvas) return false;
    if (rainRenderMode === 'webgl') return true;

    rainGl = rainCanvas.getContext('webgl', { alpha: true, premultipliedAlpha: false }) ||
        rainCanvas.getContext('experimental-webgl', { alpha: true, premultipliedAlpha: false });

    if (rainGl) {
        rainRenderer = new RainShaderRenderer(rainGl);
        rainRenderMode = 'webgl';
        return true;
    }

    return false;
}

function drawSnapshotText(ctx, element) {
    if (!element || element.closest('.gesture-control')) return;
    const rect = element.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > height || rect.right < 0 || rect.left > width) return;

    const style = window.getComputedStyle(element);
    const fontSize = Number.parseFloat(style.fontSize) || 16;
    const lineHeight = Number.parseFloat(style.lineHeight) || fontSize * 1.35;
    const color = style.color || '#161616';
    const text = (element.innerText || element.textContent || '').trim();
    if (!text) return;

    ctx.save();
    ctx.font = `${style.fontWeight || 400} ${fontSize}px ${style.fontFamily || 'sans-serif'}`;
    ctx.fillStyle = color;
    ctx.textAlign = style.textAlign === 'center' ? 'center' : style.textAlign === 'right' ? 'right' : 'left';
    ctx.textBaseline = 'top';

    const x = ctx.textAlign === 'center' ? rect.left + rect.width / 2 : ctx.textAlign === 'right' ? rect.right : rect.left;
    let y = rect.top;
    const maxWidth = Math.max(20, rect.width);

    text.split('\n').forEach(rawLine => {
        const words = rawLine.trim().split(/\s+/);
        let line = '';
        words.forEach(word => {
            const testLine = line ? `${line} ${word}` : word;
            if (ctx.measureText(testLine).width > maxWidth && line) {
                ctx.fillText(line, x, y, maxWidth);
                line = word;
                y += lineHeight;
            } else {
                line = testLine;
            }
        });
        if (line) {
            ctx.fillText(line, x, y, maxWidth);
            y += lineHeight;
        }
    });
    ctx.restore();
}

function drawSnapshotBox(ctx, element) {
    if (!element || element.closest('.gesture-control')) return;
    const rect = element.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > height || rect.right < 0 || rect.left > width) return;
    const style = window.getComputedStyle(element);
    const bg = style.backgroundColor;
    const border = style.borderTopColor;
    const radius = Math.min(Number.parseFloat(style.borderTopLeftRadius) || 0, 28);

    ctx.save();
    if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
        ctx.fillStyle = bg;
        ctx.beginPath();
        ctx.roundRect(rect.left, rect.top, rect.width, rect.height, radius);
        ctx.fill();
    }
    if (border && style.borderTopWidth !== '0px') {
        ctx.strokeStyle = border;
        ctx.lineWidth = Math.max(1, Number.parseFloat(style.borderTopWidth) || 1);
        ctx.beginPath();
        ctx.roundRect(rect.left, rect.top, rect.width, rect.height, radius);
        ctx.stroke();
    }
    ctx.restore();
}

function drawSnapshotImage(ctx, img) {
    if (!img || img.closest('.gesture-control') || !img.complete || img.naturalWidth === 0) return;
    const rect = img.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > height || rect.right < 0 || rect.left > width) return;
    try {
        ctx.drawImage(img, rect.left, rect.top, rect.width, rect.height);
    } catch (error) {
        // Cross-origin or SVG images are skipped; text remains the important refraction target.
    }
}

async function captureRainSnapshot() {
    if (rainSnapshotPromise) return rainSnapshotPromise;

    rainSnapshotPromise = (async () => {
        const snapshotWidth = Math.max(1, Math.floor(width));
        const snapshotHeight = Math.max(1, Math.floor(height));
        const snapshot = document.createElement('canvas');
        snapshot.width = snapshotWidth;
        snapshot.height = snapshotHeight;
        const snapshotCtx = snapshot.getContext('2d');

        snapshotCtx.fillStyle = '#f7f7f4';
        snapshotCtx.fillRect(0, 0, snapshotWidth, snapshotHeight);
        const coolGlow = snapshotCtx.createRadialGradient(width * 0.75, height * 0.18, 0, width * 0.75, height * 0.18, 460);
        coolGlow.addColorStop(0, 'rgba(119, 176, 206, 0.18)');
        coolGlow.addColorStop(1, 'rgba(119, 176, 206, 0)');
        snapshotCtx.fillStyle = coolGlow;
        snapshotCtx.fillRect(0, 0, snapshotWidth, snapshotHeight);
        const warmGlow = snapshotCtx.createRadialGradient(width * 0.12, height * 0.82, 0, width * 0.12, height * 0.82, 380);
        warmGlow.addColorStop(0, 'rgba(222, 173, 108, 0.14)');
        warmGlow.addColorStop(1, 'rgba(222, 173, 108, 0)');
        snapshotCtx.fillStyle = warmGlow;
        snapshotCtx.fillRect(0, 0, snapshotWidth, snapshotHeight);

        document.querySelectorAll('.site-header, .btn, .profile-panel, .skill-card, .work-card').forEach(el => drawSnapshotBox(snapshotCtx, el));
        document.querySelectorAll('img').forEach(img => drawSnapshotImage(snapshotCtx, img));
        document.querySelectorAll('.brand, h1, h2, h3, p, dt, dd, a, small').forEach(el => drawSnapshotText(snapshotCtx, el));

        rainSnapshotCanvas = snapshot;
        return snapshot;
    })();

    try {
        return await rainSnapshotPromise;
    } finally {
        rainSnapshotPromise = null;
    }
}

async function startRainman() {
    if (!rainCanvas || rainActive) return;

    rainActive = true;
    rainCanvas.classList.add('active');
    updateRainButton();

    try {
        const [{ dropAlpha, dropColor }, snapshot] = await Promise.all([
            loadRainImages(),
            captureRainSnapshot()
        ]);
        if (!rainActive) return;
        if (!ensureRainRenderer()) {
            throw new Error('No available rain renderer');
        }
        rainEngine = new HomeRaindrops(rainCanvas.width, rainCanvas.height, 1, dropAlpha, dropColor, {
            minR: 20,
            maxR: 50,
            rainChance: 0.35,
            rainLimit: 6,
            dropletsRate: 50,
            dropletsSize: [3, 5.5],
            trailRate: 1,
            trailScaleRange: [0.25, 0.35],
            collisionRadiusIncrease: 0.0002
        });
        rainSnapshotCanvas = snapshot;
        document.body.classList.add('rain-active');
    } catch (error) {
        console.warn('Rainman could not start.', error);
        rainActive = false;
        document.body.classList.remove('rain-active');
        rainCanvas.classList.remove('active');
        updateRainButton();
        return;
    }

    rainLastFrame = performance.now();
    animateRain(rainLastFrame);
}

function stopRainman() {
    rainActive = false;
    document.body.classList.remove('rain-active');
    rainCanvas?.classList.remove('active');
    updateRainButton();

    if (rainAnimationFrame) {
        cancelAnimationFrame(rainAnimationFrame);
        rainAnimationFrame = null;
    }

    if (rainGl) {
        rainGl.clearColor(0, 0, 0, 0);
        rainGl.clear(rainGl.COLOR_BUFFER_BIT);
    }
    if (rainEngine) {
        rainEngine.clearDrops();
    }
    rainEngine = null;
}

function animateRain(now) {
    if (!rainActive || !rainGl) return;

    const dt = Math.max(1, now - rainLastFrame);
    rainLastFrame = now;

    if (!rainEngine || !rainRenderer || !rainSnapshotCanvas) return;

    rainEngine.update(dt);
    rainRenderer.render(rainEngine.canvas, rainSnapshotCanvas);

    rainAnimationFrame = requestAnimationFrame(animateRain);
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
    resizeRainOverlay();
    
    // Update effect node positions
    effectNodes.forEach(node => node.updatePosition());
}

function animate() {
    updateInputPosition();
    
    ctx.fillStyle = 'rgba(247, 247, 244, 0.44)';
    ctx.fillRect(0, 0, width, height);

    ctx.lineWidth = 0.5;
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < CONNECTION_DISTANCE) {
                ctx.strokeStyle = `rgba(0, 0, 0, ${(1 - dist / CONNECTION_DISTANCE) * 0.055})`;
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
                ctx.strokeStyle = `rgba(0, 0, 0, ${(1 - dist / MOUSE_DISTANCE) * 0.08})`;
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

function applyLanguage(lang) {
    currentLang = lang;
    const texts = UI_TEXTS[currentLang];
    document.documentElement.lang = currentLang;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.dataset.i18n;
        if (texts[key]) el.textContent = texts[key];
    });
    if (langToggle) {
        langToggle.classList.toggle('lang-en-active', currentLang === 'en');
    }
    updateRainButton();
    localStorage.setItem('preferredLang', currentLang);
}

if (rainmanBtn) {
    rainmanBtn.addEventListener('click', () => {
        if (rainActive) stopRainman();
        else startRainman();
    });
    updateRainButton();
}

if (langToggle) {
    langToggle.addEventListener('click', () => {
        applyLanguage(currentLang === 'ja' ? 'en' : 'ja');
        if (cameraBtn) {
            if (!supportsHandControl) {
                cameraBtn.innerText = UI_TEXTS[currentLang].cameraUnavailable;
            } else if (isCameraRunning) {
                cameraBtn.innerText = UI_TEXTS[currentLang].cameraStop;
            }
        }
    });
}

applyLanguage(currentLang);

// MediaPipe Hands is optional. The portrait content must work without camera scripts.
const supportsHandControl = typeof Hands !== 'undefined' && typeof Camera !== 'undefined';
let hands = null;

if (supportsHandControl) {
    hands = new Hands({
        locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
    });
    hands.setOptions({ maxNumHands: 1, modelComplexity: 1, minDetectionConfidence: 0.5, minTrackingConfidence: 0.5 });
    hands.onResults(onResults);
}

// Camera Control
const cameraBtn = document.getElementById('camera-btn');
let cameraInstance = null;
let isCameraRunning = false;

if (cameraBtn) {
    if (!supportsHandControl) {
        cameraBtn.innerText = UI_TEXTS[currentLang].cameraUnavailable;
        cameraBtn.disabled = true;
        cameraBtn.setAttribute('aria-disabled', 'true');
    }

    cameraBtn.addEventListener('click', () => {
        if (!supportsHandControl) return;

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
            cameraBtn.innerText = UI_TEXTS[currentLang].cameraEnable;
            lastHandDetectedTime = 0;
            return;
        }

        cameraBtn.innerText = UI_TEXTS[currentLang].cameraInitializing;
        try {
            cameraInstance = new Camera(videoElement, {
                onFrame: async () => { if (isCameraRunning) await hands.send({ image: videoElement }); },
                width: 640, height: 480
            });
            cameraInstance.start()
                .then(() => { isCameraRunning = true; cameraBtn.innerText = UI_TEXTS[currentLang].cameraStop; lastHandDetectedTime = Date.now(); })
                .catch(err => { cameraBtn.innerText = UI_TEXTS[currentLang].cameraDenied; isCameraRunning = false; });
        } catch (e) { cameraBtn.innerText = UI_TEXTS[currentLang].cameraUnavailable; isCameraRunning = false; }
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
    if (e.target.closest('a, button')) return;

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
    if (e.target.closest('a, button')) return;
    
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
