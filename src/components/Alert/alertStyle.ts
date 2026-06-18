export const sizeStyles = {
    sm: "text-xs w-52",
    md: "text-sm w-80",
    lg: "text-base w-[400px]",
} as const;

export const variantStyles = {
    success: "bg-green-50 border border-green-300 text-green-800",
    error: "bg-red-50 border border-red-300 text-red-800",
    warning: "bg-yellow-50 border border-yellow-300 text-yellow-800",
    info: "bg-blue-50 border border-blue-300 text-blue-800",
    yaracirclesuccess:
        "bg-white border border-gray-200 text-gray-800 shadow-sm",
    yaracirclefail: "bg-white border border-gray-200 text-gray-800 shadow-sm",
} as const;

export const iconStyles = {
    success: "✓",
    error: "✕",
    warning: "⚠",
    info: "ℹ",
    yaracirclesuccess: "✓",
    yaracirclefail: "✕",
} as const;

export const iconCircleStyles = {
    success: "bg-green-100 text-green-600",
    error: "bg-red-100 text-red-600",
    warning: "bg-yellow-100 text-yellow-600",
    info: "bg-blue-100 text-blue-600",
    yaracirclesuccess: "bg-green-500 text-white",
    yaracirclefail: "bg-red-500 text-white",
} as const;

export const baseAlertStyle =
    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200";

export const dismissButtonStyle =
    "flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 rounded";

export const iconWrapperStyle =
    "flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold flex-shrink-0";

export const contentWrapperStyle = "flex-1 min-w-0";

export const titleStyle = "font-semibold leading-tight";

export const messageStyle = "leading-tight";
