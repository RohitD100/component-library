import React from "react";
import type { TableHeaderProps } from "./type";
import { tableStyles } from "./TablePaginationStyle";
import { SelectHeader } from "./SelectUser/SelectUser";

export function TableHeader<T>({
  columns,
  showSelect = false,
  allSelected = false,
  someSelected = false,
  onSelectAll,
}: TableHeaderProps<T>) {
  return (
    <thead>
      <tr className={tableStyles.theadRow}>
        {showSelect && (
          <SelectHeader
            checked={allSelected}
            indeterminate={someSelected && !allSelected}
            onChange={(checked) => onSelectAll?.(checked)}
          />
        )}

        {columns.map((col) => (
          <th
            key={String(col.key)}
            className={tableStyles.th}
          >
            <span className={tableStyles.thInner}>
              {col.label}
            </span>
          </th>
        ))}
      </tr>
    </thead>
  );
}