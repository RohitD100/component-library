import {
    footerStyle,
    todayButtonStyle,
    clearButtonStyle,
} from "./datePickerStyle";
import { handleToday, handleClear } from "./datePickerUtils";
import type { DatePickerFooterProps } from "./type";

const DatePickerFooter = ({
    today,
    onChange,
    setViewYear,
    setViewMonth,
    setOpen,
}: DatePickerFooterProps) => {
    return (
        <div className={footerStyle}>
            <button
                type="button"
                onClick={() => handleClear(onChange, setOpen)}
                className={clearButtonStyle}
            >
                Clear
            </button>
            <button
                type="button"
                onClick={() =>
                    handleToday(
                        today,
                        onChange,
                        setViewYear,
                        setViewMonth,
                        setOpen,
                    )
                }
                className={todayButtonStyle}
            >
                Today
            </button>
        </div>
    );
};

export default DatePickerFooter;
