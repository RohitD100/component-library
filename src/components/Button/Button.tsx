import { useState } from "react";
import { sizeStyles, variantColors, baseButtonStyle } from "./butonStyling";
import type { ButtonProps } from "./types";

const Button = ({
    size = "md",
    variant = "primary",
    content,
    onClick,
    disabled = false,
    styles = {},
}: ButtonProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const colors = variantColors[variant];

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            style={{
                ...baseButtonStyle,
                ...sizeStyles[size],
                background: isHovered ? colors.hover : colors.background,
                color: colors.text,
                boxShadow: isFocused
                    ? `0 0 0 3px ${colors.background}55`
                    : "none",
                opacity: disabled ? 0.6 : 1,
                cursor: disabled ? "not-allowed" : "pointer",
                ...styles,
            }}
        >
            {content}
        </button>
    );
};

export default Button;
