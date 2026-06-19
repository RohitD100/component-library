export const sizeStyles = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-2.5 text-sm",
    lg: "px-4 py-3 text-base",
} as const;

export const variantStyles = {
    dark: "bg-[#1a1a1a] text-white border-2 border-[#444444] hover:border-purple-400/60 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20",
    light: "bg-white text-gray-900 border-2 border-gray-300 hover:border-purple-400/60 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20",
} as const;

export const baseInputStyle =
    "w-full rounded-md outline-none transition-all duration-200 placeholder-gray-500 box-border";

export const wrapperStyle = "relative flex items-center w-full";

export const iconStyle = "absolute text-gray-400 pointer-events-none";
