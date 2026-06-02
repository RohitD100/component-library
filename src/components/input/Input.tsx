import type { ChangeEventHandler } from "react";

type InputProps = {
    placeholder?: string;
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    name?: string;
    className?: string;
    size?: "sm" | "md" | "lg";
    theme?: "dark" | "light";
};

const Input = ({
    placeholder,
    value,
    onChange,
    name,
    className,
    size,
    theme,
}: InputProps) => {
    return (
        <input
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            className={`
                ${size === "sm" ? "h-8 px-2 text-sm" : ""}
                ${size === "md" ? "h-10 px-3 text-base" : ""}
                ${size === "lg" ? "h-12 px-4 text-lg" : ""}
                ${theme === "dark" ? "bg-gray-700 text-white border-gray-600" : ""}
                ${theme === "light" ? "bg-white text-black border-gray-300" : ""}
                ${className} border`}
                required
        ></input>
    );
};

export default Input;
