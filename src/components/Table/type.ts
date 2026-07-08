import React from "react";

export type TableColumn<T> = {
    key: string;
    header: string;
    render?: (row: T) => React.ReactNode;
    width?: string;
};

export type TableProps<T> = {
    columns: TableColumn<T>[];
    data: T[];
    keyExtractor: (row: T) => string;
    variant?: "default" | "striped" | "bordered";
    size?: "sm" | "md" | "lg";
    theme?: "light" | "dark";
    emptyMessage?: string;
    className?: string;
    style?: React.CSSProperties;
};