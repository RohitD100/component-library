export const sizeStyles = {
    sm: "px-2.5 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
} as const;

export const variantStyles = {
    primary:
        "bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white shadow-sm hover:shadow-md transition-shadow",
    secondary:
        "bg-gray-500 hover:bg-gray-600 text-white focus:ring-2 focus:ring-offset-2 focus:ring-gray-400",
    danger:
        "bg-red-500 hover:bg-red-600 text-white focus:ring-2 focus:ring-offset-2 focus:ring-red-400",

    // Pagination nav 
    ghost:
        "bg-transparent text-gray-600 hover:bg-violet-100 focus:outline-none",

    // Active page number in pagination 
    ghostActive:
        "bg-violet-600 text-white font-semibold hover:bg-violet-700 focus:outline-none",
} as const;

export const baseButtonStyle =
    "font-medium rounded-xl transition-all duration-200 focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer";