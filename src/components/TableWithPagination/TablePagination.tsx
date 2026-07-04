import React, { useState, useRef, useEffect, useCallback } from "react";
import type { Column, SortConfig, TablePaginationProps } from "./type";
import { tableStyles } from "./TablePaginationStyle";
import { Search } from "./Search";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";
import { Pagination } from "./Pagination";
import { HighlightContext } from "./HighlightContext";

export type { Column };

// ── Binary search (prefix-match) ───────────────────────────────────────────────
function substringSearch<T>(arr: T[], key: keyof T, target: string): T[] {
  const lower = target.toLowerCase();
  return arr.filter((item) =>
    (item[key]?.toString().toLowerCase() ?? "").includes(lower)
  );
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

// ── Main component ─────────────────────────────────────────────────────────────
function TablePagination<T>({
  columns,
  data,
  keyExtractor,
  pageSize = 10,
  emptyState = "No user available now.",
  query: externalQuery,
  binarySearchKey,
  select = false,
  search = false,
  highlight = false,
}: TablePaginationProps<T>) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortConfig, setSortConfig] = useState<SortConfig<T>>({ key: null, direction: "none" });
  const [internalQuery, setInternalQuery] = useState<string>("");
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set());
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Use external query if provided, otherwise use internal search state
  const activeQuery = externalQuery !== undefined ? externalQuery : internalQuery;

  // 1️⃣ Search
  const searchedData =
  activeQuery && binarySearchKey
    ? substringSearch(data, binarySearchKey, activeQuery)  // ← no pre-sort needed anymore
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

  // Select logic
  const currentPageKeys = paginatedData.map((row) => keyExtractor(row));
  const allSelected = currentPageKeys.length > 0 && currentPageKeys.every((k) => selectedKeys.has(k));
  const someSelected = currentPageKeys.some((k) => selectedKeys.has(k));

  const handleSelectAll = (checked: boolean) => {
    setSelectedKeys((prev) => {
      const next = new Set(prev);
      sortedData.forEach((row) => {
        const key = keyExtractor(row);
        checked ? next.add(key) : next.delete(key);
      });
      return next;
    });
  };

  const handleSelectRow = (key: string, checked: boolean) => {
    setSelectedKeys((prev) => {
      const next = new Set(prev);
      checked ? next.add(key) : next.delete(key);
      return next;
    });
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

  return (
    <HighlightContext.Provider value={{ query: internalQuery, highlight }}>
      <div className={tableStyles.wrapper}>
        <div className={tableStyles.card}>
  
          {/* Search bar — only shown when search prop is true and no external query */}
          {search && externalQuery === undefined && (
            <div className={tableStyles.searchContainer}>
              <Search
                query={internalQuery}
                onChange={(val) => { setInternalQuery(val); setCurrentPage(1); }}
                highlight={highlight}
              />
            </div>
          )}
  
          {/* Scrollable table */}
          <div className={tableStyles.scrollWrapper}>
            {canScrollLeft && <div className={tableStyles.shadowLeft} />}
            {canScrollRight && <div className={tableStyles.shadowRight} />}
  
            <div ref={scrollRef} onScroll={updateScrollState} className={tableStyles.scrollContainer}>
              <table className={tableStyles.table}>
  
                <TableHeader
                  columns={columns}
                  sortConfig={sortConfig}
                  onSort={handleSort}
                  showSelect={select}
                  allSelected={allSelected}
                  someSelected={someSelected}
                  onSelectAll={handleSelectAll}
                />
  
                <tbody className={tableStyles.tbodyDivide}>
                  {paginatedData.length === 0 ? (
                    <tr>
                      <td colSpan={columns.length + (select ? 1 : 0)} className={tableStyles.emptyCell}>
                        <p className={tableStyles.emptyText}>{emptyState}</p>
                      </td>
                    </tr>
                  ) : (
                    paginatedData.map((row) => {
                      const rowKey = keyExtractor(row);
                      return (
                        <TableRow
                          key={rowKey}
                          row={row}
                          columns={columns}
                          rowKey={rowKey}
                          showSelect={select}
                          selected={selectedKeys.has(rowKey)}
                          onSelectChange={handleSelectRow}
                        />
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
  
          {/* Pagination footer */}
          {totalPages > 0 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
  
        </div>
      </div>
    </HighlightContext.Provider>  
  );
}

export default TablePagination;