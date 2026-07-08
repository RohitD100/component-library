import { useState } from "react";
import {
    badgeVariants,
    baseSidebarStyle,
    collapseButtonVariants,
    collapsedNavItem,
    collapseIconStyle,
    iconStyle,
    iconStyle2,
    logoVariants,
    navItemActive,
    navItemBase,
    navItemInactiveVariants,
    navStyle,
    sidebarVariants,
    tooltipStyle,
    tooltipStyle2,
} from "./sidebarStyle";
import type { SidebarProps } from "./type";

export default function Sidebar({
    logo = "Logo",
    logoIcon,
    items = [],
    activeHref = "/",
    variant = "dark",
    collapsible = true,
    defaultCollapsed = false,
    className = "",
    style = {},
}: SidebarProps) {
    const [collapsed, setCollapsed] = useState(defaultCollapsed);

    return (
        <aside
            className={`${baseSidebarStyle} ${sidebarVariants[variant]} ${collapsed ? "w-16" : "w-56"} ${className}`}
            style={style}
            aria-label="Sidebar navigation"
        >
            <div className={logoVariants[variant]}>
                {logoIcon ? (
                    <span className={iconStyle}>{logoIcon}</span>
                ) : collapsed ? (
                    <span className={collapseIconStyle}>
                        {logo.charAt(0)}
                    </span>
                ) : (
                    logo
                )}
            </div>

            <nav
                className={`${navStyle} ${collapsed ? "overflow-hidden" : "overflow-y-auto"}`}
                role="navigation"
            >
                {items.map((item, index) => {
                    const isActive = item.href === activeHref;

                    if (collapsed) {
                        return (
                            <a
                                key={index}
                                href={item.href}
                                aria-current={isActive ? "page" : undefined}
                                aria-label={item.label}
                                className={`relative group ${collapsedNavItem} ${isActive ? navItemActive : navItemInactiveVariants[variant]}`}
                            >
                                {item.icon ? (
                                    <span className={iconStyle} aria-hidden="true">
                                        {item.icon}
                                    </span>
                                ) : (
                                    <span className={iconStyle2}>
                                        {item.label.charAt(0)}
                                    </span>
                                )}

                                <span className={tooltipStyle}>
                                    {item.label}
                                    {item.badge && (
                                        <span className={tooltipStyle2}>
                                            {item.badge}
                                        </span>
                                    )}
                                </span>
                            </a>
                        );
                    }

                    return (
                        <a
                            key={index}
                            href={item.href}
                            aria-current={isActive ? "page" : undefined}
                            className={`${navItemBase} ${isActive ? navItemActive : navItemInactiveVariants[variant]}`}
                        >
                            {item.icon && (
                                <span className={iconStyle} aria-hidden="true">
                                    {item.icon}
                                </span>
                            )}
                            <span className="flex-1">{item.label}</span>
                            {item.badge && (
                                <span className={badgeVariants[variant]}>
                                    {item.badge}
                                </span>
                            )}
                        </a>
                    );
                })}
            </nav>

            {collapsible && (
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className={collapseButtonVariants[variant]}
                    aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
                >
                    {collapsed ? "→" : "← Collapse"}
                </button>
            )}
        </aside>
    );
}