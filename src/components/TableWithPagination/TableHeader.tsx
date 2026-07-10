import React from "react";
import type { TableHeaderProps, SortDirection } from "./type";
import { tableStyles } from "./TablePaginationStyle";
import { Icon } from "../Icon/Icon";
import { SelectHeader } from "./SelectUser/SelectUser";

// Show the right sort icon
function SortIndicator({ direction }: { direction: SortDirection }) {
  switch (direction) {
    case "asc":
      return <Icon icon="arrowUp" size="xs" label="Sorted ascending" />;
    case "desc":
      return <Icon icon="arrowDown" size="xs" label="Sorted descending" />;
    default:
      return (
        <Icon
          icon="chevronUpDown"
          size="xs"
          colorClass="text-gray-300"
          label="Sortable"
        />
      );
  }
}

// Decide the aria-sort value
function getAriaSort(direction: SortDirection): "ascending" | "descending" | "none" | undefined {
  if (direction === "asc") return "ascending";
  if (direction === "desc") return "descending";
  if (direction === "none") return "none";
  return undefined;
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
  return (
    <thead>
      <tr className={tableStyles.theadRow}>
        {/* Optional select-all checkbox */}
        {showSelect && (
          <SelectHeader
            checked={allSelected}
            indeterminate={someSelected && !allSelected}
            onChange={(checked) => onSelectAll?.(checked)}
          />
        )}

        {/* Render each column header */}
        {columns.map((col) => {
          const isSortable = col.sortable !== false;
          const isActive = sortConfig.key === col.key;
          const direction: SortDirection = isActive ? sortConfig.direction : "none";

          const classes = [
            tableStyles.th,
            isSortable ? tableStyles.thSortable : "",
            isActive && direction !== "none" ? tableStyles.thSortActive : "",
          ].filter(Boolean).join(" ");

          return (
            <th
              key={String(col.key)}
              onClick={isSortable ? () => onSort(col.key) : undefined}
              className={classes}
              aria-sort={isActive ? getAriaSort(direction) : undefined}
            >
              <span className={tableStyles.thInner}>
                {col.label}
                {isSortable && <SortIndicator direction={direction} />}
              </span>
            </th>
          );
        })}
      </tr>
    </thead>
  );
}
