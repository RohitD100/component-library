import React, { useState } from "react";

type Column<T> = {
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

  // Limit visible pages (e.g. 10 at a time)
  const maxVisiblePages = 10;
  const startPage = Math.floor((currentPage - 1) / maxVisiblePages) * maxVisiblePages + 1;
  const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);
  const visiblePages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  return (
    <>
      <div className="rounded-xl border border-gray-200 w-9/10 ml-auto mr-auto mt-6 shadow-md">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              {columns.map((col) => (
                <th
                  key={String(col.key)}
                  className="px-4 py-2 text-left text-sm font-semibold text-gray-500 border-b border-gray-200"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-4 py-4 text-center text-gray-500"
                >
                  {emptyState}
                </td>
              </tr>
            ) : (
              paginatedData.map((row, idx) => (
                <tr
                  key={keyExtractor(row)}
                  className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  {columns.map((col) => (
                    <td
                      key={String(col.key)}
                      className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200"
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

      {/* Pagination — only render if there is at least 1 page */}
      {totalPages > 0 && (
        <nav aria-label="Page navigation" className="mt-4 flex flex-col items-center space-y-2">
          <ul className="flex space-x-2">
            <li>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded-md border text-sm ${
                  currentPage === 1
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                Previous
              </button>
            </li>

            {visiblePages.map((page) => (
              <li key={page}>
                <button
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-1 rounded-md border text-sm ${
                    currentPage === page
                      ? "bg-[#af66fe] text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {page}
                </button>
              </li>
            ))}

            <li>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded-md border text-sm ${
                  currentPage === totalPages
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                Next
              </button>
            </li>
          </ul>

          {/* Page summary */}
          <div className="text-sm text-gray-600">
            Showing {startPage}-{endPage} out of {totalPages} pages
          </div>
        </nav>
      )}
    </>
  );
}

export default TablePagination;
