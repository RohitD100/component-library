import React from "react";
import type { PaginationProps } from "./type";
import { getPageList } from "./helper";
import { tableStyles } from "./TablePaginationStyle";

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  return (
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
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={tableStyles.pageBtnPrevNext}
            >
              ◀
            </button>
          </li>

          {getPageList(currentPage, totalPages).map((page, i) =>
            page === "ellipsis" ? (
              <li key={`ellipsis-${i}`} className={tableStyles.navEllipsis}>…</li>
            ) : (
              <li key={page}>
                <button
                  onClick={() => onPageChange(page)}
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