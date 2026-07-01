import type { TableProps } from "./type";
import {
  tableWrapperStyle,
  tableWrapperDarkStyle,
  tableBaseStyle,
  tableBaseDarkStyle,
  theadStyle,
  theadDarkStyle,
  thBaseStyle,
  thDarkStyle,
  tbodyStyle,
  tbodyDarkStyle,
  sizeStyles,
  variantStyles,
  variantDarkStyles,
  tdBaseStyle,
  tdDarkStyle,
  emptyStateStyle,
  emptyStateDarkStyle,
  trHoverStyle,
  trHoverDarkStyle,
} from "./tableStyle";

function Table<T>({
  columns,
  data,
  keyExtractor,
  variant = "default",
  size = "md",
  theme = "light",
  emptyMessage = "No data available.",
  className = "",
  style = {},
}: TableProps<T>) {
  const isDark = theme === "dark";

  return (
    <div
      className={`${isDark ? tableWrapperDarkStyle : tableWrapperStyle} ${className}`}
      style={style}
    >
      <table className={isDark ? tableBaseDarkStyle : tableBaseStyle}>
        <thead className={isDark ? theadDarkStyle : theadStyle}>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className={`${
                  isDark ? thDarkStyle : thBaseStyle
                } ${sizeStyles[size]}`}
                style={col.width ? { width: col.width } : {}}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className={isDark ? tbodyDarkStyle : tbodyStyle}>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className={isDark ? emptyStateDarkStyle : emptyStateStyle}
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row) => (
              <tr
                key={keyExtractor(row)}
                className={`${isDark ? trHoverDarkStyle : trHoverStyle} ${
                  isDark ? variantDarkStyles[variant] : variantStyles[variant]
                }`}
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={`${
                      isDark ? tdDarkStyle : tdBaseStyle
                    } ${sizeStyles[size]}`}
                  >
                    {col.render
                      ? col.render(row)
                      : String((row as any)[col.key] ?? "")}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;