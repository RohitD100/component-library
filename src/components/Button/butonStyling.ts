export const sizeStyles: Record<string, React.CSSProperties> = {
    sm: { padding: "5px 10px", fontSize: "12px" },
    md: { padding: "10px 20px", fontSize: "14px" },
    lg: { padding: "15px 30px", fontSize: "16px" },
};

export const variantColors: Record<
    string,
    { background: string; text: string; hover: string } 
> = {
    primary: {
        background: "linear-gradient(to right, #a855f7, #06b6d4)",
        hover: "linear-gradient(to right, #9333ea, #0891b2)",   
        text: "#ffffff",
    },
    secondary: {
        background: "#6c757d",
        hover: "#5a6268",
        text: "#ffffff",
    },
    danger: {
        background: "#dc3545",
        hover: "#bb2d3b",
        text: "#ffffff",
    },
};

export const baseButtonStyle: React.CSSProperties = {
    border: "none",           
    outline: "none",          
    cursor: "pointer",
    borderRadius: "6px",
    transition: "opacity 0.2s, box-shadow 0.2s",
};