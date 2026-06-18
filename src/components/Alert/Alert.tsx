import { useState } from "react";
import {
    baseAlertStyle,
    sizeStyles,
    variantStyles,
    iconStyles,
    iconCircleStyles,
    dismissButtonStyle,
    iconWrapperStyle,
    contentWrapperStyle,
    titleStyle,
    messageStyle,
} from "./alertStyle";
import type { AlertProps } from "./type";

const Alert = ({
    message,
    title,
    variant = "info",
    size = "md",
    showIcon = true,
    dismissible = false,
    onDismiss,
    className = "",
    style = {},
}: AlertProps) => {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    const handleDismiss = () => {
        setVisible(false);
        onDismiss?.();
    };

    return (
        <div
            role="alert"
            aria-live="polite"
            className={`${baseAlertStyle} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
            style={style}
        >
            {showIcon && (
                <span
                    aria-hidden="true"
                    className={`${iconWrapperStyle} ${iconCircleStyles[variant]}`}
                >
                    {iconStyles[variant]}
                </span>
            )}

            <div className={contentWrapperStyle}>
                {title && <p className={titleStyle}>{title}</p>}
                <p className={messageStyle}>{message}</p>
            </div>

            {dismissible && (
                <button
                    onClick={handleDismiss}
                    aria-label="Dismiss alert"
                    className={dismissButtonStyle}
                >
                    ✕
                </button>
            )}
        </div>
    );
};

export default Alert;
