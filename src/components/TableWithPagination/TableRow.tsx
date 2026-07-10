import React from "react";
import type { TableRowProps } from "./type";
import { tableStyles } from "./TablePaginationStyle";
import { Highlight } from "./Highlight";
import { SelectCell } from "./SelectUser/SelectUser";

// A single row in the table
export function TableRow<T>({
  row,
  columns,
  rowKey,
  showSelect = false,
  selected = false,
  onSelectChange,
  query = "",
  highlight = false,
}: TableRowProps<T>) {
  // Helper: decide how to show a cell value
  const renderCell = (col: typeof columns[number]) => {
    const value = row[col.key];

    // 1. Custom renderer wins
    if (col.render) return col.render(row);

    // 2. Highlight search matches
    if (highlight) return <Highlight text={String(value ?? "")} query={query} />;

    // 3. Handle empty values
    if (value == null) return "";

    // 4. Show strings or numbers directly
    if (typeof value === "string" || typeof value === "number") return value;

    // 5. Fallback: convert to string
    return String(value);
  };

  return (
    <tr className={tableStyles.tr}>
      {/* Optional checkbox for selecting this row */}
      {showSelect && (
        <SelectCell
          rowKey={rowKey}
          checked={selected}
          onChange={(key, checked) => onSelectChange?.(key, checked)}
        />
      )}

      {/* Render each column cell */}
      {columns.map((col) => (
        <td key={String(col.key)} className={tableStyles.td}>
          {renderCell(col)}
        </td>
      ))}
    </tr>
  );
}
