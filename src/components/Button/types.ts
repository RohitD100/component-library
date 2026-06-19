import React from "react";

export type ButtonProps = {
    size?: "sm" | "md" | "lg";
    variant?: "primary" | "secondary" | "danger";
    type?: "button" | "submit" | "reset";
    content: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    styles?: React.CSSProperties;
};
