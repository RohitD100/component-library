export const tableStyles = {
  // Wrapper
  wrapper: "w-full ml-auto mr-auto my-6",

  // Card
  card: "rounded-2xl border border-gray-200/80 bg-white shadow-sm overflow-hidden",

  // Scroll container
  scrollWrapper: "relative",
  scrollContainer:
    "overflow-x-auto [-webkit-overflow-scrolling:touch] [scrollbar-width:thin]",

  // Scroll shadows
  shadowLeft:
    "pointer-events-none absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white/80 to-transparent z-10",
  shadowRight:
    "pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white/80 to-transparent z-10",

  // Table
  table: "w-full min-w-max border-collapse",

  // thead
  theadRow: "border-b border-gray-100",
  th: "px-3 py-2.5 sm:px-6 sm:py-3.5 text-left text-[9px] sm:text-[11px] font-semibold uppercase tracking-wider text-gray-400 bg-gray-50/80 whitespace-nowrap",
  thSortable:
    "cursor-pointer select-none hover:text-gray-600 hover:bg-gray-100/60 transition-colors",
  thSortActive: "text-violet-600 bg-violet-50/60",
  thInner: "inline-flex items-center",

  // Sort icons
  sortIconAsc: "ml-1 inline-block text-violet-500",
  sortIconDesc: "ml-1 inline-block text-violet-500",
  sortIconNone: "ml-1 inline-block text-gray-300 group-hover:text-gray-400",

  // tbody
  tbodyDivide: "divide-y divide-gray-100",
  tr: "transition-colors hover:bg-violet-50/50",
  td: "px-3 py-2.5 sm:px-6 sm:py-3.5 text-xs sm:text-sm text-gray-700 whitespace-nowrap",

  // Empty state
  emptyCell: "px-3 py-10 sm:px-6 sm:py-16 text-center",
  emptyText: "text-xs sm:text-sm font-medium text-gray-400",

  // Pagination footer
  footer:
    "flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 bg-gray-50/60 px-3 py-2.5 sm:px-6 sm:py-3.5",
  footerInfo: "text-[11px] sm:text-xs text-gray-400 whitespace-nowrap",
  footerInfoHighlight: "font-medium text-gray-600",

  // Pagination nav
  nav: "overflow-x-auto",
  navList: "flex items-center gap-1",
  navEllipsis: "px-1 text-gray-400 text-xs",

  // Page buttons
  pageBtn:
    "min-w-[28px] px-2 py-1 text-xs rounded transition-colors hover:bg-violet-100 text-gray-600",
  pageBtnActive: "bg-violet-600 text-white font-semibold",
  pageBtnPrevNext:
    "px-2 py-1 text-xs rounded disabled:opacity-30 hover:bg-violet-100 transition-colors",

    // Search
    searchContainer: "px-3 pt-3 sm:px-6 sm:pt-4 pb-1",
    searchWrapper: "relative flex items-center",
    searchIcon: "absolute left-3 text-gray-400 pointer-events-none",
    searchInput:
      "w-full pl-8 pr-8 py-1.5 text-xs sm:text-sm rounded-lg border border-gray-200 bg-gray-50 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent transition",
    searchClear:
      "absolute right-2.5 text-gray-400 hover:text-gray-600 text-xs transition-colors",

    // Select checkboxes
    selectTh: "px-3 py-2.5 sm:px-4 sm:py-3.5 bg-gray-50/80 w-8",
    selectTd: "px-3 py-2.5 sm:px-4 sm:py-3.5 w-8",
    checkbox:
      "h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500 cursor-pointer accent-violet-600",
};