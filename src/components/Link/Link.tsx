import { forwardRef, useMemo } from "react";
import type { KeyboardEvent, MouseEvent } from "react";
import type { LinkProps } from "./types";
import { getLinkClassName, iconStyles } from "./linkStyle";
import { Icons } from "../Icon/IconsSvg";
import { isExternalHref } from "./helper";

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  {
    href,
    variant = "default",
    children,
    external,
    openInNewTab,
    disabled = false,
    icon,
    iconPlacement = "trailing",
    showExternalIndicator = true,
    className,
    onClick,
    onKeyDown,
    rel,
    ...rest
  },
  ref,
) {
  const resolvedExternal = external ?? isExternalHref(href);
  const shouldOpenInNewTab = openInNewTab ?? resolvedExternal;

  const classes = useMemo(
    () => getLinkClassName(variant, disabled, className),
    [variant, disabled, className],
  );

  const resolvedRel = shouldOpenInNewTab
    ? Array.from(
        new Set([
          ...(rel ?? "").split(" ").filter(Boolean),
          "noopener",
          "noreferrer",
        ]),
      ).join(" ")
    : rel;

  const showIndicator = resolvedExternal && showExternalIndicator && !icon;

  const leadingIcon = icon && iconPlacement === "leading" ? icon : null;
  const trailingIcon =
    (icon && iconPlacement === "trailing") || showIndicator
      ? (icon ?? (
          <span aria-hidden="true" className={iconStyles}>
            {Icons.squareArrowOutUpRight()}
          </span>
        ))
      : null;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLAnchorElement>) => {
    onKeyDown?.(event);
  };

  // A single dynamic element handles both states. Disabled links are not
  // real anchors: no href, no tab stop, no pointer/keyboard activation.
  // Rendering a <span role="link"> instead of an <a> (rather than just
  // styling an anchor as disabled) is what actually removes it from the
  // tab order and click/keyboard handling — an <a href> is natively
  // interactive no matter what ARIA attributes are layered on top of it.
  const Component = disabled ? "span" : "a";

  const interactiveProps = disabled
    ? {
        role: "link" as const,
        "aria-disabled": true,
        tabIndex: -1,
      }
    : {
        href,
        target: shouldOpenInNewTab ? "_blank" : undefined,
        rel: resolvedRel,
        onClick: handleClick,
        onKeyDown: handleKeyDown,
      };

  return (
    <Component
      {...(disabled ? {} : rest)}
      {...(disabled ? {} : { ref })}
      className={classes}
      {...interactiveProps}
    >
      {leadingIcon}
      <span>{children}</span>
      {trailingIcon}
      {!disabled && shouldOpenInNewTab && (
        <span className="sr-only"> (opens in a new tab)</span>
      )}
    </Component>
  );
});

Link.displayName = "Link";

export default Link;
