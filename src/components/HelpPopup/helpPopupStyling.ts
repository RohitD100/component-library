import type { HelpPopupPlacement, HelpPopupVariant } from "./types";

export const popupVariant: Record<HelpPopupVariant, string> = {
    default: "bg-white border border-gray-200 text-gray-700",
    info: "bg-blue-50 border border-blue-200 text-blue-800",
    warning: "bg-amber-50 border border-amber-200 text-amber-800",
    tip: "bg-purple-50 border border-purple-200 text-purple-800",
};

export const titleVariant: Record<HelpPopupVariant, string> = {
    default: "text-gray-900",
    info: "text-blue-900",
    warning: "text-amber-900",
    tip: "text-purple-900",
};

export const iconVariant: Record<HelpPopupVariant, string> = {
    default: "text-gray-400 hover:text-gray-600",
    info: "text-blue-400 hover:text-blue-600",
    warning: "text-amber-400 hover:text-amber-600",
    tip: "text-purple-400 hover:text-purple-600",
};

export const placementClass: Record<HelpPopupPlacement, string> = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

export const arrowPlacement: Record<HelpPopupPlacement, string> = {
    top: "top-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-gray-200",
    bottom: "bottom-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent border-b-gray-200",
    left: "left-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent border-l-gray-200",
    right: "right-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-gray-200",
};

export const popupBase =
    "absolute z-50 w-64 rounded-xl shadow-lg p-3 text-sm transition-all duration-200";

export const triggerButtonBase =
    "inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-purple-500 cursor-pointer select-none";
