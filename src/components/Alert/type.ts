import React from "react";

export type AlertVariant =
    | "success"
    | "error"
    | "warning"
    | "info"
    | "yaracirclesuccess"
    | "yaracirclefail"

export type AlertProps = {
    message: string;
    title?: string;
    variant?: AlertVariant;
    size?: "sm" | "md" | "lg";
    showIcon?: boolean;
    dismissible?: boolean;
    onDismiss?: () => void;
    className?: string;
    style?: React.CSSProperties;
};
