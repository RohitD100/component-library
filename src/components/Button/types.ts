import React from "react";

export type ButtonProps = {
    size?: "sm" | "md" | "lg";
    variant?: "primary" | "secondary" | "danger" | "ghost" | "ghostActive";
    type?: "button" | "submit" | "reset";
    content: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    styles?: React.CSSProperties;
};
