export function scrollToSection(sectionId) {
  const hash = sectionId.startsWith('#') ? sectionId : `#${sectionId}`
  const el = document.querySelector(hash)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export function getSectionHref(sectionId) {
  const hash = sectionId.startsWith('#') ? sectionId : `#${sectionId}`
  return `/${hash}`
}
