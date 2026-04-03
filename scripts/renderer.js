// 在 marked 处理前，把数学公式替换成占位符，防止 _ * 等被 marked 破坏
function protectMath(md) {
  const stash = []

  // 先处理块级公式 $$...$$
  md = md.replace(/\$\$([\s\S]+?)\$\$/g, (match) => {
    stash.push({ type: 'block', src: match })
    return `@@MATH_${stash.length - 1}@@`
  })

  // 再处理行内公式 $...$（不跨行）
  md = md.replace(/\$([^\n$]+?)\$/g, (match) => {
    stash.push({ type: 'inline', src: match })
    return `@@MATH_${stash.length - 1}@@`
  })

  return { md, stash }
}

// marked 渲染后，把占位符还原为原始 LaTeX
function restoreMath(html, stash) {
  return html.replace(/@@MATH_(\d+)@@/g, (_, i) => stash[i].src)
}

async function loadPage(path) {
  const content = document.getElementById('content')
  content.innerHTML = '<p class="loading-hint">加载中…</p>'

  const raw = await fetchMarkdown(path)

  // 1. 保护数学公式
  const { md, stash } = protectMath(raw)

  // 2. marked 解析
  let html = marked.parse(md)

  // 3. 还原公式
  html = restoreMath(html, stash)

  content.innerHTML = html

  // 4. 代码高亮 + 顶栏 + 复制按钮
  content.querySelectorAll('pre code').forEach(block => {
    hljs.highlightElement(block)

    const pre = block.parentElement
    const langClass = [...block.classList].find(c => c.startsWith('language-'))
    const lang = langClass ? langClass.replace('language-', '') : 'code'

    const header = document.createElement('div')
    header.className = 'code-header'
    header.innerHTML = `<span class="code-lang">${lang}</span><button class="copy-btn">复制</button>`
    pre.prepend(header)

    header.querySelector('.copy-btn').addEventListener('click', async function () {
      await navigator.clipboard.writeText(block.innerText)
      this.textContent = '已复制 ✓'
      setTimeout(() => { this.textContent = '复制' }, 2000)
    })
  })

  // 5. KaTeX 渲染数学公式
  renderMathInElement(content, {
    delimiters: [
      { left: '$$', right: '$$', display: true },
      { left: '$',  right: '$',  display: false },
      { left: '\\[', right: '\\]', display: true },
      { left: '\\(', right: '\\)', display: false }
    ],
    throwOnError: false
  })

  // 6. 把块级公式从 <p> 里提出来，避免 <p> 裁剪公式
  content.querySelectorAll('p > .katex-display').forEach(display => {
    const p = display.parentElement
    p.replaceWith(display)
  })

  // 更新侧边栏 active
  updateSidebarActive(path)

  // 更新页面标题
  const h1 = content.querySelector('h1')
  document.title = h1 ? h1.textContent + ' · 教案' : '教案展示'

  // 滚动顶部
  window.scrollTo(0, 0)
}
