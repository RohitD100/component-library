import React from "react";
import type { Column, SortConfig, SortDirection } from "./type";
import { tableStyles } from "./TablePaginationStyle";

function SortIcon({ direction }: { direction: SortDirection }) {
  if (direction === "asc")
    return <span className={tableStyles.sortIconAsc} aria-label="Sorted ascending">↑</span>;
  if (direction === "desc")
    return <span className={tableStyles.sortIconDesc} aria-label="Sorted descending">↓</span>;
  return <span className={tableStyles.sortIconNone} aria-label="Sortable">⇅</span>;
}

interface TableHeaderProps<T> {
  columns: Column<T>[];
  sortConfig: SortConfig<T>;
  onSort: (key: keyof T) => void;
  showSelect?: boolean;
  allSelected?: boolean;
  someSelected?: boolean;
  onSelectAll?: (checked: boolean) => void;
}

export function TableHeader<T>({
  columns,
  sortConfig,
  onSort,
  showSelect = false,
  allSelected = false,
  someSelected = false,
  onSelectAll,
}: TableHeaderProps<T>) {
  const selectRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (selectRef.current) {
      selectRef.current.indeterminate = someSelected && !allSelected;
    }
  }, [someSelected, allSelected]);

  return (
    <thead>
      <tr className={tableStyles.theadRow}>
        {showSelect && (
          <th className={tableStyles.selectTh} aria-label="Select all">
            <input
              ref={selectRef}
              type="checkbox"
              checked={allSelected}
              onChange={(e) => onSelectAll?.(e.target.checked)}
              className={tableStyles.checkbox}
              aria-label="Select all rows"
            />
          </th>
        )}

        {columns.map((col) => {
          const isSortable = col.sortable !== false;
          const isActive = sortConfig.key === col.key;
          const direction: SortDirection = isActive ? sortConfig.direction : "none";

          return (
            <th
              key={String(col.key)}
              onClick={isSortable ? () => onSort(col.key) : undefined}
              className={[
                tableStyles.th,
                isSortable ? tableStyles.thSortable : "",
                isActive && direction !== "none" ? tableStyles.thSortActive : "",
              ].filter(Boolean).join(" ")}
              aria-sort={
                isActive
                  ? direction === "asc" ? "ascending"
                  : direction === "desc" ? "descending"
                  : "none"
                  : undefined
              }
            >
              <span className={tableStyles.thInner}>
                {col.label}
                {isSortable && <SortIcon direction={direction} />}
              </span>
            </th>
          );
        })}
      </tr>
    </thead>
  );
}