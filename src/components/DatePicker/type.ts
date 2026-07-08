import React from "react";

export type DateFormat = "DD/MM/YYYY" | "MM/DD/YYYY" | "YYYY-MM-DD";

export type CustomDate = {
    date: Date;
    label?: string;
    disabled?: boolean;
    highlight?: boolean;
};

export type DatePickerProps = {
    value?: Date;
    onChange?: (date: Date) => void;
    format?: DateFormat;
    placeholder?: string;
    disabled?: boolean;
    minDate?: Date;
    maxDate?: Date;
    customDates?: CustomDate[];
    yearRange?: number;
    className?: string;
    style?: React.CSSProperties;
};

export type DatePickerCalanderProps = {
    viewYear: number;
    viewMonth: number;
    value?: Date;
    today: Date;
    years: number[];
    minDate?: Date;
    maxDate?: Date;
    customDates: CustomDate[];
    onChange?: (date: Date) => void;
    setOpen: (val: boolean) => void;
    setViewMonth: (val: number) => void;
    setViewYear: (fn: (y: number) => number) => void;
};

export type DatePickerFooterProps = {
    today: Date;
    onChange?: (date: Date) => void;
    setViewYear: (val: number) => void;
    setViewMonth: (val: number) => void;
    setOpen: (val: boolean) => void;
};

export type DatePickerGridProps = {
    viewYear: number;
    viewMonth: number;
    value?: Date;
    today: Date;
    minDate?: Date;
    maxDate?: Date;
    customDates: CustomDate[];
    onChange?: (date: Date) => void;
    setOpen: (val: boolean) => void;
};

export type DatePickerHeaderProps = {
    viewMonth: number;
    viewYear: number;
    years: number[];
    setViewMonth: (val: number) => void;
    setViewYear: (fn: (y: number) => number) => void;
};

export type DatePickerInputProps = {
    value: string;
    placeholder: string;
    disabled: boolean;
    inputError: boolean;
    open: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus: () => void;
    onToggle: () => void;
};