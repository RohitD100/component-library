import { useState } from "react";
import {
    badgeVariants,
    baseSidebarStyle,
    collapseButtonVariants,
    collapsedNavItem,
    iconStyle,
    logoVariants,
    navItemActive,
    navItemBase,
    navItemInactiveVariants,
    navStyle,
    sidebarVariants,
    tooltipStyle,
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
                    <span className="flex items-center justify-center w-full font-bold text-base">
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
                                    <span className="w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0">
                                        {item.label.charAt(0)}
                                    </span>
                                )}

                                <span className={tooltipStyle}>
                                    {item.label}
                                    {item.badge && (
                                        <span className="ml-1.5 px-1.5 py-0.5 rounded-full text-[10px] bg-purple-500/30 text-purple-200">
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