import type { DateFormat, CustomDate } from "./type";

export const WEEK_DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export const MONTHS = [
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

export function formatDate(date: Date, format: DateFormat): string {
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

export function parseDate(raw: string, format: DateFormat): Date | null {
    const parts = raw.split(/[-\/]/).map(Number);
    if (parts.length !== 3 || parts.some(isNaN)) return null;

    let d: Date;
    if (format === "DD/MM/YYYY") {
        d = new Date(parts[2], parts[1] - 1, parts[0]);
    } else if (format === "MM/DD/YYYY") {
        d = new Date(parts[2], parts[0] - 1, parts[1]);
    } else {
        // YYYY-MM-DD
        d = new Date(parts[0], parts[1] - 1, parts[2]);
    }

    return isNaN(d.getTime()) ? null : d;
}

export function isSameDay(a: Date, b: Date): boolean {
    return (
        a.getDate() === b.getDate() &&
        a.getMonth() === b.getMonth() &&
        a.getFullYear() === b.getFullYear()
    );
}

export function isBeforeDay(a: Date, b: Date): boolean {
    const normalize = (d: Date) =>
        new Date(d.getFullYear(), d.getMonth(), d.getDate());
    return normalize(a) < normalize(b);
}

export function isAfterDay(a: Date, b: Date): boolean {
    const normalize = (d: Date) =>
        new Date(d.getFullYear(), d.getMonth(), d.getDate());
    return normalize(a) > normalize(b);
}

export function getDaysInMonth(year: number, month: number): number {
    return new Date(year, month + 1, 0).getDate();
}

export function getFirstDayOfMonth(year: number, month: number): number {
    return new Date(year, month, 1).getDay();
}

export function buildCalendarCells(
    viewYear: number,
    viewMonth: number,
): { day: number; type: "prev" | "current" | "next" }[] {
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

    return cells;
}

export function generateYearRange(
    centerYear: number,
    range: number = 10,
): number[] {
    const start = centerYear - range;
    const end = centerYear + range;
    const years: number[] = [];
    for (let y = start; y <= end; y++) {
        years.push(y);
    }
    return years;
}

export function handleKeyDown(
    e: React.KeyboardEvent,
    setOpen: (val: boolean) => void,
): void {
    if (e.key === "Escape") setOpen(false);
}

export function prevMonth(
    viewMonth: number,
    setViewMonth: (val: number) => void,
    setViewYear: (fn: (y: number) => number) => void,
): void {
    if (viewMonth === 0) {
        setViewMonth(11);
        setViewYear((y) => y - 1);
    } else {
        setViewMonth(viewMonth - 1);
    }
}

export function nextMonth(
    viewMonth: number,
    setViewMonth: (val: number) => void,
    setViewYear: (fn: (y: number) => number) => void,
): void {
    if (viewMonth === 11) {
        setViewMonth(0);
        setViewYear((y) => y + 1);
    } else {
        setViewMonth(viewMonth + 1);
    }
}

export function handleSelectDay(
    day: number,
    viewYear: number,
    viewMonth: number,
    onChange: ((date: Date) => void) | undefined,
    setOpen: (val: boolean) => void,
): void {
    const selected = new Date(viewYear, viewMonth, day);
    onChange?.(selected);
    setOpen(false);
}

export function handleToday(
    today: Date,
    onChange: ((date: Date) => void) | undefined,
    setViewYear: (val: number) => void,
    setViewMonth: (val: number) => void,
    setOpen: (val: boolean) => void,
): void {
    setViewYear(today.getFullYear());
    setViewMonth(today.getMonth());
    onChange?.(today);
    setOpen(false);
}

export function handleClear(
    onChange: ((date: Date) => void) | undefined,
    setOpen: (val: boolean) => void,
): void {
    onChange?.(undefined as any);
    setOpen(false);
}

export function isDayDisabled(
    day: number,
    viewYear: number,
    viewMonth: number,
    minDate: Date | undefined,
    maxDate: Date | undefined,
    customDates: CustomDate[],
): boolean {
    const date = new Date(viewYear, viewMonth, day);
    if (minDate && isBeforeDay(date, minDate)) return true;
    if (maxDate && isAfterDay(date, maxDate)) return true;
    const custom = customDates.find((c) => isSameDay(c.date, date));
    if (custom?.disabled) return true;
    return false;
}

export function isDayHighlighted(
    day: number,
    viewYear: number,
    viewMonth: number,
    customDates: CustomDate[],
): boolean {
    const date = new Date(viewYear, viewMonth, day);
    const custom = customDates.find((c) => isSameDay(c.date, date));
    return !!custom?.highlight;
}

export function getDayLabel(
    day: number,
    viewYear: number,
    viewMonth: number,
    customDates: CustomDate[],
): string | undefined {
    const date = new Date(viewYear, viewMonth, day);
    const custom = customDates.find((c) => isSameDay(c.date, date));
    return custom?.label;
}
