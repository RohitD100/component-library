import React, { forwardRef } from 'react';
import './Link.css';

export type LinkVariant = 'default' | 'primary' | 'secondary' | 'inline' | 'underlined';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: LinkVariant;
  isExternal?: boolean;
  showExternalIndicator?: boolean;
  isDisabled?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  asChild?: boolean;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      children,
      className = '',
      variant = 'default',
      isExternal = false,
      showExternalIndicator = false,
      isDisabled = false,
      leadingIcon,
      trailingIcon,
      asChild = false,
      href,
      target,
      rel,
      ...props
    },
    ref
  ) => {
    // Pure string concatenation bina kisi external library ke
    const variantClass = `ds-link-${variant}`;
    const disabledClass = isDisabled ? 'ds-link-disabled' : '';
    const combinedClasses = `ds-link ${variantClass} ${disabledClass} ${className}`.trim();

    const computedTarget = target ?? (isExternal ? '_blank' : undefined);
    const computedRel = rel ?? (computedTarget === '_blank' ? 'noopener noreferrer' : undefined);

    const ExternalIcon = (
      <svg
        aria-hidden="true"
        className="ds-link-ext-icon"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
      </svg>
    );

    const accessibilityProps = isDisabled
      ? {
          'aria-disabled': true,
          tabIndex: -1,
          onClick: (e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault(),
        }
      : {};

    const content = (
      <>
        {leadingIcon && <span style={{ display: 'inline-flex', flexShrink: 0 }} aria-hidden="true">{leadingIcon}</span>}
        {children}
        {trailingIcon && <span style={{ display: 'inline-flex', flexShrink: 0 }} aria-hidden="true">{trailingIcon}</span>}
        {isExternal && showExternalIndicator && ExternalIcon}
        {isExternal && <span className="sr-only">(opens in a new tab)</span>}
      </>
    );

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children, {
        ...props,
        ...accessibilityProps,
        className: `${combinedClasses} ${(children.props as any).className || ''}`.trim(),
        ref,
      } as any);
    }

    return (
      <a
        ref={ref}
        href={isDisabled ? undefined : href}
        target={computedTarget}
        rel={computedRel}
        className={combinedClasses}
        {...accessibilityProps}
        {...props}
      >
        {content}
      </a>
    );
  }
);

Link.displayName = 'Link';