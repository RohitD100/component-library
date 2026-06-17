import { baseButtonStyle, sizeStyles, variantStyles } from "./butonStyling";
import type { ButtonProps } from "./types";

const Button = ({
    size = "md",
    variant = "primary",
    type = "button",
    content,
    onClick,
    disabled = false,
    className = "",
    styles = {},
}: ButtonProps) => (
    <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${baseButtonStyle} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
        style={styles}
    >
        {content}
    </button>
);

export default Button;
