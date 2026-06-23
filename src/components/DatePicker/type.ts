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
