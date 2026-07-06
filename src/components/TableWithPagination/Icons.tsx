import React from "react";
import type { SortDirection } from "./type";
import { tableStyles } from "./TablePaginationStyle";

export function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

export function SortIcon({ direction }: { direction: SortDirection }) {
  if (direction === "asc")
    return <span className={tableStyles.sortIconAsc} aria-label="Sorted ascending">↑</span>;
  if (direction === "desc")
    return <span className={tableStyles.sortIconDesc} aria-label="Sorted descending">↓</span>;
  return <span className={tableStyles.sortIconNone} aria-label="Sortable">⇅</span>;
}