// ===========================
// Social Portfolio Data
// ===========================

// Dark theme particle colors (white/light gray)
const THEME_COLORS = [
    '#ffffff', // White
    '#e0e0e0', // Light Gray
    '#c0c0c0', // Silver
    '#a0a0a0', // Medium Gray
    '#808080'  // Gray
];

const portfolioData = {
    // UI Texts for language switching
    uiTexts: {
        en: {
            title: 'YUKI K.',
            subtitle: 'Community & Social',
            instructions: 'Tap or Click to Explore',
            sendEmail: 'Send Email',
            viewOnGitHub: 'View on GitHub',
            viewProject: 'View',
            follow: 'Follow',
            readMore: 'Read More'
        },
        ja: {
            title: 'YUKI K.',
            subtitle: 'コミュニティ & ソーシャル',
            instructions: 'タップまたはクリックして探索',
            sendEmail: 'メールを送る',
            viewOnGitHub: 'GitHubで見る',
            viewProject: '見る',
            follow: 'フォロー',
            readMore: '続きを読む'
        }
    },
    projects: [
        {
            id: 'social1',
            title: {
                en: 'X (Twitter)',
                ja: 'X (Twitter)'
            },
            category: {
                en: 'Social Media',
                ja: 'ソーシャルメディア'
            },
            description: {
                en: 'Follow me for tech insights, community updates, and daily thoughts.',
                ja: '技術的な洞察、コミュニティの最新情報、日々の考えをフォローしてください。'
            },
            link: 'https://x.com/',  // TODO: Add your X handle
            color: '#333333'
        },
        {
            id: 'social2',
            title: {
                en: 'Qiita',
                ja: 'Qiita'
            },
            category: {
                en: 'Tech Blog',
                ja: '技術ブログ'
            },
            description: {
                en: 'Technical articles about programming, cloud technologies, and development tips.',
                ja: 'プログラミング、クラウド技術、開発のヒントについての技術記事。'
            },
            link: 'https://qiita.com/',  // TODO: Add your Qiita profile
            color: '#55c500'
        },
        {
            id: 'social3',
            title: {
                en: 'note',
                ja: 'note'
            },
            category: {
                en: 'Blog',
                ja: 'ブログ'
            },
            description: {
                en: 'Personal stories, thoughts on education and technology, and community experiences.',
                ja: '個人的なストーリー、教育とテクノロジーについての考え、コミュニティでの経験。'
            },
            link: 'https://note.com/',  // TODO: Add your note profile
            color: '#41c9b4'
        },
        {
            id: 'social4',
            title: {
                en: 'Community',
                ja: 'コミュニティ'
            },
            category: {
                en: 'Events & Meetups',
                ja: 'イベント & ミートアップ'
            },
            description: {
                en: 'Active participant in tech communities, meetups, and educational events.',
                ja: '技術コミュニティ、ミートアップ、教育イベントにアクティブに参加。'
            },
            link: '#',  // TODO: Add community link
            color: '#6366f1'
        },
        {
            id: 'social5',
            title: {
                en: 'Ambassador',
                ja: 'アンバサダー'
            },
            category: {
                en: 'Official Role',
                ja: '公式ロール'
            },
            description: {
                en: 'Ambassador activities and related programs. Bridging technology and education.',
                ja: 'アンバサダー活動と関連プログラム。テクノロジーと教育の架け橋。'
            },
            link: '#',  // TODO: Add ambassador program link
            color: '#f59e0b'
        }
    ]
};
