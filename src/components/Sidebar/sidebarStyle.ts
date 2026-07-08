export const sidebarVariants = {
    dark: "bg-gray-900 border-gray-700 text-gray-300",
    light: "bg-white border-gray-200 text-gray-600",
} as const;

export const baseSidebarStyle =
    "h-screen flex flex-col border-r transition-all duration-200";

export const logoVariants = {
    dark: "px-4 py-5 font-bold text-lg text-white border-b border-gray-700 whitespace-nowrap overflow-hidden",
    light: "px-4 py-5 font-bold text-lg text-gray-900 border-b border-gray-200 whitespace-nowrap overflow-hidden",
} as const;

export const navStyle = "flex-1 p-2 overflow-y-auto";

export const navItemBase =
    "flex items-center gap-3 px-3 py-2.5 mb-1 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200 no-underline";

export const collapsedNavItem =
    "flex items-center justify-center px-0 py-2.5 mb-1 rounded-xl text-sm font-medium transition-all duration-200 no-underline w-10 mx-auto";

export const navItemActive =
    "bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-sm";

export const navItemInactiveVariants = {
    dark: "text-gray-400 hover:bg-white/5 hover:text-white",
    light: "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
} as const;

export const collapseButtonVariants = {
    dark: "m-2 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer border-none text-sm font-medium",
    light: "m-2 p-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-900 transition-colors cursor-pointer border-none text-sm font-medium",
} as const;

export const iconStyle = "w-5 h-5 flex-shrink-0";

export const badgeVariants = {
    dark: "ml-auto px-2 py-0.5 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300",
    light: "ml-auto px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-600",
} as const;

export const tooltipStyle =
    "absolute left-full ml-2 px-2 py-1 rounded-md text-xs font-medium bg-gray-800 text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none z-50";


export const collapseIconStyle =
    "flex items-center justify-center w-full font-bold text-base";


    export const iconStyle2 =
        "flex items-center justify-center w-full font-bold text-base";


        export const tooltipStyle2 =
            "ml-1.5 px-1.5 py-0.5 rounded-full text-[10px] bg-purple-500/30 text-purple-200";