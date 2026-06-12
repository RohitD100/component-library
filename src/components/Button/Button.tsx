type ButtonProps = {
    size?: "sm" | "md" | "lg";
    variant?: "primary" | "secondary" | "danger";
    content: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
    bgColor?: string;
    textColor?: string;
    borderRadius?: string | number;
    fontSize?: string | number;
};

const sizeStyles: Record<string, React.CSSProperties> = {
    sm: { padding: "5px 10px", fontSize: "12px" },
    md: { padding: "10px 20px", fontSize: "14px" },
    lg: { padding: "15px 30px", fontSize: "16px" },
};

const variantColors: Record<string, string> = {
    primary: "#007bff",
    secondary: "#6c757d",
    danger: "#dc3545",
};

const Button = ({
    size = "md",
    variant = "primary",
    content,
    onClick,
    disabled = false,
    className = "",
    style = {},
    bgColor,
    textColor,
    borderRadius,
    fontSize,
}: ButtonProps) => {
    return (
        <>
            <button
                className={`btn ${size} ${variant} ${className}`}
                onClick={onClick}
                disabled={disabled}
                style={{
                    ...sizeStyles[size],
                    backgroundColor: bgColor || variantColors[variant],
                    color: textColor || "#fff",
                    border: "none",
                    borderRadius: borderRadius ?? "4px",
                    fontSize: fontSize ?? sizeStyles[size].fontSize,
                    cursor: disabled ? "not-allowed" : "pointer",
                    opacity: disabled ? 0.6 : 1,
                    ...style,
                }}
            >
                {content}
            </button>
        </>
    );
};

export default Button;
