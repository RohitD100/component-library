import React from "react";
import type { SelectHeaderProps, SelectCellProps } from "./types";
import { selectUserStyles } from "./selectUserStyles";

export function SelectHeader({ checked, indeterminate = false, onChange }: SelectHeaderProps) {
  const ref = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);

  return (
    <th className={selectUserStyles.th}>
      <input
        ref={ref}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className={selectUserStyles.checkbox}
        aria-label="Select all rows"
      />
    </th>
  );
}

export function SelectCell({ rowKey, checked, onChange, label }: SelectCellProps) {
  return (
    <td className={selectUserStyles.td}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(rowKey, e.target.checked)}
        className={selectUserStyles.checkbox}
        aria-label={label ?? "Select row"}
      />
    </td>
  );
}