# Copilot Instructions for yukknd.dev Portfolio

## Project Overview
インタラクティブなCanvas particle effectsを使った多言語対応ポートフォリオサイト（GitHub Pages/静的サイト）。

## Architecture

### Page Structure
- `/index.html` - ホームページ（MediaPipe手認識によるカメラ操作対応）
- `/xx/` - ポートフォリオ作品ページ（メインコンテンツ）
- `/oo/` - ソーシャルリンクページ（ダークテーマ）

### Core Pattern: Data-Driven Pages
各ページは専用のデータファイルからコンテンツを読み込む：
```
/portfolio_data.js  → /xx/index.html で使用
/oo/social_data.js  → /oo/index.html で使用（THEME_COLORSでテーマ定義）
```

## Key Conventions

### 多言語対応（i18n）
全テキストは `en`/`ja` オブジェクト形式で定義:
```javascript
title: { en: 'About Me', ja: '自己紹介' }
```
- 言語設定は `localStorage.preferredLang` に保存
- `script.js` の `switchLanguage()` と `initLanguage()` が制御

### テーマシステム
- ライトテーマ（デフォルト）: `style.css` + `DEFAULT_COLORS`
- ダークテーマ: `oo/style.css` + `THEME_COLORS`（`social_data.js`で定義）
- `script.js`は `THEME_COLORS` の存在で自動判定

### Canvas Particle System（`script.js`）
- `Particle` class: 背景の浮遊粒子
- `ProjectNode` class: クリック可能なプロジェクトノード（ダイヤモンド形状）
- 定数は先頭で定義: `PARTICLE_COUNT_*`, `CONNECTION_DISTANCE`, `MOUSE_DISTANCE` など

### ホームページ固有（`home.js`）
- MediaPipe Hands でカメラ入力を処理
- ピンチ操作で粒子を集約、離すと拡散
- `CAMERA_TIMEOUT_MS` でカメラ非検出時のフォールバック

## File Naming & Organization
```
├── home.css / home.js    # ホームページ専用
├── style.css / script.js # 作品ページ用（共有）
├── portfolio_data.js     # メインポートフォリオデータ
├── oo/
│   ├── style.css        # ダークテーマ上書き
│   └── social_data.js   # ソーシャル用データ + THEME_COLORS
└── xx/                   # 作品ページ（親のscript.js/style.cssを参照）
```

## Adding New Content

### 新規プロジェクト追加
`portfolio_data.js` の `projects` 配列に追加:
```javascript
{
    id: 'proj_unique_id',
    title: { en: 'Title', ja: 'タイトル' },
    category: { en: 'Category', ja: 'カテゴリ' },
    description: { en: '...', ja: '...' },
    link: 'https://...',  // または 'mailto:' または '#'
    image: '/path.png'    // オプション
}
```

### 新規ページ追加
1. サブディレクトリ作成 (`/newpage/`)
2. `index.html` で親の `script.js` を参照
3. 独自テーマが必要なら `style.css` と `*_data.js`（`THEME_COLORS`含む）を作成

## Deployment
- GitHub Pages で自動デプロイ
- カスタムドメイン: `yukknd.dev`（`CNAME`ファイルで設定）
- 静的ファイルのみ、ビルドステップなし
