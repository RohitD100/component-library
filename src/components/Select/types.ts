import type { ReactNode } from "react";

export type ValidationState = "default" | "error" | "success";

export type Theme = "light" | "dark";

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

export type SelectData = SelectOption[] | SelectOptionGroup[];

export interface SelectProps {
  // Data
  options: SelectData;

  // Selected value
  value?: string | string[];

  // Callback
  onChange: (value: string | string[]) => void;

  // Features
  multiSelect?: boolean;
  clearable?: boolean;
  disabled?: boolean;

  // UI
  placeholder?: string;
  validationState?: ValidationState;
  theme?: Theme;
  className?: string;
}
