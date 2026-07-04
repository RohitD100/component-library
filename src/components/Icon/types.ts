import { Icons } from "./IconsSvg";

export type IconName = keyof typeof Icons;

export type IconSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export interface IconProps {
  icon: IconName;
  size?: IconSize;
  color?: string;
  colorClass?: string;
  className?: string;
  label?: string;
}