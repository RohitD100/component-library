import React, { useState, useRef, useEffect, useCallback } from "react";
import type { Column, SortConfig, TablePaginationProps } from "./type";
import { tableStyles } from "./TablePaginationStyle";
import { substringSearch, mergeSort } from "./helper";
import { HighlightContext } from "./HighlightContext";
import { Search } from "./Search";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";
import { Pagination } from "./Pagination";

export type { Column };

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

  const activeQuery = externalQuery !== undefined ? externalQuery : internalQuery;

  // 1️⃣ Search
  const searchedData =
    activeQuery && binarySearchKey
      ? substringSearch(data, binarySearchKey, activeQuery)
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

  // Select
  const allKeys = sortedData.map((row) => keyExtractor(row));
  const allSelected = allKeys.length > 0 && allKeys.every((k) => selectedKeys.has(k));
  const someSelected = allKeys.some((k) => selectedKeys.has(k));

  const handleSelectAll = (checked: boolean) => {
    setSelectedKeys(() => {
      const next = new Set<string>();
      if (checked) sortedData.forEach((row) => next.add(keyExtractor(row)));
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
    <HighlightContext.Provider value={{ query: activeQuery, highlight }}>
      <div className={tableStyles.wrapper}>
        <div className={tableStyles.card}>

          {search && externalQuery === undefined && (
            <div className={tableStyles.searchContainer}>
              <Search
                query={internalQuery}
                onChange={(val) => { setInternalQuery(val); setCurrentPage(1); }}
                highlight={highlight}
              />
            </div>
          )}

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