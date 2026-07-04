import React from "react";
import type { Column } from "./type";
import { tableStyles } from "./TablePaginationStyle";
import { Highlight } from "./Highlight";
import { useHighlight } from "./HighlightContext";

interface TableRowProps<T> {
  row: T;
  columns: Column<T>[];
  rowKey: string;
  showSelect?: boolean;
  selected?: boolean;
  onSelectChange?: (key: string, checked: boolean) => void;
}

export function TableRow<T>({
  row,
  columns,
  rowKey,
  showSelect = false,
  selected = false,
  onSelectChange,
}: TableRowProps<T>) {
  const { highlight } = useHighlight();

  return (
    <tr className={tableStyles.tr}>
      {showSelect && (
        <td className={tableStyles.selectTd}>
          <input
            type="checkbox"
            checked={selected}
            onChange={(e) => onSelectChange?.(rowKey, e.target.checked)}
            className={tableStyles.checkbox}
            aria-label="Select row"
          />
        </td>
      )}

      {columns.map((col) => (
        <td key={String(col.key)} className={tableStyles.td}>
          {col.render
            ? col.render(row)  // custom renderers handle their own markup
            : highlight
            ? <Highlight text={String(row[col.key] ?? "")} />
            : (row[col.key] as React.ReactNode)
          }
        </td>
      ))}
    </tr>
  );
}