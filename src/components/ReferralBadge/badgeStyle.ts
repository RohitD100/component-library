export const sizeStyles = {
    sm: "px-2 py-1 text-xs gap-1.5",
    md: "px-3 py-1.5 text-sm gap-2",
    lg: "px-4 py-2 text-base gap-2.5",
} as const;

export const variantStyles = {
    default: "bg-amber-500/20 border border-amber-500/30 text-amber-300",
    active: "bg-green-500/20 border border-green-500/30 text-green-300",
    reward: "bg-purple-500/20 border border-purple-500/30 text-purple-300",
    expired: "bg-gray-500/20 border border-gray-500/30 text-gray-400",
} as const;

export const iconStyles = {
    default: "🎁",
    active: "🔗",
    reward: "⭐",
    expired: "⏰",
} as const;

export const baseBadgeStyle =
    "inline-flex items-center rounded-full mt-3 transition-all duration-200";
