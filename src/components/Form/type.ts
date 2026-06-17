import React from "react";

export type InputFieldProps = {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    onRightIconClick?: () => void;
    error?: string;
    className?: string;
};

export type FormProps = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    children?: React.ReactNode;
    size?: "sm" | "md" | "lg";
    inputProps?: InputFieldProps[];
    title?: string;
    className?: string;
    style?: React.CSSProperties;
};
