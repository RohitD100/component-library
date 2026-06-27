import React from "react";
import { Icons } from "./IconsSvg";
import { buildIconClassName, BRAND_COLOR, DEFAULT_ICON_SIZE } from "./iconstyle";
import type { IconProps } from "./types";

export const Icon: React.FC<IconProps> = ({
  icon,
  size = DEFAULT_ICON_SIZE,
  color,
  colorClass,
  className,
  label,
}) => {
  const SvgIcon = Icons[icon];

  const resolvedColor: string | undefined =
    color ?? (!colorClass ? BRAND_COLOR : undefined);

  const wrapperClass = buildIconClassName(
    size,
    resolvedColor ? undefined : colorClass,
    className
  );

  return (
    <span
      className={wrapperClass}
      style={resolvedColor ? { color: resolvedColor } : undefined}
      role="img"
      aria-label={label ?? `${icon} icon`}
    >
      <SvgIcon />
    </span>
  );
};

export default Icon;

export type { IconProps, IconName, IconSize } from "./types";