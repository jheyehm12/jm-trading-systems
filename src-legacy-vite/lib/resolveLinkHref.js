export function resolveLinkHref(value) {
  if (!value) {
    return ''
  }

  const markdownMatch = value.match(/\((https?:\/\/[^)]+)\)$/)

  return markdownMatch?.[1] ?? value
}
