import type { ReactNode } from "react";

export type ValidationState = "default" | "error" | "success";

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
  /** Flat list of options, or groups of options */
  options: SelectData;

  /** Selected value(s) — string for single select, string[] for multiSelect */
  value?: string | string[];

  /** Fires with the new value whenever selection changes */
  onChange: (value: string | string[]) => void;

  /** Behavior */
  multiSelect?: boolean;
  clearable?: boolean;
  disabled?: boolean;

  /** Content */
  placeholder?: string;
  label?: string;
  helperText?: string;

  /** Validation */
  validationState?: ValidationState;

  /** Multi-select tag display */
  maxVisibleTags?: number;

  /** DOM */
  id?: string;
  name?: string;
  className?: string;
}
