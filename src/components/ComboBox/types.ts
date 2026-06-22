export type ComboBoxOption = {
    label: string;
    value: string;
};

export type ComboBoxProps = {
    options: ComboBoxOption[];
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    styles?: React.CSSProperties;
};
