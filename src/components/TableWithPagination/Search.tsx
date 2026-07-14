import React from "react";
import type { SearchProps } from "./type";
import {
  searchContainerStyle,
  searchWrapperStyle,
  searchIconStyle,
  searchInputStyle,
  searchClearStyle,
} from "./TablePaginationStyle";
import Input from "../Input/Input";
import { Icon } from "../Icon/Icon";

// ── Search Bar Component ─────────────────────────────────
export function Search({
  query,
  onChange,
  placeholder = "Search...",
  highlight = false,
}: SearchProps) {
  // ── Determine placeholder text ──────────────────────────
  const getPlaceholder = () =>
    highlight ? "Search " : placeholder;

  // ── Add highlight styling if active ─────────────────────
  const getHighlightClass = () =>
    highlight && query ? "ring-2 ring-violet-400 border-transparent" : "";

  // ── Clear button (only shows when query has text) ────────
  const ClearButton = () =>
    query ? (
      <button
        type="button"
        onClick={() => onChange("")}
        className="pointer-events-auto flex items-center justify-center"
        aria-label="Clear search"
      >
        <Icon
          icon="close"
          size="sm"
          colorClass="text-gray-400 hover:text-gray-600"
        />
      </button>
    ) : undefined;

  return (
    <div className={searchContainerStyle}>
      <div className={searchWrapperStyle}>
        <Input
          size="md"
          variant="light"
          value={query}
          onChange={(e) => onChange(e.target.value)}
          placeholder={getPlaceholder()}
          className={getHighlightClass()}
          leftIcon={<Icon icon="search" size="sm" colorClass="text-gray-400" />}
          rightIcon={<ClearButton />}
        />
      </div>
    </div>
  );
}