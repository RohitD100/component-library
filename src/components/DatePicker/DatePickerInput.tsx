import {
    triggerWrapperStyle,
    inputStyle,
    inputErrorStyle,
    calendarIconButtonStyle,
} from "./datePickerStyle";
import type { DatePickerInputProps } from "./type";

const DatePickerInput = ({
    value,
    placeholder,
    disabled,
    inputError,
    open,
    onChange,
    onFocus,
    onToggle,
}: DatePickerInputProps) => {
    return (
        <div className={triggerWrapperStyle}>
            <input
                type="text"
                disabled={disabled}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                onFocus={onFocus}
                className={`${inputStyle} ${inputError ? inputErrorStyle : ""}`}
                aria-label="Date input"
                aria-invalid={inputError}
                aria-describedby={inputError ? "date-input-error" : undefined}
            />
            <button
                type="button"
                disabled={disabled}
                onClick={onToggle}
                className={calendarIconButtonStyle}
                aria-label={open ? "Close calendar" : "Open calendar"}
                aria-haspopup="dialog"
                aria-expanded={open}
                tabIndex={-1}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
            </button>
        </div>
    );
};

export default DatePickerInput;
