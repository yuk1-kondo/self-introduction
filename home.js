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
        navAbout: '\u81EA\u5DF1\u7D39\u4ECB',
        navWork: '\u4F5C\u54C1',
        navContact: '\u9023\u7D61',
        eyebrow: 'LLM / AI Agents / UI-UX Design / Interactive Web / Prototyping',
        lead: '\u7406\u79D1\u306E\u5B66\u3073\u3092\u300C\u4F53\u9A13\u3068\u3057\u3066\u7406\u89E3\u3067\u304D\u308B\u5F62\u300D\u306B\u8A2D\u8A08\u3059\u308B\u5B9F\u7FD2\u6559\u54E1\u3002LLM\u30FBWeb\u30FB\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u3092\u6A2A\u65AD\u3057\u3001\u30A4\u30F3\u30BF\u30E9\u30AF\u30C6\u30A3\u30D6\u306A\u6559\u6750\u3068\u30D7\u30ED\u30C8\u30BF\u30A4\u30D7\u3092\u5236\u4F5C\u3057\u3066\u3044\u307E\u3059\u3002',
        viewWork: '\u4F5C\u54C1\u3092\u898B\u308B',
        readAbout: '\u81EA\u5DF1\u7D39\u4ECB\u3092\u8AAD\u3080',
        contactMe: '\u9023\u7D61\u3059\u308B',
        factFocus: 'Focus',
        factFocusValue: '\u6559\u80B2 x \u751F\u6210AI x \u4F53\u9A13\u578B\u5B66\u7FD2',
        factStrength: 'Strength',
        factStrengthValue: '\u6559\u6750\u30A2\u30A4\u30C7\u30A2\u3092\u52D5\u304F\u8A66\u4F5C\u306B\u843D\u3068\u3059\u529B',
        factBase: 'Base',
        factBaseValue: '\u95A2\u897F / \u7406\u79D1\u6559\u80B2',
        aboutKicker: 'About',
        aboutTitle: '\u5B66\u3073\u3092\u300C\u89E6\u308C\u308B\u4F53\u9A13\u300D\u306B\u5909\u3048\u308B',
        aboutBody1: '\u7406\u79D1\u306E\u5B9F\u7FD2\u6559\u54E1\u3068\u3057\u3066\u3001\u300C\u7406\u89E3\u300D\u3092\u300C\u89E6\u308C\u3066\u6210\u7ACB\u3059\u308B\u4F53\u9A13\u300D\u306B\u5909\u63DB\u3059\u308B\u3053\u3068\u3092\u30C6\u30FC\u30DE\u306B\u6D3B\u52D5\u3057\u3066\u3044\u307E\u3059\u3002',
        aboutBody2: 'LLM\u30FBAI\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u306B\u3088\u308B\u5BFE\u8A71\u8A2D\u8A08\u3001Web\u30D9\u30FC\u30B9\u306E\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3001Spresense\u3084Raspberry Pi\u3092\u7528\u3044\u305F\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u958B\u767A\u3092\u6A2A\u65AD\u3057\u3001\u6559\u6750\u3084\u30D7\u30ED\u30C8\u30BF\u30A4\u30D7\u3092\u4E00\u8CAB\u3057\u3066\u8A2D\u8A08\u30FB\u5B9F\u88C5\u3057\u3066\u3044\u307E\u3059\u3002',
        aboutBody3: '\u30D4\u30AF\u30BB\u30EB\u30A2\u30FC\u30C8\u30AB\u30E1\u30E9\u3084\u30B9\u30C8\u30FC\u30EA\u30FC\u30C6\u30EA\u30F3\u30B0AI\u3001\u30B8\u30A7\u30B9\u30C1\u30E3\u30FC\u64CD\u4F5C\u306A\u3069\u306E\u8A66\u4F5C\u3092\u901A\u3058\u3066\u3001\u77E5\u8B58\u4F1D\u9054\u306B\u3068\u3069\u307E\u3089\u306A\u3044\u5B66\u7FD2\u74B0\u5883\u306E\u53EF\u80FD\u6027\u3092\u691C\u8A3C\u3057\u3066\u3044\u307E\u3059\u3002\u8907\u6570\u9818\u57DF\u306E\u6280\u8853\u3092\u7D71\u5408\u3057\u3001\u4F53\u9A13\u305D\u306E\u3082\u306E\u3092\u8A2D\u8A08\u3067\u304D\u308B\u70B9\u304C\u5F37\u307F\u3067\u3059\u3002',
        skillsKicker: 'Skills',
        skillsTitle: '\u5E45\u5E83\u3044\u591A\u69D8\u306A\u6280\u8853',
        skillsBody: '\u60C5\u5831\u95A2\u4FC2\u306E\u304B\u306A\u308A\u5E83\u7BC4\u306A\u9818\u57DF\u306E\u77E5\u8B58\u3068\u6280\u8853\u3092\u6709\u3057\u3066\u3044\u307E\u3059\u3002',
        skillInteractionTitle: 'Interaction / Creative Coding',
        skillInteractionDesc: '\u4F53\u9A13\u5C0E\u7DDA\u3092\u5F62\u306B\u3059\u308B\u5165\u53E3\u306E\u6280\u8853',
        skillWebTitle: 'Web / Application',
        skillWebDesc: '\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u69CB\u9020\u3068\u30ED\u30B8\u30C3\u30AF\u306E\u57FA\u76E4',
        skillAiTitle: 'AI / Agent',
        skillAiDesc: '\u751F\u6210AI\u3068\u5BFE\u8A71\u7AF6\u6280\u3092\u3064\u304F\u308B\u5909\u63DB\u5C64',
        skillHardwareTitle: 'Hardware / IoT',
        skillHardwareDesc: '\u73FE\u5B9F\u4E16\u754C\u3068\u3064\u306A\u304C\u308B\u88C5\u7F6E\u3078\u306E\u63A5\u7D9A',
        skillDesignTitle: 'Design / Modeling',
        skillDesignDesc: '\u4F53\u9A13\u3068\u898B\u305F\u76EE\u306E\u8CEA\u611F\u3092\u6574\u3048\u308B\u8A2D\u8A08',
        skillInfraTitle: 'Infrastructure',
        skillInfraDesc: '\u30B7\u30B9\u30C6\u30E0\u904B\u7528\u3092\u652F\u3048\u308B\u57FA\u76E4\u5C64',
        skillCreativeTitle: 'Creative / Media',
        skillCreativeDesc: '\u8868\u73FE\u3068\u8A18\u9332\u3092\u62E1\u5F35\u3059\u308B\u30EC\u30A4\u30E4\u30FC',
        workKicker: 'Work',
        workTitle: '\u5B66\u7FD2\u4F53\u9A13\u306B\u3064\u306A\u304C\u308B\u5236\u4F5C\u7269',
        workPixel: '\u30AB\u30E1\u30E9\u8868\u73FE\u3068\u6559\u6750\u5316\u306E\u5B9F\u9A13',
        workSound: '\u97F3\u3068\u8EAB\u4F53\u64CD\u4F5C\u306E\u5B9F\u9A13',
        workAir: '\u7A7A\u4E2D\u64CD\u4F5C\u306B\u3088\u308B\u97F3\u697D\u4F53\u9A13',
        workWater: '\u96E8\u6EF4\u8868\u73FE\u3068\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3',
        workFog: '\u66C7\u308A\u30AC\u30E9\u30B9\u3092\u62ED\u304F\u4F53\u9A13\u8A2D\u8A08',
        workMirror: '\u6620\u50CF\u306E\u6B6A\u307F\u3092\u4F7F\u3063\u305F\u8868\u73FE',
        workCloak: '\u5149\u5B66\u8FF7\u5F69\u306E\u8868\u73FE\u5B9F\u9A13',
        workGesture: '\u30B8\u30A7\u30B9\u30C1\u30E3\u30FCUI\u306E\u5B9F\u9A13\u96C6',
        achievementKicker: 'Achievement',
        achievementTitle: 'Google Cloud Generative AI Leader',
        achievementBody: '\u751F\u6210AI\u304C\u30D3\u30B8\u30CD\u30B9\u3084\u5B66\u3073\u3092\u3069\u3046\u5909\u3048\u308B\u304B\u3092\u7406\u89E3\u3057\u3001Google Cloud \u306E\u751F\u6210AI\u30B5\u30FC\u30D3\u30B9\u3092\u6D3B\u7528\u3059\u308B\u305F\u3081\u306E\u57FA\u790E\u77E5\u8B58\u3092\u8EAB\u306B\u3064\u3051\u3066\u3044\u307E\u3059\u3002',
        contactKicker: 'Contact',
        contactTitle: '\u6559\u80B2\u3068\u30C6\u30AF\u30CE\u30ED\u30B8\u30FC\u306E\u5B9F\u9A13\u3092\u3054\u4E00\u7DD2\u3067\u304D\u305F\u3089\u5B09\u3057\u3044\u3067\u3059',
        gestureHint: '\u80CC\u666F\u306E\u4E38\u3044\u30CE\u30FC\u30C9\u304B\u3089\u4F5C\u54C1\u3078\u79FB\u52D5\u3067\u304D\u307E\u3059',
        rainmanEnable: 'Rainman',
        rainmanDisable: '\u6674\u308C\u306B\u623B\u3059',
        cameraEnable: '\u624B\u3067\u64CD\u4F5C\u3059\u308B',
        cameraStop: '\u30AB\u30E1\u30E9\u505C\u6B62',
        cameraInitializing: '\u8D77\u52D5\u4E2D...',
        cameraDenied: '\u30AB\u30E1\u30E9\u62D2\u5426',
        cameraUnavailable: '\u30AB\u30E1\u30E9\u975E\u5BFE\u5FDC'
    },
    en: {
        navAbout: 'About',
        navWork: 'Work',
        navContact: 'Contact',
        eyebrow: 'LLM / AI Agents / UI-UX Design / Interactive Web / Prototyping',
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
        aboutBody3: 'I value building across the whole experience, from concept and visual design to implementation, testing, and iteration. My focus is on making complex ideas approachable without losing playfulness or technical depth.',
        skillsKicker: 'Skills',
        skillsTitle: 'Broad and diverse technologies',
        skillsBody: 'I have knowledge and technical skills across a wide range of information-related fields.',
        skillInteractionTitle: 'Interaction / Creative Coding',
        skillInteractionDesc: 'Entry point of interactive experience',
        skillWebTitle: 'Web / Application',
        skillWebDesc: 'Structure and logic of applications',
        skillAiTitle: 'AI / Agent',
        skillAiDesc: 'Intelligence and interactive dialogue',
        skillHardwareTitle: 'Hardware / IoT',
        skillHardwareDesc: 'Connection to physical world',
        skillDesignTitle: 'Design / Modeling',
        skillDesignDesc: 'Experience and visual quality',
        skillInfraTitle: 'Infrastructure',
        skillInfraDesc: 'System foundation',
        skillCreativeTitle: 'Creative / Media',
        skillCreativeDesc: 'Visual and expressive layer',
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
    { id: 'pa', name: 'Pixel Art', icon: '\uD83D\uDCF8', url: '/pa/', color: '#4CAF50' },
    { id: 'sv', name: 'Sound', icon: '♪', url: '/sv/', color: '#9C27B0' },
    { id: 'vp', name: 'Air Music', icon: '♫', url: '/vp/', color: '#00BCD4' },
    { id: 'wd', name: 'Water', icon: '◯', url: '/wd/', color: '#2196F3' },
    { id: 'fg', name: 'Fog', icon: '\uD83C\uDF2B', url: '/fg/', color: '#607D8B' },
    { id: 'dm', name: 'Mirror', icon: '\uD83E\uDE9E', url: '/dm/', color: '#E91E63' },
    { id: 'oc', name: 'Cloak', icon: '\uD83E\uDEE5', url: '/oc/', color: '#FF5722' },
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
let rainViewportSnapshotCanvas = null;
let rainViewportSnapshotCtx = null;
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
    rainViewportSnapshotCanvas = null;
    rainViewportSnapshotCtx = null;
    if (rainActive) {
        refreshRainSnapshot();
    }
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

function getDocumentSnapshotHeight() {
    const doc = document.documentElement;
    const body = document.body;
    return Math.max(
        height,
        body?.scrollHeight || 0,
        body?.offsetHeight || 0,
        doc?.clientHeight || 0,
        doc?.scrollHeight || 0,
        doc?.offsetHeight || 0
    );
}

function getSnapshotRect(element) {
    const rect = element.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY,
        right: rect.right + window.scrollX,
        bottom: rect.bottom + window.scrollY,
        width: rect.width,
        height: rect.height
    };
}

function drawSnapshotText(ctx, element, snapshotWidth, snapshotHeight) {
    if (!element || element.closest('.gesture-control')) return;
    const rect = getSnapshotRect(element);
    if (rect.bottom < 0 || rect.top > snapshotHeight || rect.right < 0 || rect.left > snapshotWidth) return;

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

function drawSnapshotBox(ctx, element, snapshotWidth, snapshotHeight) {
    if (!element || element.closest('.gesture-control')) return;
    const rect = getSnapshotRect(element);
    if (rect.bottom < 0 || rect.top > snapshotHeight || rect.right < 0 || rect.left > snapshotWidth) return;
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

function drawSnapshotImage(ctx, img, snapshotWidth, snapshotHeight) {
    if (!img || img.closest('.gesture-control') || !img.complete || img.naturalWidth === 0) return;
    const rect = getSnapshotRect(img);
    if (rect.bottom < 0 || rect.top > snapshotHeight || rect.right < 0 || rect.left > snapshotWidth) return;
    try {
        ctx.drawImage(img, rect.left, rect.top, rect.width, rect.height);
    } catch (error) {
        // Cross-origin or SVG images are skipped; text remains the important refraction target.
    }
}

function drawSnapshotBackground(ctx, snapshotWidth, snapshotHeight) {
    ctx.fillStyle = '#f7f7f4';
    ctx.fillRect(0, 0, snapshotWidth, snapshotHeight);

    const coolGlow = ctx.createRadialGradient(snapshotWidth * 0.75, height * 0.18, 0, snapshotWidth * 0.75, height * 0.18, 460);
    coolGlow.addColorStop(0, 'rgba(119, 176, 206, 0.18)');
    coolGlow.addColorStop(1, 'rgba(119, 176, 206, 0)');
    ctx.fillStyle = coolGlow;
    ctx.fillRect(0, 0, snapshotWidth, snapshotHeight);

    const warmGlow = ctx.createRadialGradient(snapshotWidth * 0.12, height * 0.82, 0, snapshotWidth * 0.12, height * 0.82, 380);
    warmGlow.addColorStop(0, 'rgba(222, 173, 108, 0.14)');
    warmGlow.addColorStop(1, 'rgba(222, 173, 108, 0)');
    ctx.fillStyle = warmGlow;
    ctx.fillRect(0, 0, snapshotWidth, snapshotHeight);
}

async function captureRainSnapshot() {
    if (rainSnapshotPromise) return rainSnapshotPromise;

    rainSnapshotPromise = (async () => {
        if (document.fonts?.ready) {
            await document.fonts.ready;
        }
        const snapshotWidth = Math.max(1, Math.floor(width));
        const snapshotHeight = Math.max(1, Math.ceil(getDocumentSnapshotHeight()));
        const snapshot = document.createElement('canvas');
        snapshot.width = snapshotWidth;
        snapshot.height = snapshotHeight;
        const snapshotCtx = snapshot.getContext('2d');

        drawSnapshotBackground(snapshotCtx, snapshotWidth, snapshotHeight);

        document.querySelectorAll('.site-header, .btn, .profile-panel, .skill-card, .work-card').forEach(el => drawSnapshotBox(snapshotCtx, el, snapshotWidth, snapshotHeight));
        document.querySelectorAll('img').forEach(img => drawSnapshotImage(snapshotCtx, img, snapshotWidth, snapshotHeight));
        document.querySelectorAll('.brand, h1, h2, h3, p, dt, dd, a, small').forEach(el => drawSnapshotText(snapshotCtx, el, snapshotWidth, snapshotHeight));

        rainSnapshotCanvas = snapshot;
        return snapshot;
    })();

    try {
        return await rainSnapshotPromise;
    } finally {
        rainSnapshotPromise = null;
    }
}

async function refreshRainSnapshot() {
    rainSnapshotCanvas = null;
    rainViewportSnapshotCanvas = null;
    rainViewportSnapshotCtx = null;
    try {
        await captureRainSnapshot();
    } catch (error) {
        console.warn('Rainman snapshot could not refresh.', error);
    }
}

function getRainViewportSnapshot(snapshot) {
    if (!snapshot) return null;
    const viewportWidth = Math.max(1, Math.floor(width));
    const viewportHeight = Math.max(1, Math.floor(height));
    if (!rainViewportSnapshotCanvas || rainViewportSnapshotCanvas.width !== viewportWidth || rainViewportSnapshotCanvas.height !== viewportHeight) {
        rainViewportSnapshotCanvas = document.createElement('canvas');
        rainViewportSnapshotCanvas.width = viewportWidth;
        rainViewportSnapshotCanvas.height = viewportHeight;
        rainViewportSnapshotCtx = rainViewportSnapshotCanvas.getContext('2d');
    }

    const sourceY = clamp(window.scrollY, 0, Math.max(0, snapshot.height - viewportHeight));
    rainViewportSnapshotCtx.clearRect(0, 0, viewportWidth, viewportHeight);
    rainViewportSnapshotCtx.drawImage(
        snapshot,
        0,
        sourceY,
        Math.min(viewportWidth, snapshot.width),
        Math.min(viewportHeight, snapshot.height - sourceY),
        0,
        0,
        viewportWidth,
        viewportHeight
    );
    return rainViewportSnapshotCanvas;
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

    if (!rainEngine || !rainRenderer || !rainSnapshotCanvas) {
        rainAnimationFrame = requestAnimationFrame(animateRain);
        return;
    }

    rainEngine.update(dt);
    const viewportSnapshot = getRainViewportSnapshot(rainSnapshotCanvas);
    if (viewportSnapshot) {
        rainRenderer.render(rainEngine.canvas, viewportSnapshot);
    }

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
    if (rainActive) {
        refreshRainSnapshot();
    }
}

function updateSkillsProgress() {
    const scroller = document.querySelector('.skills-scroller');
    const bar = document.querySelector('.skills-progress-bar');

    if (!scroller || !bar) {
        return;
    }

    const maxScroll = scroller.scrollWidth - scroller.clientWidth;
    if (maxScroll <= 0) {
        bar.style.width = '100%';
        bar.style.transform = 'translateX(0)';
        return;
    }

    const visibleRatio = scroller.clientWidth / scroller.scrollWidth;
    const progress = scroller.scrollLeft / maxScroll;
    const thumbWidth = Math.max(16, visibleRatio * 100);
    const travel = 100 - thumbWidth;

    bar.style.width = `${thumbWidth}%`;
    bar.style.transform = `translateX(${travel * progress}%)`;
}

const skillsScroller = document.querySelector('.skills-scroller');
if (skillsScroller) {
    skillsScroller.addEventListener('scroll', updateSkillsProgress, { passive: true });
    window.addEventListener('resize', updateSkillsProgress);
    requestAnimationFrame(updateSkillsProgress);
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
