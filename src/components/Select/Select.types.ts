
// Select.types.ts

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

  searchable?: boolean;

  clearable?: boolean;

  disabled?: boolean;

  validationState?: ValidationState;

  errorMessage?: string;

  successMessage?: string;

  theme?: "light" | "dark";

  className?: string;
}

export interface SelectOptionProps {
  option: SelectOption;
  selected: boolean;
  onSelect: (value: string) => void;
}

export interface SelectGroupProps {
  group: SelectOptionGroup;
  selectedValues: string[];
  onSelect: (value: string) => void;
}

export interface SelectSearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export interface SelectTagProps {
  label: string;
  value: string;
  onRemove: (value: string) => void;
}

