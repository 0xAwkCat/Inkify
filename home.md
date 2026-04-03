# Inkify

*A minimal Markdown-powered site — just edit `.md` files.*

---

## 快速开始

将你的 Markdown 文件放入 `docs/` 目录，然后在 `_sidebar.md` 中添加对应链接，页面即自动更新。

无需构建步骤，无需框架，无需配置服务器。

## 支持的功能

- **数学公式** — 行内 $E = mc^2$，块级公式自动居中渲染
- **代码高亮** — 支持多语言，附语言标签与一键复制
- **表格、引用、任务列表** — 完整 GFM 支持
- **图片** — 自动居中，下方斜体作图注

## 侧边栏导航

编辑 `_sidebar.md` 管理导航，格式如下：

```markdown
- [首页](/)
- [第一篇文章](docs/article-01)
- [第二篇文章](docs/article-02)
```

## 配色自定义

打开 `styles/base.css`，修改以下变量即可全局换色：

```css
:root {
  --cream:  #F5F3EE;  /* 主背景 */
  --accent: #7A6A5A;  /* 强调色 */
}
```

---

*Powered by [Inkify](https://github.com/) · MIT License*
