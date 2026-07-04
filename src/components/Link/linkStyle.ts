import type { LinkVariant } from './types';

/**
 * Base classes applied to every link regardless of variant.
 * Includes the focus-visible ring required for keyboard accessibility
 * and smooth color transitions for hover/active states.
 */
export const baseStyles =
  'inline-flex items-center gap-1.5 font-medium transition-colors duration-150 ' +
  'rounded-sm outline-none ' +
  'focus-visible:ring-2 focus-visible:ring-offset-2 ' +
  'focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400 ' +
  'focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900';

/**
 * Variant-specific classes. Each variant defines its own resting, hover,
 * active and visited states, with light/dark pairs on every color utility.
 */
export const variantStyles: Record<LinkVariant, string> = {
  default:
    'text-slate-700 hover:text-slate-900 active:text-slate-950 ' +
    'dark:text-slate-300 dark:hover:text-slate-100 dark:active:text-white',

  primary:
    'text-blue-600 hover:text-blue-700 active:text-blue-800 ' +
    'dark:text-blue-400 dark:hover:text-blue-300 dark:active:text-blue-200',

  secondary:
    'text-slate-500 hover:text-slate-700 active:text-slate-800 ' +
    'dark:text-slate-400 dark:hover:text-slate-200 dark:active:text-slate-100',

  inline:
    'text-inherit underline decoration-slate-400/60 underline-offset-2 ' +
    'hover:decoration-current ' +
    'dark:decoration-slate-500/60',

  underlined:
    'text-blue-600 underline decoration-blue-600/40 underline-offset-4 ' +
    'hover:decoration-blue-600 active:text-blue-800 ' +
    'dark:text-blue-400 dark:decoration-blue-400/40 dark:hover:decoration-blue-400 ' +
    'dark:active:text-blue-200',
};

/**
 * Classes applied when the link is disabled. Layered on top of (and
 * overriding) the variant classes via source order — disabled is always
 * rendered last in the class string.
 */
export const disabledStyles =
  'pointer-events-none opacity-50 cursor-not-allowed ' +
  'text-slate-400 dark:text-slate-600 no-underline';

/** Size classes for the leading/trailing icon wrapper. */
export const iconStyles = 'inline-block h-[1em] w-[1em] shrink-0 align-[-0.125em]';

/**
 * Builds the full className string for a given variant/disabled combination.
 */
export function getLinkClassName(
  variant: LinkVariant,
  disabled: boolean,
  className?: string
): string {
  return [
    baseStyles,
    variantStyles[variant],
    disabled ? disabledStyles : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');
}