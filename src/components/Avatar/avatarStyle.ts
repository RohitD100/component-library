export const sizeStyles = {
    sm: "w-8 h-8 text-xs",
    md: "w-11 h-11 text-sm",
    lg: "w-16 h-16 text-base",
    xl: "w-20 h-20 text-lg",
} as const;

export const shapeStyles = {
    circle: "rounded-full",
    square: "rounded-lg",
} as const;

export const statusStyles = {
    online: "bg-green-500",
    offline: "bg-gray-400",
    busy: "bg-red-500",
} as const;

export const statusSizeStyles = {
    sm: "w-2 h-2",
    md: "w-2.5 h-2.5",
    lg: "w-3 h-3",
    xl: "w-3.5 h-3.5",
} as const;

export const baseAvatarStyle =
    "relative inline-flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-purple-500 to-cyan-500 text-white font-semibold select-none";

export const baseStatusStyle =
    "absolute bottom-0 right-0 rounded-full ring-2 ring-white";
