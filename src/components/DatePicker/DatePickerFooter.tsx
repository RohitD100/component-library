import React from "react";
import {
    footerStyle,
    todayButtonStyle,
    clearButtonStyle,
} from "./datePickerStyle";
import { handleToday, handleClear } from "./datePickerUtils";

type Props = {
    today: Date;
    onChange?: (date: Date) => void;
    setViewYear: (val: number) => void;
    setViewMonth: (val: number) => void;
    setOpen: (val: boolean) => void;
};

const DatePickerFooter = ({
    today,
    onChange,
    setViewYear,
    setViewMonth,
    setOpen,
}: Props) => {
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
