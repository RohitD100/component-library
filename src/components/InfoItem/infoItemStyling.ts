import type {
    InfoItemVariant,
    InfoItemSize,
    InfoItemOrientation,
} from "./types";

export const containerOrientation: Record<InfoItemOrientation, string> = {
    horizontal: "flex flex-row items-center justify-between gap-4",
    vertical: "flex flex-col gap-1",
};

export const wrapperOrientation: Record<InfoItemOrientation, string> = {
    vertical: "flex flex-col gap-0.5 min-w-0 flex-1",
    horizontal: "flex flex-col gap-0.5 min-w-0 flex-1",
};

export const containerVariant: Record<InfoItemVariant, string> = {
    default: "bg-white border border-gray-200 rounded-xl px-4 py-3",
    subtle: "bg-gray-50 rounded-xl px-4 py-3",
    highlight: "bg-purple-50 border border-purple-200 rounded-xl px-4 py-3",
};

export const labelSize: Record<InfoItemSize, string> = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
};

export const valueSize: Record<InfoItemSize, string> = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
};

export const labelVariant: Record<InfoItemVariant, string> = {
    default: "text-gray-500",
    subtle: "text-gray-400",
    highlight: "text-purple-500",
};

export const valueVariant: Record<InfoItemVariant, string> = {
    default: "text-gray-900",
    subtle: "text-gray-700",
    highlight: "text-purple-900",
};

export const labelBase = "font-medium tracking-wide uppercase";
export const valueBase = "font-semibold break-words";
export const iconBase = "shrink-0 text-gray-400";
