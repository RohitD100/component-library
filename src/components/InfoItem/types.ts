import React from "react";

export type InfoItemVariant = "default" | "subtle" | "highlight";
export type InfoItemSize = "sm" | "md" | "lg";
export type InfoItemOrientation = "horizontal" | "vertical";

export type InfoItemProps = {
    label?: string;
    value: React.ReactNode;
    variant?: InfoItemVariant;
    size?: InfoItemSize;
    orientation?: InfoItemOrientation;
    icon?: React.ReactNode;
    className?: string;
    styles?: React.CSSProperties;
};
