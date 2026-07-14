import React from "react";
import type { PaginationProps } from "./type";
import { getPageList } from "./helper";
import {
  footerStyle,
  footerInfoStyle,
  footerInfoHighlightStyle,
  navStyle,
  navListStyle,
  navEllipsisStyle,
  pageBtnBaseStyle,
  pageBtnStateVariants,
  pageBtnPrevNextStyle,
} from "./TablePaginationStyle";

// ── Pagination Footer Component ──────────────────────────
export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className={footerStyle}>
      {/* Page info text */}
      <p className={footerInfoStyle}>
        Page <span className={footerInfoHighlightStyle}>{currentPage}</span>
        {" "}of{" "}
        <span className={footerInfoHighlightStyle}>{totalPages}</span>
      </p>

      {/* Navigation buttons */}
      <nav aria-label="Page navigation" className={navStyle}>
        <ul className={navListStyle}>
          {/* Previous button */}
          <li>
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={pageBtnPrevNextStyle}
              aria-label="Previous page"
            >
              ◀
            </button>
          </li>

          {/* Page number buttons */}
          {getPageList(currentPage, totalPages).map((page, i) => (
            <li key={page === "ellipsis" ? `ellipsis-${i}` : page}>
              {page === "ellipsis" ? (
                <span className={navEllipsisStyle}>…</span>
              ) : (
                <button
                  onClick={() => onPageChange(page)}
                  className={`${pageBtnBaseStyle} ${
                    currentPage === page
                      ? pageBtnStateVariants.active
                      : pageBtnStateVariants.default
                  }`}
                  aria-label={`Go to page ${page}`}
                  aria-current={currentPage === page ? "page" : undefined}
                >
                  {page}
                </button>
              )}
            </li>
          ))}

          {/* Next button */}
          <li>
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={pageBtnPrevNextStyle}
              aria-label="Next page"
            >
              ▶
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}