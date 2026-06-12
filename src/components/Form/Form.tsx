import React from "react";

type InputProps = {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputBgColor?: string;
    inputTextColor?: string;
    inputBorderColor?: string;
    labelColor?: string;
};

type FormProps = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    children: React.ReactNode;
    size?: "sm" | "md" | "lg";
    inputProps?: InputProps[];
    title?: string;
    className?: string;
    style?: React.CSSProperties;
    width?: string | number;
    bgColor?: string;
    textColor?: string;
    borderColor?: string;
    borderRadius?: string | number;
    titleColor?: string;
};

const sizeWidths: Record<string, string> = {
    sm: "320px",
    md: "400px",
    lg: "500px",
};

const Form = ({
    onSubmit,
    children,
    size = "md",
    inputProps,
    title,
    className = "",
    style = {},
    width,
    bgColor,
    textColor,
    borderColor,
    borderRadius,
    titleColor,
}: FormProps) => {
    return (
        <form
            onSubmit={onSubmit}
            className={className}
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                width: width ?? sizeWidths[size],
                padding: "24px",
                backgroundColor: bgColor || "white",
                color: textColor || "inherit",
                border: `1px solid ${borderColor || "gray"}`,
                borderRadius: borderRadius ?? "12px",
                margin: "0 auto",
                ...style,
            }}
        >
            <h2
                style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: titleColor || "black",
                    textAlign: "center",
                    textDecoration: "underline",
                }}
            >
                {title || "Form"}
            </h2>

            {inputProps?.map((inputProp) => (
                <div
                    key={inputProp.name}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                    }}
                >
                    <label
                        htmlFor={inputProp.name}
                        style={{
                            fontWeight: 600,
                            fontSize: "14px",
                            color: inputProp.labelColor || "#374151",
                            textAlign: "left",
                        }}
                    >
                        {inputProp.label}
                    </label>

                    <input
                        id={inputProp.name}
                        name={inputProp.name}
                        type={inputProp.type}
                        placeholder={inputProp.placeholder}
                        value={inputProp.value}
                        onChange={inputProp.onChange}
                        style={{
                            padding: "10px 12px",
                            border: `1px solid ${inputProp.inputBorderColor || "#d1d5db"}`,
                            borderRadius: "8px",
                            fontSize: "14px",
                            outline: "none",
                            backgroundColor: inputProp.inputBgColor || "white",
                            color: inputProp.inputTextColor || "black",
                        }}
                    />
                </div>
            ))}

            <div
                style={{
                    display: "flex",
                    justifyContent: "left",
                    marginTop: "8px",
                }}
            >
                {children}
            </div>
        </form>
    );
};

export default Form;
