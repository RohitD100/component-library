export const sizeStyles = {
    sm: "w-48",
    md: "w-72",
    lg: "w-96",
} as const;

export const cardVariants = {
    dark: "bg-gray-800 border border-gray-700 text-white",
    light: "bg-white border border-gray-200 text-gray-900",
} as const;

export const baseCardStyle =
    "rounded-2xl overflow-hidden transition-all duration-200 hover:shadow-lg";

export const imageStyle = "w-full h-48 object-cover";

export const contentStyle = "p-5";

export const titleVariants = {
    dark: "text-white font-semibold text-lg mb-2 leading-tight",
    light: "text-gray-900 font-semibold text-lg mb-2 leading-tight",
} as const;

export const descriptionVariants = {
    dark: "text-gray-300 text-sm leading-relaxed",
    light: "text-gray-500 text-sm leading-relaxed",
} as const;

export const badgeStyle =
    "inline-block px-2.5 py-0.5 rounded-full text-xs font-medium";

export const badgeVariants = {
    default: "bg-purple-500/20 text-purple-600 border border-purple-500/30",
    success: "bg-green-500/20 text-green-600 border border-green-500/30",
    warning: "bg-yellow-500/20 text-yellow-600 border border-yellow-500/30",
    danger: "bg-red-500/20 text-red-600 border border-red-500/30",
} as const;

export const footerStyle = "px-5 pb-5 flex items-center justify-between gap-3";

export const footerVariants = {
    dark: "border-t border-gray-700 mt-2",
    light: "border-t border-gray-100 mt-2",
} as const;

export const actionButtonStyle =
    "flex-1 py-2 px-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-medium rounded-xl hover:opacity-90 transition-opacity text-center cursor-pointer";

export const secondaryButtonVariants = {
    dark: "flex-1 py-2 px-4 bg-gray-700 border border-gray-600 text-gray-200 text-sm font-medium rounded-xl hover:bg-gray-600 transition-colors text-center cursor-pointer",
    light: "flex-1 py-2 px-4 bg-gray-100 border border-gray-200 text-gray-700 text-sm font-medium rounded-xl hover:bg-gray-200 transition-colors text-center cursor-pointer",
} as const;
