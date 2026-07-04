import { forwardRef, useMemo } from 'react';
import type { KeyboardEvent, MouseEvent } from 'react';
import type { LinkProps } from './types';
import { getLinkClassName, iconStyles } from './linkStyle';

/**
 * Built-in "opens in a new window" indicator, shown automatically on
 * external links unless suppressed via `showExternalIndicator={false}`.
 */
function ExternalIndicatorIcon() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconStyles}
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
    </svg>
  );
}

/**
 * Determines whether an href points outside the current application.
 * Treats absolute URLs with a different origin, or protocol-relative
 * URLs, as external. Relative paths, hashes, and same-origin absolute
 * URLs are treated as internal.
 */
function isExternalHref(href: string): boolean {
  if (/^(mailto:|tel:)/i.test(href)) return false;
  if (href.startsWith('//')) return true;
  if (!/^[a-z][a-z0-9+.-]*:/i.test(href) && !href.startsWith('http')) {
    return false;
  }
  try {
    const url = new URL(href, typeof window !== 'undefined' ? window.location.href : undefined);
    if (typeof window === 'undefined') return true;
    return url.origin !== window.location.origin;
  } catch {
    return false;
  }
}

/**
 * Link
 * -----
 * The design system's single component for navigation — both within the
 * application and out to external resources.
 *
 * Variants: `default` | `primary` | `secondary` | `inline` | `underlined`
 *
 * ### Usage
 *
 * Internal link:
 * ```tsx
 * <Link href="/dashboard">Go to dashboard</Link>
 * ```
 *
 * Primary call-to-action link:
 * ```tsx
 * <Link href="/signup" variant="primary">Create an account</Link>
 * ```
 *
 * External link (indicator icon added automatically, opens in new tab):
 * ```tsx
 * <Link href="https://example.com">Visit example.com</Link>
 * ```
 *
 * Inline link inside a paragraph of text:
 * ```tsx
 * <p>
 *   Read our <Link href="/privacy" variant="inline">privacy policy</Link> for details.
 * </p>
 * ```
 *
 * Underlined variant for persistent emphasis:
 * ```tsx
 * <Link href="/terms" variant="underlined">Terms of service</Link>
 * ```
 *
 * Leading icon:
 * ```tsx
 * <Link href="/back" icon={<ArrowLeftIcon />} iconPlacement="leading">
 *   Back
 * </Link>
 * ```
 *
 * Trailing icon (custom, suppressing the default external indicator):
 * ```tsx
 * <Link
 *   href="https://example.com"
 *   icon={<DownloadIcon />}
 *   iconPlacement="trailing"
 *   showExternalIndicator={false}
 * >
 *   Download file
 * </Link>
 * ```
 *
 * Force a same-origin link to open in a new tab:
 * ```tsx
 * <Link href="/report.pdf" openInNewTab>Open report</Link>
 * ```
 *
 * Disabled state:
 * ```tsx
 * <Link href="/upgrade" disabled>Upgrade (unavailable)</Link>
 * ```
 *
 * ### Accessibility
 * - Disabled links render as a `<span role="link" aria-disabled="true">`
 *   instead of an anchor, so they are not reachable via Tab and cannot be
 *   activated with a mouse, Enter, or Space.
 * - Links opening in a new tab get an accessible-name suffix ("(opens in
 *   a new tab)") appended via visually-hidden text so screen reader users
 *   are warned before navigating away.
 * - `rel="noopener noreferrer"` is applied automatically whenever
 *   `target="_blank"` is used, closing the reverse-tabnabbing security gap.
 * - Focus is always visible via a themed focus ring (see `linkStyle.ts`),
 *   satisfying WCAG 2.4.7 in both light and dark mode.
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  {
    href,
    variant = 'default',
    children,
    external,
    openInNewTab,
    disabled = false,
    icon,
    iconPlacement = 'trailing',
    showExternalIndicator = true,
    className,
    onClick,
    onKeyDown,
    rel,
    ...rest
  },
  ref
) {
  const resolvedExternal = external ?? isExternalHref(href);
  const shouldOpenInNewTab = openInNewTab ?? resolvedExternal;

  const classes = useMemo(
    () => getLinkClassName(variant, disabled, className),
    [variant, disabled, className]
  );

  const resolvedRel = shouldOpenInNewTab
    ? Array.from(new Set([...(rel ?? '').split(' ').filter(Boolean), 'noopener', 'noreferrer'])).join(' ')
    : rel;

  const showIndicator = resolvedExternal && showExternalIndicator && !icon;

  const leadingIcon = icon && iconPlacement === 'leading' ? icon : null;
  const trailingIcon =
    (icon && iconPlacement === 'trailing') || showIndicator
      ? icon ?? <ExternalIndicatorIcon />
      : null;

  // Disabled links are not real anchors: no href, no tab stop, no
  // pointer/keyboard activation. Rendering a <span role="link"> instead
  // of an <a> (rather than just styling an anchor as disabled) is what
  // actually removes it from the tab order and click/keyboard handling.
  if (disabled) {
    return (
      <span
        className={classes}
        role="link"
        aria-disabled="true"
        tabIndex={-1}
      >
        {leadingIcon}
        <span>{children}</span>
        {trailingIcon}
      </span>
    );
  }

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLAnchorElement>) => {
    onKeyDown?.(event);
  };

  return (
    <a
      {...rest}
      ref={ref}
      href={href}
      className={classes}
      target={shouldOpenInNewTab ? '_blank' : undefined}
      rel={resolvedRel}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      {leadingIcon}
      <span>{children}</span>
      {trailingIcon}
      {shouldOpenInNewTab && (
        <span className="sr-only"> (opens in a new tab)</span>
      )}
    </a>
  );
});

Link.displayName = 'Link';

export default Link;
