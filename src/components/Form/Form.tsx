import {
    sizeWidths,
    baseFormStyle,
    baseLabelStyle,
    baseInputStyle,
    baseTitleStyle,
} from "./formStyle";
import type { FormProps } from "./type";

const Form = ({
    onSubmit,
    children,
    size = "md",
    inputProps,
    title,
    className = "",
    style = {},
}: FormProps) => {
    return (
        <form
            onSubmit={onSubmit}
            className={`${sizeWidths[size]} ${baseFormStyle} ${className}`}
            style={style}
        >
            {title && <h2 className={baseTitleStyle}>{title}</h2>}

            {inputProps?.map((field) => (
                <div key={field.name} className="space-y-1">
                    <label htmlFor={field.name} className={baseLabelStyle}>
                        {field.label}
                    </label>

                    <div className="relative flex items-center">
                        {field.leftIcon && (
                            <span className="absolute left-3 text-gray-400 pointer-events-none">
                                {field.leftIcon}
                            </span>
                        )}

                        <input
                            id={field.name}
                            name={field.name}
                            type={field.type ?? "text"}
                            placeholder={field.placeholder}
                            value={field.value}
                            onChange={field.onChange}
                            disabled={field.disabled}
                            className={`
                                ${baseInputStyle}
                                ${field.leftIcon ? "pl-10" : ""}
                                ${field.rightIcon ? "pr-10" : ""}
                                ${field.error ? "border-red-500 focus:ring-red-500" : ""}
                                ${field.className ?? ""}
                            `}
                        />

                        {field.rightIcon && (
                            <button
                                type="button"
                                onClick={field.onRightIconClick}
                                className="absolute right-3 text-gray-400 hover:text-white transition-colors focus:outline-none"
                            >
                                {field.rightIcon}
                            </button>
                        )}
                    </div>

                    {field.error && (
                        <p role="alert" className="text-sm text-red-400 mt-1">
                            {field.error}
                        </p>
                    )}
                </div>
            ))}

            {children && (
                <div className="flex justify-start mt-2">{children}</div>
            )}
        </form>
    );
};

export default Form;
