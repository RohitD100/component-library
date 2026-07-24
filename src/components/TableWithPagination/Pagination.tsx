import type { PaginationProps } from "./type";
import { getPageList } from "./helper";
import Button from "../Button/Button";
import {
  footerStyle,
  footerInfoStyle,
  footerInfoHighlightStyle,
  navStyle,
  navListStyle,
  navEllipsisStyle,
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
            <Button
              size="sm"
              variant="ghost"
              content="◀"
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
            />
          </li>

          {/* Page number buttons */}
          {getPageList(currentPage, totalPages).map((page, i) => (
            <li key={page === "ellipsis" ? `ellipsis-${i}` : page}>
              {page === "ellipsis" ? (
                <span className={navEllipsisStyle}>…</span>
              ) : (
                <Button
                  size="sm"
                  variant={currentPage === page ? "ghostActive" : "ghost"}
                  content={page}
                  onClick={() => onPageChange(page)}
                />
              )}
            </li>
          ))}

          {/* Next button */}
          <li>
            <Button
              size="sm"
              variant="ghost"
              content="▶"
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
}