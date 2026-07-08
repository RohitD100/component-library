/**
 * Determines whether an href points outside the current application.
 * Treats absolute URLs with a different origin, or protocol-relative
 * URLs, as external. Relative paths, hashes, and same-origin absolute
 * URLs are treated as internal.
 */
export function isExternalHref(href: string): boolean {
  if (/^(mailto:|tel:)/i.test(href)) return false;
  if (href.startsWith("//")) return true;
  if (!/^[a-z][a-z0-9+.-]*:/i.test(href) && !href.startsWith("http")) {
    return false;
  }
  try {
    const url = new URL(
      href,
      typeof window !== "undefined" ? window.location.href : undefined,
    );
    if (typeof window === "undefined") return true;
    return url.origin !== window.location.origin;
  } catch {
    return false;
  }
}