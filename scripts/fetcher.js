async function fetchMarkdown(path) {
  try {
    const res = await fetch(`${path}.md`)
    if (!res.ok) return '# 404\n\n页面未找到。'
    return res.text()
  } catch {
    return '# 错误\n\n无法加载页面，请确认使用本地服务器运行。'
  }
}
