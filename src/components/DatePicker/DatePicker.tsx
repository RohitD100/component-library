import React, { useState, useRef, useEffect } from "react";
import type { DatePickerProps } from "./type";
import {
    wrapperStyle,
    triggerWrapperStyle,
    inputStyle,
    inputErrorStyle,
    calendarIconButtonStyle,
    calendarWrapperStyle,
    calendarHeaderStyle,
    navButtonStyle,
    quickNavSelectStyle,
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
    footerStyle,
    todayButtonStyle,
    clearButtonStyle,
} from "./datePickerStyle";
import {
    WEEK_DAYS,
    MONTHS,
    formatDate,
    parseDate,
    isSameDay,
    buildCalendarCells,
    generateYearRange,
    handleKeyDown,
    prevMonth,
    nextMonth,
    handleSelectDay,
    handleToday,
    handleClear,
    isDayDisabled,
    isDayHighlighted,
    getDayLabel,
} from "./datePickerUtils";

const DatePicker = ({
    value,
    onChange,
    format = "DD/MM/YYYY",
    placeholder = "Select a date...",
    disabled = false,
    minDate,
    maxDate,
    customDates = [],
    yearRange = 10,
    className = "",
    style = {},
}: DatePickerProps) => {
    const today = new Date();
    const [open, setOpen] = useState(false);
    const [viewYear, setViewYear] = useState(
        value ? value.getFullYear() : today.getFullYear(),
    );
    const [viewMonth, setViewMonth] = useState(
        value ? value.getMonth() : today.getMonth(),
    );
    const [inputVal, setInputVal] = useState(
        value ? formatDate(value, format) : "",
    );
    const [inputError, setInputError] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);

    const years = generateYearRange(today.getFullYear(), yearRange);
    const cells = buildCalendarCells(viewYear, viewMonth);

    useEffect(() => {
        setInputVal(value ? formatDate(value, format) : "");
        setInputError(false);
    }, [value, format]);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (
                containerRef.current &&
                !containerRef.current.contains(e.target as Node)
            ) {
                setOpen(false);
                if (inputError) {
                    setInputVal(value ? formatDate(value, format) : "");
                    setInputError(false);
                }
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [inputError, value, format]);

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const raw = e.target.value;
        setInputVal(raw);

        if (raw === "") {
            onChange?.(undefined as any);
            setInputError(false);
            return;
        }

        const parsed = parseDate(raw, format);
        if (parsed) {
            setInputError(false);
            setViewYear(parsed.getFullYear());
            setViewMonth(parsed.getMonth());
            onChange?.(parsed);
        } else {
            setInputError(true);
        }
    }

    return (
        <div
            ref={containerRef}
            className={`${wrapperStyle} ${className}`}
            style={style}
            onKeyDown={(e) => handleKeyDown(e, setOpen)}
        >
            <div className={triggerWrapperStyle}>
                <input
                    type="text"
                    disabled={disabled}
                    value={inputVal}
                    placeholder={placeholder}
                    onChange={handleInputChange}
                    onFocus={() => setOpen(true)}
                    className={`${inputStyle} ${inputError ? inputErrorStyle : ""}`}
                    aria-label="Date input"
                    aria-invalid={inputError}
                    aria-describedby={
                        inputError ? "date-input-error" : undefined
                    }
                />
                <button
                    type="button"
                    disabled={disabled}
                    onClick={() => setOpen((prev) => !prev)}
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
                        <rect
                            x="3"
                            y="4"
                            width="18"
                            height="18"
                            rx="2"
                            ry="2"
                        />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                </button>
            </div>

            {inputError && (
                <p id="date-input-error" className="mt-1 text-xs text-red-500">
                    Invalid date. Use format: {format}
                </p>
            )}

            {open && (
                <div
                    className={calendarWrapperStyle}
                    role="dialog"
                    aria-label="Date picker"
                >
                    <div className={calendarHeaderStyle}>
                        <button
                            type="button"
                            onClick={() =>
                                prevMonth(viewMonth, setViewMonth, setViewYear)
                            }
                            className={navButtonStyle}
                            aria-label="Previous month"
                        >
                            ‹
                        </button>

                        <div className="flex items-center gap-1">
                            <select
                                value={viewMonth}
                                onChange={(e) =>
                                    setViewMonth(Number(e.target.value))
                                }
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
                                onChange={(e) =>
                                    setViewYear(Number(e.target.value))
                                }
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
                            onClick={() =>
                                nextMonth(viewMonth, setViewMonth, setViewYear)
                            }
                            className={navButtonStyle}
                            aria-label="Next month"
                        >
                            ›
                        </button>
                    </div>

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

                            const cellDate = new Date(
                                viewYear,
                                viewMonth,
                                cell.day,
                            );
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
                </div>
            )}
        </div>
    );
};

export default DatePicker;
