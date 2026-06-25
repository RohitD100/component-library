import {
    calendarHeaderStyle,
    navButtonStyle,
    quickNavSelectStyle,
} from "./datePickerStyle";
import { MONTHS, prevMonth, nextMonth } from "./datePickerUtils";
import type { DatePickerHeaderProps } from "./type";

const DatePickerHeader = ({
    viewMonth,
    viewYear,
    years,
    setViewMonth,
    setViewYear,
}: DatePickerHeaderProps) => {
    return (
        <div className={calendarHeaderStyle}>
            <button
                type="button"
                onClick={() => prevMonth(viewMonth, setViewMonth, setViewYear)}
                className={navButtonStyle}
                aria-label="Previous month"
            >
                ‹
            </button>

            <div className="flex items-center gap-1">
                <select
                    value={viewMonth}
                    onChange={(e) => setViewMonth(Number(e.target.value))}
                    className={quickNavSelectStyle}
                    aria-label="Select month"
                >
                    {MONTHS.map((m, i) => (
                        <option key={m} value={i}>
                            {m}
                        </option>
                    ))}
                </select>

                <select
                    value={viewYear}
                    onChange={(e) => setViewYear(() => Number(e.target.value))}
                    className={quickNavSelectStyle}
                    aria-label="Select year"
                >
                    {years.map((y) => (
                        <option key={y} value={y}>
                            {y}
                        </option>
                    ))}
                </select>
            </div>

            <button
                type="button"
                onClick={() => nextMonth(viewMonth, setViewMonth, setViewYear)}
                className={navButtonStyle}
                aria-label="Next month"
            >
                ›
            </button>
        </div>
    );
};

export default DatePickerHeader;
