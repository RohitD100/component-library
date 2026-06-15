import { sizeWidths } from "./formStyle";
import type { FormProps } from "./type";

const Form = ({
    onSubmit,
    children,
    size = "md",
    inputProps,
    title,
    style = {},
}: FormProps) => {
    return (
        <form
            onSubmit={onSubmit}
            style={{
                width: sizeWidths[size],
                ...style,
            }}
        >
            <h2
                style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "black",
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
                            color: "#374151",
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
                            border: "1px solid #d1d5db",
                            borderRadius: "8px",
                            fontSize: "14px",
                            outline: "none",
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
