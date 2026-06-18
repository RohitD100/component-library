import { sizeStyles, variantColors } from "./butonStyling";
import type { ButtonProps } from "./types";

const Button = ({
    size = "md",
    variant = "primary",
    content,
    onClick,
    disabled = false,
    styles = {},
}: ButtonProps) => {
    return (
        <>
            <button
                onClick={onClick}
                disabled={disabled}
                style={{
                    ...sizeStyles[size],
                    background: variantColors[variant].background,
                    color: variantColors[variant].text,
                    ...styles,
                }}
            >
                {content}
            </button>
        </>
    );
};

export default Button;
