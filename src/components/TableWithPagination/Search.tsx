
import React from "react";
import { tableStyles } from "./TablePaginationStyle";

interface SearchProps {
  query: string;
  onChange: (value: string) => void;
  placeholder?: string;
  highlight?: boolean;           
}

export function Search({ query, onChange, placeholder = "Search...", highlight = false }: SearchProps) {
  return (
    <div className={tableStyles.searchWrapper}>
      <span className={tableStyles.searchIcon}>
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
      </span>
      <input
        type="text"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        placeholder={highlight ? "Search & highlight..." : placeholder}
        className={[
          tableStyles.searchInput,
          highlight && query ? "ring-2 ring-violet-400 border-transparent" : "",
        ].filter(Boolean).join(" ")}
        aria-label="Search table"
      />
      {query && (
        <button
          onClick={() => onChange("")}
          className={tableStyles.searchClear}
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
}