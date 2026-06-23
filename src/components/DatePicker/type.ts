export type DateFormat = "DD/MM/YYYY" | "MM/DD/YYYY" | "YYYY-MM-DD";

export type DatePickerProps = {
    value?: Date;
    onChange?: (date: Date) => void;
    format?: DateFormat;
    placeholder?: string;
    disabled?: boolean;
    minDate?: Date;
    maxDate?: Date;
    className?: string;
    style?: React.CSSProperties;
};
