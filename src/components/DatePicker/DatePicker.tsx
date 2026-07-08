import React, { useState, useRef, useEffect } from "react";
import type { DatePickerProps } from "./type";
import { wrapperStyle } from "./datePickerStyle";
import {
    formatDate,
    parseDate,
    generateYearRange,
    handleKeyDown,
} from "./datePickerUtils";
import DatePickerInput from "./DatePickerInput";
import DatePickerCalendar from "./DatePickerCalendar";

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
            <DatePickerInput
                value={inputVal}
                placeholder={placeholder}
                disabled={disabled}
                inputError={inputError}
                open={open}
                onChange={handleInputChange}
                onFocus={() => setOpen(true)}
                onToggle={() => setOpen((prev) => !prev)}
            />

            {inputError && (
                <p id="date-input-error" className="mt-1 text-xs text-red-500">
                    Invalid date. Use format: {format}
                </p>
            )}

            {open && (
                <DatePickerCalendar
                    viewYear={viewYear}
                    viewMonth={viewMonth}
                    value={value}
                    today={today}
                    years={years}
                    minDate={minDate}
                    maxDate={maxDate}
                    customDates={customDates}
                    onChange={onChange}
                    setOpen={setOpen}
                    setViewMonth={setViewMonth}
                    setViewYear={setViewYear}
                />
            )}
        </div>
    );
};

export default DatePicker;
