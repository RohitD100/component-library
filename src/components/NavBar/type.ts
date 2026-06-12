import React from "react";

export type NavbarProps = {
    size?: "small" | "medium" | "large";
    theme?: "light" | "dark";
    links: { label: string; href: string }[];
    logo?: string;
    style?: React.CSSProperties;
};
