import React from "react";

export type HelpPopupPlacement = "top" | "bottom" | "left" | "right";
export type HelpPopupVariant = "default" | "info" | "warning" | "tip";
export type HelpPopupTrigger = "click" | "hover";

export type HelpPopupProps = {
    content: React.ReactNode;
    title?: string;
    trigger?: React.ReactNode;
    triggerType?: HelpPopupTrigger;
    placement?: HelpPopupPlacement;
    variant?: HelpPopupVariant;
    defaultOpen?: boolean;
    className?: string;
    styles?: React.CSSProperties;
};
