import React from "react";

export type InputProps = {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type FormProps = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    children: React.ReactNode;
    size?: "sm" | "md" | "lg";
    inputProps?: InputProps[];
    title?: string;
    style?: React.CSSProperties;
};
