// ── Wrapper & Card ────────────────────────────────────────
export const wrapperStyle = "w-full ml-auto mr-auto my-6";

export const cardStyle =
  "rounded-2xl border border-gray-200/80 bg-white shadow-sm overflow-hidden";

// ── Scroll Container ─────────────────────────────────────
export const scrollContainerStyle =
  "overflow-x-auto [-webkit-overflow-scrolling:touch] [scrollbar-width:thin]";

export const scrollShadows = {
  left: "pointer-events-none absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white/80 to-transparent z-10",
  right: "pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white/80 to-transparent z-10",
} as const;

// ── Table Structure ──────────────────────────────────────
export const tableStyle = "w-full min-w-max border-collapse";

// ── Table Header (thead) ─────────────────────────────────
export const theadRowStyle = "border-b border-gray-100";

export const sizeStyles = {
  sm: "px-3 py-2.5 text-[9px]",
  md: "px-3 py-2.5 sm:px-6 sm:py-3.5 text-[9px] sm:text-[11px]",
  lg: "px-6 py-3.5 text-[11px]",
} as const;

export const thBaseStyle =
  "text-left font-semibold uppercase tracking-wider text-gray-400 bg-gray-50/80 whitespace-nowrap";

export const thStateVariants = {
  default: "hover:text-gray-600 hover:bg-gray-100/60 transition-colors cursor-pointer select-none",
  active: "text-violet-600 bg-violet-50/60",
  sortable: "cursor-pointer select-none hover:text-gray-600 hover:bg-gray-100/60 transition-colors",
} as const;

export const thInnerStyle = "inline-flex items-center";

// ── Table Body (tbody) ───────────────────────────────────
export const tbodyDivideStyle = "divide-y divide-gray-100";

export const trBaseStyle = "transition-colors hover:bg-violet-50/50";

export const tdBaseStyle = "text-gray-700 whitespace-nowrap";

export const sizeVariantsCell = {
  sm: "px-3 py-2.5 text-xs",
  md: "px-3 py-2.5 sm:px-6 sm:py-3.5 text-xs sm:text-sm",
  lg: "px-6 py-3.5 text-sm",
} as const;

// ── Empty State ──────────────────────────────────────────
export const emptyCellStyle = "px-3 py-10 sm:px-6 sm:py-16 text-center";

export const emptyTextStyle = "text-xs sm:text-sm font-medium text-gray-400";

// ── Search Bar ───────────────────────────────────────────
export const searchContainerStyle = "px-3 pt-3 sm:px-6 sm:pt-4 pb-1";

export const searchWrapperStyle = "relative flex items-center";

export const searchIconStyle = "absolute left-3 text-gray-400 pointer-events-none";

export const searchInputStyle =
  "w-full pl-8 pr-8 py-1.5 text-xs sm:text-sm rounded-lg border border-gray-200 bg-gray-50 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent transition";

export const searchClearStyle =
  "absolute right-2.5 text-gray-400 hover:text-gray-600 text-xs transition-colors";

// ── Pagination Footer ────────────────────────────────────
export const footerStyle =
  "flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 bg-gray-50/60 px-3 py-2.5 sm:px-6 sm:py-3.5";

export const footerInfoStyle = "text-[11px] sm:text-xs text-gray-400 whitespace-nowrap";

export const footerInfoHighlightStyle = "font-medium text-gray-600";

// ── Pagination Navigation ────────────────────────────────
export const navStyle = "overflow-x-auto";

export const navListStyle = "flex items-center gap-1";

export const navEllipsisStyle = "px-1 text-gray-400 text-xs";

export const pageBtnBaseStyle =
  "min-w-[28px] px-2 py-1 text-xs rounded transition-colors text-gray-600";

export const pageBtnStateVariants = {
  default: "hover:bg-violet-100",
  active: "bg-violet-600 text-white font-semibold",
} as const;

export const pageBtnPrevNextStyle =
  "px-2 py-1 text-xs rounded disabled:opacity-30 hover:bg-violet-100 transition-colors";

// ── Bulk Actions Bar ─────────────────────────────────────
export const bulkActionsBarStyle =
  "flex items-center justify-between gap-3 px-3 py-2 sm:px-6 bg-violet-50/60 border-b border-violet-100";

export const bulkActionsCountStyle =
  "text-xs sm:text-sm font-medium text-violet-700";

export const bulkActionsButtonsStyle = "flex items-center gap-2";

// ── Highlight (Search Matches) ───────────────────────────
export const highlightMarkStyle =
  "bg-violet-200 text-violet-900 rounded-sm px-0.5 font-medium not-italic";