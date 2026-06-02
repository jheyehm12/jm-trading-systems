import { resolveLinkHref } from './resolveLinkHref'

export function getValidUrl(value) {
  const href = resolveLinkHref(value)?.trim()

  return href || null
}
