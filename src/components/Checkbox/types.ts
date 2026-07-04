import type { InputHTMLAttributes, ReactNode } from "react";

export type CheckboxSize = "sm" | "md" | "lg";

export interface CheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size" | "type"
> {
  label?: ReactNode;
  description?: string;
  error?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  size?: CheckboxSize;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  "aria-label"?: string;
  className?: string;
}
