
import type { TableRowProps } from "./type";
import {
  trBaseStyle,
  tdBaseStyle,
  sizeVariantsCell,
} from "./TablePaginationStyle";
import { Highlight } from "./Highlight";
import { SelectCell } from "./SelectUser/SelectUser";

// ── Single Table Row ─────────────────────────────────────
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
  // ── Render cell content based on column config ─────────
  const renderCell = (col: typeof columns[number]) => {
    const value = row[col.key];

    // 1. Custom renderer has highest priority
    if (col.render) return col.render(row);

    // 2. Highlight search matches if enabled
    if (highlight) return <Highlight text={String(value ?? "")} query={query} />;

    // 3. Handle empty/null values
    if (value == null) return "";

    // 4. Show strings or numbers directly
    if (typeof value === "string" || typeof value === "number") return value;

    // 5. Fallback: convert any other type to string
    return String(value);
  };

  return (
    <tr className={trBaseStyle}>
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
        <td
          key={String(col.key)}
          className={`${tdBaseStyle} ${sizeVariantsCell.md}`}
        >
          {renderCell(col)}
        </td>
      ))}
    </tr>
  );
}