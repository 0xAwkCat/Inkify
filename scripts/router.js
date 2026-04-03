function getPath() {
  const hash = window.location.hash.slice(2) // 去掉 #/
  return hash || 'home'
}

async function init() {
  await initSidebar()
  await loadPage(getPath())
}

window.addEventListener('hashchange', () => loadPage(getPath()))
window.addEventListener('load', init)
