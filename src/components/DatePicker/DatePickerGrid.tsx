import { MONTHS } from "./datePickerUtils";
import type { DatePickerGridProps } from "./type";
import {
    weekGridStyle,
    weekLabelStyle,
    daysGridStyle,
    dayButtonBase,
    dayActive,
    dayToday,
    dayDisabled,
    dayOtherMonth,
    dayHover,
    dayHighlight,
} from "./datePickerStyle";
import {
    WEEK_DAYS,
    isSameDay,
    isDayDisabled,
    isDayHighlighted,
    getDayLabel,
    handleSelectDay,
    buildCalendarCells,
} from "./datePickerUtils";

const DatePickerGrid = ({
    viewYear,
    viewMonth,
    value,
    today,
    minDate,
    maxDate,
    customDates,
    onChange,
    setOpen,
}: DatePickerGridProps) => {
    const cells = buildCalendarCells(viewYear, viewMonth);

    return (
        <>
            <div className={weekGridStyle}>
                {WEEK_DAYS.map((d) => (
                    <div key={d} className={weekLabelStyle}>
                        {d}
                    </div>
                ))}
            </div>

            <div className={daysGridStyle}>
                {cells.map((cell, index) => {
                    if (cell.type !== "current") {
                        return (
                            <div
                                key={`${cell.type}-${index}`}
                                className={`${dayButtonBase} ${dayOtherMonth}`}
                            >
                                {cell.day}
                            </div>
                        );
                    }

                    const cellDate = new Date(viewYear, viewMonth, cell.day);
                    const isSelected = value
                        ? isSameDay(cellDate, value)
                        : false;
                    const isTodayCell = isSameDay(cellDate, today);
                    const isDisabled = isDayDisabled(
                        cell.day,
                        viewYear,
                        viewMonth,
                        minDate,
                        maxDate,
                        customDates,
                    );
                    const isHighlighted = isDayHighlighted(
                        cell.day,
                        viewYear,
                        viewMonth,
                        customDates,
                    );
                    const dayLabel = getDayLabel(
                        cell.day,
                        viewYear,
                        viewMonth,
                        customDates,
                    );

                    return (
                        <button
                            key={`current-${cell.day}`}
                            type="button"
                            disabled={isDisabled}
                            onClick={() =>
                                handleSelectDay(
                                    cell.day,
                                    viewYear,
                                    viewMonth,
                                    onChange,
                                    setOpen,
                                )
                            }
                            title={dayLabel}
                            className={`${dayButtonBase} ${
                                isSelected
                                    ? dayActive
                                    : isDisabled
                                      ? dayDisabled
                                      : isHighlighted
                                        ? dayHighlight
                                        : isTodayCell
                                          ? dayToday
                                          : dayHover
                            }`}
                            aria-label={`${cell.day} ${MONTHS[viewMonth]} ${viewYear}${dayLabel ? ` — ${dayLabel}` : ""}`}
                            aria-pressed={isSelected}
                        >
                            {cell.day}
                        </button>
                    );
                })}
            </div>
        </>
    );
};

export default DatePickerGrid;
