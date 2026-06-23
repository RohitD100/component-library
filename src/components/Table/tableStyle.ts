export const tableWrapperStyle =
    "w-full overflow-x-auto rounded-xl border border-gray-200";

export const tableBaseStyle = "w-full text-left border-collapse";

export const theadStyle = "bg-gray-50 border-b border-gray-200";

export const thBaseStyle =
    "px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap";

export const tbodyStyle = "divide-y divide-gray-100";

export const sizeStyles = {
    sm: "px-3 py-2 text-xs",
    md: "px-4 py-3 text-sm",
    lg: "px-5 py-4 text-base",
} as const;

export const variantStyles = {
    default: "",
    striped: "even:bg-gray-50",
    bordered: "border border-gray-200",
} as const;

export const tdBaseStyle = "text-gray-700 whitespace-nowrap";

export const emptyStateStyle = "px-4 py-12 text-center text-sm text-gray-400";

export const trHoverStyle = "transition-colors duration-150 hover:bg-gray-50";
