type ButtonProps={
    children:React.ReactNode;
    variant?:"light" | "dark" | "danger";
    size?: "lg" | "sm" | "md"
    className?:string;
    loading?:boolean;
}

const Button = ({
    variant,
    size,
    className,
    children,
    loading,
}: ButtonProps) => {
    return (
        <div
            className={`
    ${variant === "light" ? "bg-white text-black" : ""}
    ${variant === "dark" ? "bg-black text-white" : ""}
    ${variant === "danger" ? "bg-red-700 text-white" : ""}
    ${size === "lg" ? "px-6 py-3   text-lg" : " "}
    ${size === "sm" ? "px-3 py-1.5 text-sm" : " "}
    ${size === "md" ? "px-4 py-2   text-base" : " "}
    ${className}
    h-10 w-20
    `}
        >
            {loading ? "Loading..." : children}
        </div>
    );
};

export default Button;
