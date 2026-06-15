export const sizeStyles: Record<string, React.CSSProperties> = {
    sm: { padding: "5px 10px", fontSize: "12px" },
    md: { padding: "10px 20px", fontSize: "14px" },
    lg: { padding: "15px 30px", fontSize: "16px" },
};

export const variantColors: Record<
    string,
    { background: string; text: string }
> = {
    primary: {
        background: "linear-gradient(to right, #a855f7, #06b6d4)",
        text: "#ffffff",
    },
    secondary: {
        background: "#6c757d",
        text: "#ffffff",
    },
    danger: {
        background: "#dc3545",
        text: "#ffffff",
    },
};