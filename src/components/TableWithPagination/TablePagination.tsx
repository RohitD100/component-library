import React, { useState, useRef, useEffect, useCallback } from "react";
import type { Column, SortConfig, SortDirection, TablePaginationProps } from "./type";
import { tableStyles } from "./TablePaginationStyle";

export type { Column };

// ── Binary search (prefix-match) ───────────────────────────────────────────────
function binarySearch<T>(arr: T[], key: keyof T, target: string): T[] {
  const lower = target.toLowerCase();
  let low = 0;
  let high = arr.length - 1;
  const results: T[] = [];
  let found = -1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const midVal = arr[mid][key]?.toString().toLowerCase() ?? "";
    if (midVal.startsWith(lower)) { found = mid; break; }
    else if (midVal < lower) low = mid + 1;
    else high = mid - 1;
  }

  if (found === -1) return results;

  let left = found;
  while (left >= 0 && (arr[left][key]?.toString().toLowerCase() ?? "").startsWith(lower)) {
    results.push(arr[left--]);
  }
  let right = found + 1;
  while (right < arr.length && (arr[right][key]?.toString().toLowerCase() ?? "").startsWith(lower)) {
    results.push(arr[right++]);
  }

  return results;
}

// ── Merge sort ─────────────────────────────────────────────────────────────────
function mergeSort<T>(arr: T[], key: keyof T, direction: "asc" | "desc"): T[] {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid), key, direction);
  const right = mergeSort(arr.slice(mid), key, direction);
  return merge(left, right, key, direction);
}

function merge<T>(left: T[], right: T[], key: keyof T, direction: "asc" | "desc"): T[] {
  const result: T[] = [];
  let i = 0, j = 0;
  while (i < left.length && j < right.length) {
    const a = left[i][key]?.toString().toLowerCase() ?? "";
    const b = right[j][key]?.toString().toLowerCase() ?? "";
    (direction === "asc" ? a <= b : a >= b) ? result.push(left[i++]) : result.push(right[j++]);
  }
  return [...result, ...left.slice(i), ...right.slice(j)];
}

// ── Sort icon ──────────────────────────────────────────────────────────────────
function SortIcon({ direction }: { direction: SortDirection }) {
  if (direction === "asc")
    return <span className={tableStyles.sortIconAsc} aria-label="Sorted ascending">↑</span>;
  if (direction === "desc")
    return <span className={tableStyles.sortIconDesc} aria-label="Sorted descending">↓</span>;
  return <span className={tableStyles.sortIconNone} aria-label="Sortable">⇅</span>;
}

// ── Main component ─────────────────────────────────────────────────────────────
function TablePagination<T>({
  columns,
  data,
  keyExtractor,
  pageSize = 10,
  emptyState = "No user available now.",
  query,
  binarySearchKey,
}: TablePaginationProps<T>) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortConfig, setSortConfig] = useState<SortConfig<T>>({ key: null, direction: "none" });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // 1️⃣ Search
  const searchedData =
    query && binarySearchKey
      ? binarySearch(
          [...data].sort((a, b) =>
            (a[binarySearchKey]?.toString() ?? "").localeCompare(b[binarySearchKey]?.toString() ?? "")
          ),
          binarySearchKey,
          query
        )
      : data;

  // 2️⃣ Sort
  const sortedData =
    sortConfig.key && sortConfig.direction !== "none"
      ? mergeSort([...searchedData], sortConfig.key, sortConfig.direction)
      : searchedData;

  // 3️⃣ Paginate
  const totalPages = Math.ceil(sortedData.length / pageSize);
  const paginatedData = sortedData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const handleSort = (key: keyof T) => {
    setSortConfig((prev) => {
      if (prev.key !== key) return { key, direction: "asc" };
      if (prev.direction === "none") return { key, direction: "asc" };
      if (prev.direction === "asc") return { key, direction: "desc" };
      return { key: null, direction: "none" };
    });
    setCurrentPage(1);
  };

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
    window.addEventListener("resize", updateScrollState);
    const ro = new ResizeObserver(updateScrollState);
    ro.observe(el);
    return () => { window.removeEventListener("resize", updateScrollState); ro.disconnect(); };
  }, [updateScrollState, paginatedData.length, columns.length]);

  const getPageList = (): (number | "ellipsis")[] => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
    const pages: (number | "ellipsis")[] = [1];
    if (currentPage > 3) pages.push("ellipsis");
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);
    for (let p = start; p <= end; p++) pages.push(p);
    if (currentPage < totalPages - 2) pages.push("ellipsis");
    pages.push(totalPages);
    return pages;
  };

  return (
    <div className={tableStyles.wrapper}>
      <div className={tableStyles.card}>

        {/* Scrollable table */}
        <div className={tableStyles.scrollWrapper}>
          {canScrollLeft && <div className={tableStyles.shadowLeft} />}
          {canScrollRight && <div className={tableStyles.shadowRight} />}

          <div ref={scrollRef} onScroll={updateScrollState} className={tableStyles.scrollContainer}>
            <table className={tableStyles.table}>
              <thead>
                <tr className={tableStyles.theadRow}>
                  {columns.map((col) => {
                    const isSortable = col.sortable !== false;
                    const isActive = sortConfig.key === col.key;
                    const direction: SortDirection = isActive ? sortConfig.direction : "none";

                    return (
                      <th
                        key={String(col.key)}
                        onClick={isSortable ? () => handleSort(col.key) : undefined}
                        className={[
                          tableStyles.th,
                          isSortable ? tableStyles.thSortable : "",
                          isActive && direction !== "none" ? tableStyles.thSortActive : "",
                        ].filter(Boolean).join(" ")}
                        aria-sort={
                          isActive
                            ? direction === "asc" ? "ascending"
                            : direction === "desc" ? "descending"
                            : "none"
                            : undefined
                        }
                      >
                        <span className={tableStyles.thInner}>
                          {col.label}
                          {isSortable && <SortIcon direction={direction} />}
                        </span>
                      </th>
                    );
                  })}
                </tr>
              </thead>

              <tbody className={tableStyles.tbodyDivide}>
                {paginatedData.length === 0 ? (
                  <tr>
                    <td colSpan={columns.length} className={tableStyles.emptyCell}>
                      <p className={tableStyles.emptyText}>{emptyState}</p>
                    </td>
                  </tr>
                ) : (
                  paginatedData.map((row) => (
                    <tr key={keyExtractor(row)} className={tableStyles.tr}>
                      {columns.map((col) => (
                        <td key={String(col.key)} className={tableStyles.td}>
                          {col.render ? col.render(row) : (row[col.key] as React.ReactNode)}
                        </td>
                      ))}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination footer */}
        {totalPages > 0 && (
          <div className={tableStyles.footer}>
            <p className={tableStyles.footerInfo}>
              Page{" "}
              <span className={tableStyles.footerInfoHighlight}>{currentPage}</span>
              {" "}of{" "}
              <span className={tableStyles.footerInfoHighlight}>{totalPages}</span>
            </p>

            <nav aria-label="Page navigation" className={tableStyles.nav}>
              <ul className={tableStyles.navList}>
                <li>
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={tableStyles.pageBtnPrevNext}
                  >
                    ◀
                  </button>
                </li>

                {getPageList().map((page, i) =>
                  page === "ellipsis" ? (
                    <li key={`ellipsis-${i}`} className={tableStyles.navEllipsis}>…</li>
                  ) : (
                    <li key={page}>
                      <button
                        onClick={() => handlePageChange(page)}
                        className={[
                          tableStyles.pageBtn,
                          currentPage === page ? tableStyles.pageBtnActive : "",
                        ].filter(Boolean).join(" ")}
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
                    className={tableStyles.pageBtnPrevNext}
                  >
                    ▶
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