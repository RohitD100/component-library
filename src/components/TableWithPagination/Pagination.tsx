import React from "react";
import type { PaginationProps } from "./type";
import { getPageList } from "./helper";
import { tableStyles } from "./TablePaginationStyle";

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  return (
    <div className={tableStyles.footer}>
      {/* Page info */}
      <p className={tableStyles.footerInfo}>
        Page <span className={tableStyles.footerInfoHighlight}>{currentPage}</span>
        {" "}of{" "}
        <span className={tableStyles.footerInfoHighlight}>{totalPages}</span>
      </p>

      {/* Navigation */}
      <nav aria-label="Page navigation" className={tableStyles.nav}>
        <ul className={tableStyles.navList}>
          {/* Previous */}
          <li>
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={tableStyles.pageBtnPrevNext}
            >
              ◀
            </button>
          </li>

          {/* Page numbers */}
          {getPageList(currentPage, totalPages).map((page, i) => (
            <li key={page === "ellipsis" ? `ellipsis-${i}` : page}>
              {page === "ellipsis" ? (
                <span className={tableStyles.navEllipsis}>…</span>
              ) : (
                <button
                  onClick={() => onPageChange(page)}
                  className={[
                    tableStyles.pageBtn,
                    currentPage === page ? tableStyles.pageBtnActive : "",
                  ].filter(Boolean).join(" ")}
                >
                  {page}
                </button>
              )}
            </li>
          ))}

          {/* Next */}
          <li>
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={tableStyles.pageBtnPrevNext}
            >
              ▶
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
