import React, { useState, useRef, useEffect, useCallback } from "react";

export type Column<T> = {
  key: keyof T;
  label: string;
  render?: (row: T) => React.ReactNode;
};

type TablePaginationProps<T> = {
  columns: Column<T>[];
  data: T[];
  keyExtractor: (row: T) => string;
  pageSize?: number;
  emptyState?: string;
};

function TablePagination<T>({
  columns,
  data,
  keyExtractor,
  pageSize = 10,
  emptyState = "No user available now."
}: TablePaginationProps<T>) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.ceil(data.length / pageSize);

  const paginatedData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Track horizontal overflow so we can show fade edges + know when scrolling is possible
  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
  }, []);

  useEffect(() => {
    updateScrollState();
    const el = scrollRef.current;
    if (!el) return;

    const handleResize = () => updateScrollState();
    window.addEventListener("resize", handleResize);

    const resizeObserver = new ResizeObserver(() => updateScrollState());
    resizeObserver.observe(el);

    return () => {
      window.removeEventListener("resize", handleResize);
      resizeObserver.disconnect();
    };
  }, [updateScrollState, paginatedData.length, columns.length]);

  // Build a compact page list with ellipses, e.g. 1 2 3 ... 8 9 10
  const getPageList = (): (number | "ellipsis")[] => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    const pages: (number | "ellipsis")[] = [1];
    if (currentPage > 3) pages.push("ellipsis");
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);
    for (let p = start; p <= end; p++) pages.push(p);
    if (currentPage < totalPages - 2) pages.push("ellipsis");
    pages.push(totalPages);
    return pages;
  };

  const pageList = getPageList();

  return (
    <div className="w-full ml-auto mr-auto my-6">
      <div className="rounded-2xl border border-gray-200/80 bg-white shadow-sm overflow-hidden">
        {/* Scrollable table area with fade edges to signal overflow */}
        <div className="relative">
          <div
            ref={scrollRef}
            onScroll={updateScrollState}
            className="overflow-x-auto [-webkit-overflow-scrolling:touch] [scrollbar-width:thin]"
          >
            <table className="w-full min-w-max border-collapse">
              <thead>
                <tr className="border-b border-gray-100">
                  {columns.map((col) => (
                    <th
                      key={String(col.key)}
                      className="px-3 py-2.5 sm:px-6 sm:py-3.5 text-left text-[9px] sm:text-[11px] font-semibold uppercase tracking-wider text-gray-400 bg-gray-50/80 whitespace-nowrap"
                    >
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {paginatedData.length === 0 ? (
                  <tr>
                    <td colSpan={columns.length} className="px-3 py-10 sm:px-6 sm:py-16 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-violet-50 flex items-center justify-center text-violet-400 text-base sm:text-lg">
                          ⌀
                        </div>
                        <p className="text-xs sm:text-sm font-medium text-gray-400">{emptyState}</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  paginatedData.map((row) => (
                    <tr key={keyExtractor(row)} className="transition-colors hover:bg-violet-50/50">
                      {columns.map((col) => (
                        <td
                          key={String(col.key)}
                          className="px-3 py-2.5 sm:px-6 sm:py-3.5 text-xs sm:text-sm text-gray-700 whitespace-nowrap"
                        >
                          {col.render ? col.render(row) : (row[col.key] as React.ReactNode)}
                        </td>
                      ))}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Fade overlays — only visible when there's actually more content to scroll to */}
          <div
            aria-hidden
            className={`pointer-events-none absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-white to-transparent transition-opacity duration-200 ${
              canScrollLeft ? "opacity-100" : "opacity-0"
            }`}
          />
          <div
            aria-hidden
            className={`pointer-events-none absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-white to-transparent transition-opacity duration-200 ${
              canScrollRight ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        {/* Footer bar with pagination, inside the same card */}
        {totalPages > 0 && (
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 bg-gray-50/60 px-3 py-2.5 sm:px-6 sm:py-3.5">
            <p className="text-[11px] sm:text-xs text-gray-400 whitespace-nowrap">
              Page <span className="font-medium text-gray-600">{currentPage}</span> of{" "}
              <span className="font-medium text-gray-600">{totalPages}</span>
            </p>

            <nav aria-label="Page navigation" className="overflow-x-auto">
              <ul className="flex items-center gap-1">
                <li>
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                    className={`flex h-6 w-6 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg text-sm transition-colors ${
                      currentPage === 1
                        ? "text-gray-300 cursor-not-allowed"
                        : "text-gray-500 hover:bg-white hover:shadow-sm hover:text-violet-600"
                    }`}
                  >
                    <svg width="14" height="14" className="sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none">
                      <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </li>

                {pageList.map((page, i) =>
                  page === "ellipsis" ? (
                    <li key={`ellipsis-${i}`} className="px-1 text-gray-400 text-xs sm:text-sm select-none">
                      …
                    </li>
                  ) : (
                    <li key={page}>
                      <button
                        onClick={() => handlePageChange(page)}
                        aria-current={currentPage === page ? "page" : undefined}
                        className={`flex h-6 min-w-6 sm:h-8 sm:min-w-8 shrink-0 items-center justify-center rounded-lg px-1.5 sm:px-2.5 text-xs sm:text-sm font-medium transition-all ${
                          currentPage === page
                            ? "bg-violet-600 text-white shadow-sm shadow-violet-300"
                            : "text-gray-500 hover:bg-white hover:shadow-sm hover:text-violet-600"
                        }`}
                      >
                        {page}
                      </button>
                    </li>
                  )
                )}

                <li>
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    aria-label="Next page"
                    className={`flex h-6 w-6 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg text-sm transition-colors ${
                      currentPage === totalPages
                        ? "text-gray-300 cursor-not-allowed"
                        : "text-gray-500 hover:bg-white hover:shadow-sm hover:text-violet-600"
                    }`}
                  >
                    <svg width="14" height="14" className="sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}

export default TablePagination;