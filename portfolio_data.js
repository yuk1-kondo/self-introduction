// Language texts for UI elements
const uiTexts = {
    en: {
        title: 'YUKI KONDO',
        subtitle: 'Creative Developer & Designer',
        instructions: 'Tap or Click Projects to Learn More',
        viewProject: 'View Project',
        sendEmail: 'Send Email',
        comingSoon: 'Coming Soon',
        viewBadge: 'View Badge'
    },
    ja: {
        title: 'YUKI KONDO',
        subtitle: 'クリエイティブ デベロッパー & デザイナー',
        instructions: 'プロジェクトをタップまたはクリックして詳細を見る',
        viewProject: 'プロジェクトを見る',
        sendEmail: 'メールを送る',
        comingSoon: '準備中',
        viewBadge: 'バッジを見る'
    }
};

const portfolioData = {
    projects: [
        {
            id: 'proj1',
            title: { en: 'About Me', ja: '自己紹介' },
            category: { en: 'Creator', ja: 'クリエイター' },
            description: {
                en: "I'm a trainee science teacher from Kansai who loves blending education with hands-on technology. Whether it's building pixel-art cameras with Spresense, crafting storytelling AI with Gemini, or launching creative apps for students, I enjoy turning ideas into reality. I believe in learning by doing, and sharing that spirit with others. Let's build something meaningful together.",
                ja: "関西出身の理科教員志望で、教育とテクノロジーを融合させることが大好きです。Spresenseでピクセルアートカメラを作ったり、GeminiでストーリーテリングAIを開発したり、学生向けのクリエイティブなアプリを作ったり。アイデアを形にすることを楽しんでいます。実践から学び、その精神を共有することを信じています。一緒に意味のあるものを作りましょう。"
            },
            link: '#',
            image: '/profile.png'
        },
        {
            id: 'proj2',
            title: { en: 'Google Cloud Certified', ja: 'Google Cloud 認定資格' },
            category: { en: 'Generative AI Leader', ja: '生成AI リーダー' },
            description: {
                en: 'Certified in Generative AI Leadership (Nov 2024). Comprehensive understanding of how generative AI transforms businesses, with business-level knowledge of Google Cloud generative AI services and enterprise-ready solutions.',
                ja: '生成AIリーダーシップ認定資格取得（2024年11月）。生成AIがビジネスをどのように変革するかについて包括的に理解しており、Google Cloudの生成AIサービスに関するビジネスレベルの知識を持っています。'
            },
            link: 'https://www.credly.com/badges/ca0837199f654af186561d3096e732b4',
            image: '/genaileader_certification.png'
        },
        {
            id: 'proj3',
            title: { en: 'Contact', ja: 'お問い合わせ' },
            category: { en: 'Get in touch', ja: 'ご連絡ください' },
            description: {
                en: 'Feel free to reach out via email for collaboration or inquiries.',
                ja: 'コラボレーションやお問い合わせはメールでお気軽にどうぞ。'
            },
            link: 'mailto:t-kondoy@e.osakamanabi.jp'
        },
        {
            id: 'proj4',
            title: { en: 'Skills', ja: 'スキル' },
            category: { en: 'Tech Stack', ja: '技術スタック' },
            description: {
                en: 'JavaScript, WebGL, Creative Coding, UI/UX, React, Node.js, Spresense, Gemini API, Python, HTML/CSS, Git, VS Code, and always learning more!',
                ja: 'JavaScript, WebGL, クリエイティブコーディング, UI/UX, React, Node.js, Spresense, Gemini API, Python, HTML/CSS, Git, VS Code など、常に学び続けています！'
            },
            link: '#'
        }
    ],
    skills: [
        'JavaScript', 'WebGL', 'Creative Coding', 'UI/UX', 'React', 'Node.js'
    ]
};
