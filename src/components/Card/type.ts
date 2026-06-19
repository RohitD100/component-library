import React from "react";

export type BadgeVariant = "default" | "success" | "warning" | "danger";
export type CardVariant = "dark" | "light";

export type CardProps = {
    title: string;
    description: string;
    imageUrl?: string;
    badge?: string;
    badgeVariant?: BadgeVariant;
    variant?: CardVariant;
    size?: "sm" | "md" | "lg";
    actionLabel?: string;
    onAction?: () => void;
    secondaryLabel?: string;
    onSecondary?: () => void;
    footer?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
};
