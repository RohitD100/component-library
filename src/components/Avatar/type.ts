import React from "react";

export type AvatarProps = {
    src: string;
    alt?: string;
    initials?: string;
    size?: "sm" | "md" | "lg" | "xl";
    shape?: "circle" | "square";
    status?: "online" | "offline" | "busy";
    className?: string;
    style?: React.CSSProperties;
};
