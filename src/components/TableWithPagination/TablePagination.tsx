import { useState, useRef } from "react";
import type { Column, TablePaginationProps } from "./type";
import {
  wrapperStyle,
  cardStyle,
  scrollContainerStyle,
  tableStyle,
} from "./TablePaginationStyle";
import { substringSearch, mergeSort } from "./helper";
import { Search } from "./Search";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";
import { Pagination } from "./Pagination";
import { BulkActionsBar } from "./BulkActionBar";

export type { Column };

// ── Main Table Component ─────────────────────────────────
function TablePagination<T>({
  columns,
  data,
  pageSize = 10,
  emptyState = "No data available.",
  query: externalQuery,
  SearchKey,
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

  // ── Determine which query to use (external or internal) ──
  const activeQuery = externalQuery ?? internalQuery;

  // Search - filter data based on query
  const searchedData = activeQuery && SearchKey
    ? substringSearch(data, SearchKey, activeQuery)
    : data;

  // ↕️ Sort - sort data based on sortKey and sortDirection
  const sortedData = sortKey && sortDirection !== "none"
    ? mergeSort([...searchedData], sortKey, sortDirection)
    : searchedData;

  // Get selected rows from sorted data
  const selectedRows = sortedData.filter((row) => selectedKeys.has(keyExtractor(row)));

  // Pagination - slice data for current page
  const totalPages = Math.ceil(sortedData.length / pageSize);
  
 
  const validCurrentPage = Math.max(1, Math.min(currentPage, totalPages || 1));
  const paginatedData = sortedData.slice((validCurrentPage - 1) * pageSize, validCurrentPage * pageSize);

  // ── Selection State ─────────────────────────────────────
  // Track which keys are selected (for all data, not just current page)
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
      
      
      if (checked) {
        next.add(key);
      } else {
        next.delete(key);
      }
      
      return next;
    });
  };

  return (
    <div className={wrapperStyle}>
      <div className={cardStyle}>

        {/* 🔍 Search bar (optional) */}
        {search && externalQuery === undefined && (
          <div>
            <Search
              query={internalQuery}
              onChange={(val) => { setInternalQuery(val); setCurrentPage(1); }}
              highlight={highlight}
            />
          </div>
        )}

        {/* ⚡ Bulk actions bar (optional) */}
        {enableBulkActions && (
          <BulkActionsBar
            selectedRows={selectedRows}
            selectedKeys={Array.from(selectedKeys)}
            actions={bulkActions}
          />
        )}

        {/* 📊 Table */}
        <div ref={scrollRef} className={scrollContainerStyle}>
          <table className={tableStyle}>
            <TableHeader
              columns={columns}
              showSelect={select}
              allSelected={allSelected}
              someSelected={someSelected}
              onSelectAll={handleSelectAll}
            />

            <tbody>
              {paginatedData.length === 0 ? (
                <tr>
                  <td colSpan={columns.length + (select ? 1 : 0)}>
                    <p>{emptyState}</p>
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

        {/* 📄 Pagination footer (optional) */}
        {totalPages > 0 && (
          <Pagination
            currentPage={validCurrentPage} // Pass derived value here
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        )}
      </div>
    </div>
  );
}

export default TablePagination;