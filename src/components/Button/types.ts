export type ButtonProps = {
    size?: "sm" | "md" | "lg";
    variant?: "primary" | "secondary" | "danger";
    content: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
    styles?: React.CSSProperties;
};
