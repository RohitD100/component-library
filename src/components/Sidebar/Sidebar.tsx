import { useState } from "react";
import {
    badgeVariants,
    baseSidebarStyle,
    collapseButtonVariants,
    iconStyle,
    logoVariants,
    navItemActive,
    navItemBase,
    navItemInactiveVariants,
    navStyle,
    sidebarVariants,
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
                    logo.charAt(0)
                ) : (
                    logo
                )}
            </div>

            <nav className={navStyle} role="navigation">
                {items.map((item, index) => {
                    const isActive = item.href === activeHref;
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

                            {!collapsed && (
                                <span className="flex-1">{item.label}</span>
                            )}

                            {!collapsed && item.badge && (
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