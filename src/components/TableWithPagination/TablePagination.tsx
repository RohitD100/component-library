import React, { useState, useRef, useEffect } from "react";
import type { Column, TablePaginationProps } from "./type";
import { tableStyles } from "./TablePaginationStyle";
import { substringSearch, mergeSort } from "./helper";
import { Search } from "./Search";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";
import { Pagination } from "./Pagination";
import { BulkActionsBar } from "./BulkActionBar";

export type { Column };

function TablePagination<T>({
  columns,
  data,
  pageSize = 10,
  emptyState = "No data available.",
  query: externalQuery,
  binarySearchKey,
  select = false,
  search = false,
  highlight = false,
  enableBulkActions = false,
  bulkActions = [],
  keyExtractor,
  sortKey,
  sortDirection = "none",
}: TablePaginationProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);
  const [internalQuery, setInternalQuery] = useState("");
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set());
  const scrollRef = useRef<HTMLDivElement>(null);

  const activeQuery = externalQuery ?? internalQuery;

  // 🔍 Search
  const searchedData = activeQuery && binarySearchKey
    ? substringSearch(data, binarySearchKey, activeQuery)
    : data;

  // ↕️ Sort (fully controlled via sortKey / sortDirection props)
  const sortedData = sortKey && sortDirection !== "none"
    ? mergeSort([...searchedData], sortKey, sortDirection)
    : searchedData;

  // ✅ Selected rows
  const selectedRows = sortedData.filter((row) => selectedKeys.has(keyExtractor(row)));

  // 📄 Pagination
  const totalPages = Math.ceil(sortedData.length / pageSize);
  const paginatedData = sortedData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  // Keep currentPage valid
  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages || 1);
  }, [totalPages, currentPage]);

  // Selection handlers
  const allKeys = sortedData.map((row) => keyExtractor(row));
  const allSelected = allKeys.length > 0 && allKeys.every((k) => selectedKeys.has(k));
  const someSelected = allKeys.some((k) => selectedKeys.has(k));

  const handleSelectAll = (checked: boolean) => {
    setSelectedKeys(() => {
      return checked ? new Set(allKeys) : new Set();
    });
  };

  const handleSelectRow = (key: string, checked: boolean) => {
    setSelectedKeys((prev) => {
      const next = new Set(prev);
      checked ? next.add(key) : next.delete(key);
      return next;
    });
  };

  return (
    <div className={tableStyles.wrapper}>
      <div className={tableStyles.card}>

        {/* 🔍 Search bar */}
        {search && externalQuery === undefined && (
          <div className={tableStyles.searchContainer}>
            <Search
              query={internalQuery}
              onChange={(val) => { setInternalQuery(val); setCurrentPage(1); }}
              highlight={highlight}
            />
          </div>
        )}

        {/* ⚡ Bulk actions */}
        {enableBulkActions && (
          <BulkActionsBar
            selectedRows={selectedRows}
            selectedKeys={Array.from(selectedKeys)}
            actions={bulkActions}
          />
        )}

        {/* 📊 Table */}
        <div ref={scrollRef} className={tableStyles.scrollContainer}>
          <table className={tableStyles.table}>
            <TableHeader
              columns={columns}
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
                      query={activeQuery}
                      highlight={highlight}
                    />
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* 📄 Pagination */}
        {totalPages > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        )}
      </div>
    </div>
  );
}

export default TablePagination;