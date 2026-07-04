import React from "react";
import { tableStyles } from "./TablePaginationStyle";

// Header checkbox
interface SelectHeaderProps {
  checked: boolean;
  indeterminate?: boolean;
  onChange: (checked: boolean) => void;
}

export function SelectHeader({ checked, indeterminate = false, onChange }: SelectHeaderProps) {
  const ref = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (ref.current) {
      ref.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <th className={tableStyles.selectTh} aria-label="Select all">
      <input
        ref={ref}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className={tableStyles.checkbox}
        aria-label="Select all rows"
      />
    </th>
  );
}

// Row checkbox
interface SelectCellProps {
  rowKey: string;
  checked: boolean;
  onChange: (key: string, checked: boolean) => void;
}

export function SelectCell({ rowKey, checked, onChange }: SelectCellProps) {
  return (
    <td className={tableStyles.selectTd}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(rowKey, e.target.checked)}
        className={tableStyles.checkbox}
        aria-label="Select row"
      />
    </td>
  );
}