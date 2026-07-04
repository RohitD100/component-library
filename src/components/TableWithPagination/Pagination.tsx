import React from "react";
import { tableStyles } from "./TablePaginationStyle";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function getPageList(currentPage: number, totalPages: number): (number | "ellipsis")[] {
  if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
  const pages: (number | "ellipsis")[] = [1];
  if (currentPage > 3) pages.push("ellipsis");
  const start = Math.max(2, currentPage - 1);
  const end = Math.min(totalPages - 1, currentPage + 1);
  for (let p = start; p <= end; p++) pages.push(p);
  if (currentPage < totalPages - 2) pages.push("ellipsis");
  pages.push(totalPages);
  return pages;
}

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