export type InputProps = {
    size?: "sm" | "md" | "lg";
    variant?: "dark" | "light";
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
    style?: React.CSSProperties;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
};
