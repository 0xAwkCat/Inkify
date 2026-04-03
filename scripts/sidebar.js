let sidebarLinks = []

async function initSidebar() {
  const nav = document.getElementById('sidebar-nav')
  const md = await fetchMarkdown('_sidebar')

  if (md.startsWith('#')) {
    nav.innerHTML = '<p class="sidebar-error">侧边栏加载失败</p>'
    return
  }

  // 解析 markdown 列表链接：- [标题](路径)
  const lines = md.split('\n')
  let index = 0
  const items = []

  for (const line of lines) {
    const match = line.match(/^-\s+\[(.+?)\]\((.+?)\)/)
    if (match) {
      items.push({ label: match[1], path: match[2] })
    }
  }

  nav.innerHTML = items.map((item, i) => {
    const num = String(i).padStart(2, '0')
    const href = item.path === '/' ? '#/' : `#/${item.path}`
    // 规范化 path 以便 active 比对
    const dataPath = item.path === '/' ? 'README' : item.path.replace(/^\//, '')
    return `<a class="nav-link" href="${href}" data-path="${dataPath}">
      <span class="nav-label">${item.label}</span>
      <span class="nav-num">${num}</span>
    </a>`
  }).join('')

  sidebarLinks = nav.querySelectorAll('.nav-link')
}

function updateSidebarActive(currentPath) {
  sidebarLinks.forEach(link => {
    link.classList.toggle('active', link.dataset.path === currentPath)
  })
}
