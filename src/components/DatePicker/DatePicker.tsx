import React, { useState, useRef, useEffect } from "react";
import type { DatePickerProps, DateFormat } from "./type";
import {
    wrapperStyle,
    triggerStyle,
    placeholderStyle,
    calendarWrapperStyle,
    calendarHeaderStyle,
    calendarTitleStyle,
    navButtonStyle,
    weekGridStyle,
    weekLabelStyle,
    daysGridStyle,
    dayButtonBase,
    dayActive,
    dayToday,
    dayDisabled,
    dayOtherMonth,
    dayHover,
    footerStyle,
    todayButtonStyle,
} from "./datePickerStyle";

const WEEK_DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

function formatDate(date: Date, format: DateFormat): string {
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = String(date.getFullYear());

    switch (format) {
        case "DD/MM/YYYY":
            return `${dd}/${mm}/${yyyy}`;
        case "MM/DD/YYYY":
            return `${mm}/${dd}/${yyyy}`;
        case "YYYY-MM-DD":
            return `${yyyy}-${mm}-${dd}`;
        default:
            return `${dd}/${mm}/${yyyy}`;
    }
}

function isSameDay(a: Date, b: Date): boolean {
    return (
        a.getDate() === b.getDate() &&
        a.getMonth() === b.getMonth() &&
        a.getFullYear() === b.getFullYear()
    );
}

function isBeforeDay(a: Date, b: Date): boolean {
    const normalize = (d: Date) =>
        new Date(d.getFullYear(), d.getMonth(), d.getDate());
    return normalize(a) < normalize(b);
}

function isAfterDay(a: Date, b: Date): boolean {
    const normalize = (d: Date) =>
        new Date(d.getFullYear(), d.getMonth(), d.getDate());
    return normalize(a) > normalize(b);
}

function getDaysInMonth(year: number, month: number): number {
    return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number): number {
    return new Date(year, month, 1).getDay();
}

const DatePicker = ({
    value,
    onChange,
    format = "DD/MM/YYYY",
    placeholder = "Select a date...",
    disabled = false,
    minDate,
    maxDate,
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
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (
                containerRef.current &&
                !containerRef.current.contains(e.target as Node)
            ) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    function handleKeyDown(e: React.KeyboardEvent) {
        if (e.key === "Escape") setOpen(false);
    }

    function prevMonth() {
        if (viewMonth === 0) {
            setViewMonth(11);
            setViewYear((y) => y - 1);
        } else {
            setViewMonth((m) => m - 1);
        }
    }

    function nextMonth() {
        if (viewMonth === 11) {
            setViewMonth(0);
            setViewYear((y) => y + 1);
        } else {
            setViewMonth((m) => m + 1);
        }
    }

    function handleSelectDay(day: number) {
        const selected = new Date(viewYear, viewMonth, day);
        onChange?.(selected);
        setOpen(false);
    }

    function handleToday() {
        setViewYear(today.getFullYear());
        setViewMonth(today.getMonth());
        onChange?.(today);
        setOpen(false);
    }

    function isDayDisabled(day: number): boolean {
        const date = new Date(viewYear, viewMonth, day);
        if (minDate && isBeforeDay(date, minDate)) return true;
        if (maxDate && isAfterDay(date, maxDate)) return true;
        return false;
    }

    const daysInMonth = getDaysInMonth(viewYear, viewMonth);
    const firstDay = getFirstDayOfMonth(viewYear, viewMonth);
    const daysInPrevMonth = getDaysInMonth(
        viewMonth === 0 ? viewYear - 1 : viewYear,
        viewMonth === 0 ? 11 : viewMonth - 1,
    );

    const cells: { day: number; type: "prev" | "current" | "next" }[] = [];

    for (let i = firstDay - 1; i >= 0; i--) {
        cells.push({ day: daysInPrevMonth - i, type: "prev" });
    }
    for (let d = 1; d <= daysInMonth; d++) {
        cells.push({ day: d, type: "current" });
    }
    let next = 1;
    while (cells.length % 7 !== 0) {
        cells.push({ day: next++, type: "next" });
    }

    return (
        <div
            ref={containerRef}
            className={`${wrapperStyle} ${className}`}
            style={style}
            onKeyDown={handleKeyDown}
        >
            <button
                type="button"
                disabled={disabled}
                onClick={() => setOpen((prev) => !prev)}
                className={triggerStyle}
                aria-haspopup="dialog"
                aria-expanded={open}
            >
                <span className={!value ? placeholderStyle : ""}>
                    {value ? formatDate(value, format) : placeholder}
                </span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-4 w-4 shrink-0 text-gray-400"
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

            {open && (
                <div
                    className={calendarWrapperStyle}
                    role="dialog"
                    aria-label="Date picker"
                >
                    <div className={calendarHeaderStyle}>
                        <button
                            type="button"
                            onClick={prevMonth}
                            className={navButtonStyle}
                            aria-label="Previous month"
                        >
                            ‹
                        </button>

                        <span className={calendarTitleStyle}>
                            {MONTHS[viewMonth]} {viewYear}
                        </span>

                        <button
                            type="button"
                            onClick={nextMonth}
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
                            const isDisabled = isDayDisabled(cell.day);

                            return (
                                <button
                                    key={`current-${cell.day}`}
                                    type="button"
                                    disabled={isDisabled}
                                    onClick={() =>
                                        !isDisabled && handleSelectDay(cell.day)
                                    }
                                    className={`${dayButtonBase} ${
                                        isSelected
                                            ? dayActive
                                            : isDisabled
                                              ? dayDisabled
                                              : isTodayCell
                                                ? dayToday
                                                : dayHover
                                    }`}
                                    aria-label={`${cell.day} ${MONTHS[viewMonth]} ${viewYear}`}
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
                            onClick={handleToday}
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
