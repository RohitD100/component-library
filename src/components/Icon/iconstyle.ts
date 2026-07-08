import type { IconSize } from "./types";

export const iconSizeClasses: Record<IconSize, string> = {
  xs: "w-3 h-3",
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
  xl: "w-8 h-8",
  "2xl": "w-10 h-10",
};

export const DEFAULT_ICON_SIZE: IconSize = "md";

export const BRAND_COLOR = "#8b5cf6";

export function buildIconClassName(
  size: IconSize = DEFAULT_ICON_SIZE,
  colorClass?: string,
  className?: string
): string {
  return [
    "inline-flex",
    "items-center",
    "justify-center",
    "shrink-0",
    "select-none",
    iconSizeClasses[size],
    colorClass ?? "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");
}