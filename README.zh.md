# Inkify

[English](./README.md) · **中文**

> 一个受 Docsify 启发的极简 Markdown 站点模板，搭配暖奶油色设计系统。只需编辑 `.md` 文件，页面即自动更新。

![License](https://img.shields.io/badge/license-MIT-blue)

---

## 特性

- **无构建步骤** — 纯 HTML + CSS + Vanilla JS，无需 Node.js
- **Hash 路由** — SPA 式导航，无需服务器配置
- **数学公式** — KaTeX 渲染，支持行内 `$...$` 与块级 `$$...$$`
- **代码高亮** — highlight.js，附语言标签与一键复制按钮
- **暖色设计系统** — CSS 变量驱动配色，易于换色
- **中文友好** — 霞鹜文楷 Screen 字体，CJK 渲染正常
- **开箱即用** — 包含 `.nojekyll`，静态托管直接可用

## 快速开始

### 作为模板使用

在 GitHub 点击 **"Use this template"** 创建你的仓库，然后：

1. 编辑 `_sidebar.md` 配置导航
2. 用你的内容替换 `home.md`（站点首页）
3. 将 `.md` 文件放入 `docs/` 目录
4. 推送到任意静态托管平台

### 本地运行

```bash
# Python
python -m http.server 8080

# 或 Node.js
npx serve .
```

访问 `http://localhost:8080`。

## 文件结构

```
inkify/
├── index.html          # 入口，引入所有脚本与样式
├── home.md             # 站点首页（修改这里）
├── _sidebar.md         # 侧边栏导航（修改这里）
├── .nojekyll
├── styles/
│   ├── base.css        # CSS 变量 + reset（换色从这里改）
│   ├── layout.css      # 侧边栏与内容区布局
│   ├── markdown.css    # Markdown 元素样式
│   └── components.css  # 侧边栏导航组件
├── scripts/
│   ├── router.js       # Hash 路由
│   ├── fetcher.js      # 加载 .md 文件，处理 404
│   ├── renderer.js     # marked.js + KaTeX + 复制按钮
│   └── sidebar.js      # 侧边栏渲染 + active 状态
└── docs/               # 你的内容放这里
    ├── example-01.md
    └── example-02.md
```

## 自定义

### 配色

修改 `styles/base.css` 中的 CSS 变量：

```css
:root {
  --cream:        #F5F3EE;   /* 页面背景 */
  --cream-dark:   #EDEAE3;   /* 侧边栏、代码背景 */
  --cream-darker: #E2DED6;   /* 更深背景层 */
  --ink:          #1C1917;   /* 主文字 */
  --ink-mid:      #514B44;   /* 次要文字 */
  --ink-soft:     #968E84;   /* 弱化文字 */
  --accent:       #7A6A5A;   /* 链接、边框、active 导航 */
  --accent-light: #A89888;   /* 列表圆点、波浪下划线 */
  --sidebar-w:    240px;
}
```

### 字体

- **标题** — Cormorant Garamond（衬线）
- **正文** — DM Sans + 霞鹜文楷 Screen（中文）
- **代码** — JetBrains Mono

替换 `index.html` 中的 Google Fonts 链接即可更换字体。

### 侧边栏

编辑 `_sidebar.md`：

```markdown
- [首页](/)
- [页面标题](docs/文件名)
```

`docs/` 下的文件名建议使用英文或拼音，避免中文文件名在 URL 中的编码问题。

## 浏览器支持

现代浏览器（Chrome、Firefox、Safari、Edge）。复制按钮依赖 `navigator.clipboard`，需要 HTTPS 或 localhost 环境。

## License

MIT — 可自由使用、修改与分发。
