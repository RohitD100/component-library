export interface SelectHeaderProps {
  checked: boolean;
  indeterminate?: boolean;
  onChange: (checked: boolean) => void;
}

export interface SelectCellProps {
  rowKey: string;
  checked: boolean;
  onChange: (key: string, checked: boolean) => void;
  label?: string; // optional per-row label, e.g. "Select John Doe"
}