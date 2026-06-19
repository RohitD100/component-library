import type { InputProps } from "./type";
import {
    sizeStyles,
    variantStyles,
    baseInputStyle,
    wrapperStyle,
    iconStyle,
} from "./inputStyling";

const Input = ({
    size = "md",
    variant = "light",
    value,
    onChange,
    placeholder,
    className = "",
    style = {},
    leftIcon,
    rightIcon,
}: InputProps) => (
    <div className={wrapperStyle}>
        {leftIcon && <span className={`${iconStyle} left-3`}>{leftIcon}</span>}
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`
                ${baseInputStyle}
                ${sizeStyles[size]}
                ${variantStyles[variant]}
                ${leftIcon ? "pl-9" : ""}
                ${rightIcon ? "pr-9" : ""}
                ${className}
            `}
            style={style}
        />
        {rightIcon && (
            <span className={`${iconStyle} right-3`}>{rightIcon}</span>
        )}
    </div>
);

export default Input;
