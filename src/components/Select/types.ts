import type { ReactNode } from "react";

export type ValidationState =
| "default"
| "error"
| "success";

export interface SelectOption {
label: string;
value: string;
disabled?: boolean;
icon?: ReactNode;
}

export interface SelectOptionGroup {
label: string;
options: SelectOption[];
}

export type SelectData =
| SelectOption[]
| SelectOptionGroup[];

export interface SelectProps {
options: SelectData;
value?: string | string[];
onChange: (
value: string | string[]
) => void;

multiSelect?: boolean;
placeholder?: string;
clearable?: boolean;
disabled?: boolean;
validationState?: ValidationState;
theme?: "light" | "dark";
className?: string;
}
