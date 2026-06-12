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
                    backgroundColor: variantColors[variant],
                    background:variantColors[variant],
                    color: "#fff",
                    ...styles,
                }}
            >
                {content}
            </button>
        </>
    );
};

export default Button;
