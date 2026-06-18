export const sizeStyles = {
    sm: "px-2.5 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
} as const;

export const variantStyles = {
    primary:
        "bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white shadow-sm hover:shadow-md transition-shadow",
    secondary: "bg-gray-500 hover:bg-gray-600 text-white focus:ring-gray-400",
    danger: "bg-red-500 hover:bg-red-600 text-white focus:ring-red-400",
} as const;

export const baseButtonStyle =
    "font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer";
