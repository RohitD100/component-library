type ToggleProps = {
    size?: "sm" | "md" | "lg";
    checked?: boolean;
    onClick?: () => void;
};

const Toggle = ({ size = "md", checked = false, onClick }: ToggleProps) => {
    const sizeStyles = {
        sm: "w-10 h-5",
        md: "w-14 h-7",
        lg: "w-18 h-9",
    };

    return (
        <button
            onClick={onClick}
            className={`
        relative rounded-full transition-colors
        ${sizeStyles[size]}
        ${checked ? "bg-green-500" : "bg-gray-400"}
      `}
        >
        </button>
    );
};

export default Toggle;
