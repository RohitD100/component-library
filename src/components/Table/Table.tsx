import type { TableProps } from "./type";
import {
    tableWrapperStyle,
    tableBaseStyle,
    theadStyle,
    thBaseStyle,
    tbodyStyle,
    sizeStyles,
    variantStyles,
    tdBaseStyle,
    emptyStateStyle,
    trHoverStyle,
} from "./tableStyle";

function Table<T>({
    columns,
    data,
    keyExtractor,
    variant = "default",
    size = "md",
    emptyMessage = "No data available.",
    className = "",
    style = {},
}: TableProps<T>) {
    return (
        <div className={`${tableWrapperStyle} ${className}`} style={style}>
            <table className={tableBaseStyle}>
                <thead className={theadStyle}>
                    <tr>
                        {columns.map((col) => (
                            <th
                                key={col.key}
                                className={thBaseStyle}
                                style={col.width ? { width: col.width } : {}}
                            >
                                {col.header}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody className={tbodyStyle}>
                    {data.length === 0 ? (
                        <tr>
                            <td
                                colSpan={columns.length}
                                className={emptyStateStyle}
                            >
                                {emptyMessage}
                            </td>
                        </tr>
                    ) : (
                        data.map((row) => (
                            <tr
                                key={keyExtractor(row)}
                                className={`${trHoverStyle} ${variantStyles[variant]}`}
                            >
                                {columns.map((col) => (
                                    <td
                                        key={col.key}
                                        className={`${tdBaseStyle} ${sizeStyles[size]}`}
                                    >
                                        {col.render
                                            ? col.render(row)
                                            : String(
                                                  (row as any)[col.key] ?? "",
                                              )}
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
