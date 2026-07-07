import type { AnchorHTMLAttributes, ReactNode } from 'react';

/**
 * Visual variants supported by the Link component.
 * These map 1:1 to the design system's link styles.
 */
export type LinkVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'inline'
  | 'underlined';

/**
 * Where an optional icon should render relative to the link text.
 */
export type IconPlacement = 'leading' | 'trailing';

export interface LinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target'> {
  /** Destination URL. Required — a link with no destination isn't a link. */
  href: string;
  /** Visual style of the link. Defaults to 'default'. */
  variant?: LinkVariant;
  /** Link content. */
  children: ReactNode;
  /**
   * Marks the link as pointing outside the application.
   * If omitted, this is inferred from `href` (protocol-relative or absolute
   * URLs pointing to a different origin than the current page).
   */
  external?: boolean;
  /**
   * Force the link open in a new tab/window regardless of internal/external
   * status. External links default to opening in a new tab unless this is
   * explicitly set to `false`.
   */
  openInNewTab?: boolean;
  /** Disables the link: no navigation, no focus stop, styled as inactive. */
  disabled?: boolean;
  /** Optional icon element (e.g. an SVG or icon-library component). */
  icon?: ReactNode;
  /** Where the icon renders. Ignored if `icon` is not provided. */
  iconPlacement?: IconPlacement;
  /**
   * Show the built-in "opens in new window" indicator icon for external
   * links. Defaults to `true` when the link is external. Set to `false` to
   * suppress it (e.g. if a custom trailing icon is already provided).
   */
  showExternalIndicator?: boolean;
}