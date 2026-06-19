export const sizeStyles = {
    sm: "w-48",
    md: "w-72",
    lg: "w-96",
} as const;

export const baseCardStyle =
    "bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-200 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10";

export const imageStyle = "w-full h-48 object-cover";

export const contentStyle = "p-5";

export const titleStyle = "text-white font-semibold text-lg mb-2 leading-tight";

export const descriptionStyle = "text-gray-400 text-sm leading-relaxed";

export const badgeStyle =
    "inline-block px-2.5 py-0.5 rounded-full text-xs font-medium";

export const badgeVariants = {
    default: "bg-purple-500/20 text-purple-300 border border-purple-500/30",
    success: "bg-green-500/20 text-green-300 border border-green-500/30",
    warning: "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30",
    danger: "bg-red-500/20 text-red-300 border border-red-500/30",
} as const;

export const footerStyle = "px-5 pb-5 flex items-center justify-between gap-3";

export const actionButtonStyle =
    "flex-1 py-2 px-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-medium rounded-xl hover:opacity-90 transition-opacity text-center";

export const secondaryButtonStyle =
    "flex-1 py-2 px-4 bg-white/5 border border-white/10 text-gray-300 text-sm font-medium rounded-xl hover:bg-white/10 transition-colors text-center";
