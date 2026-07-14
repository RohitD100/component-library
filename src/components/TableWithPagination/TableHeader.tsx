
import type { TableHeaderProps } from "./type";
import {
  theadRowStyle,
  thBaseStyle,
  sizeStyles,
  thInnerStyle,
} from "./TablePaginationStyle";
import { SelectHeader } from "./SelectUser/SelectUser";

// ── Table Header Row ─────────────────────────────────────
export function TableHeader<T>({
  columns,
  showSelect = false,
  allSelected = false,
  someSelected = false,
  onSelectAll,
}: TableHeaderProps<T>) {
  return (
    <thead>
      <tr className={theadRowStyle}>
        {/* Optional checkbox for selecting all rows */}
        {showSelect && (
          <SelectHeader
            checked={allSelected}
            indeterminate={someSelected && !allSelected}
            onChange={(checked) => onSelectAll?.(checked)}
          />
        )}

        {/* Column headers */}
        {columns.map((col) => (
          <th
            key={String(col.key)}
            className={`${thBaseStyle} ${sizeStyles.md}`}
          >
            <span className={thInnerStyle}>
              {col.label}
            </span>
          </th>
        ))}
      </tr>
    </thead>
  );
}