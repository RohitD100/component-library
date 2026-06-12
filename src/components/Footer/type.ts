import React from "react";

export type FooterProps = {
    size?: "sm" | "md" | "lg";
    theme?: "light" | "dark";
    links: { label: string; url: string }[];
    logoUrl: string;
    disclaimer: string;
    style?: React.CSSProperties;
};
