import React from "react";

export type SidebarVariant = "dark" | "light";

export type SidebarItem = {
    label: string;
    href: string;
    icon?: React.ReactNode;
    badge?: string;
};

export type SidebarProps = {
    logo?: string;
    logoIcon?: React.ReactNode;
    items?: SidebarItem[];
    activeHref?: string;
    variant?: SidebarVariant;
    collapsible?: boolean;
    defaultCollapsed?: boolean;
    className?: string;
    style?: React.CSSProperties;
};
