import React from "react";
import type { SearchProps } from "./type";
import { tableStyles } from "./TablePaginationStyle";
import { SearchIcon } from "./Icons";

export function Search({ query, onChange, placeholder = "Search...", highlight = false }: SearchProps) {
  return (
    <div className={tableStyles.searchWrapper}>
      <span className={tableStyles.searchIcon}>
        <SearchIcon />
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
        <button onClick={() => onChange("")} className={tableStyles.searchClear} aria-label="Clear search">
          ✕
        </button>
      )}
    </div>
  );
}