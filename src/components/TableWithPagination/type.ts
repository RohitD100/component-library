import type { ReactNode } from "react";

// ── Existing types ─────────────────────────────────────────────────────────────
export type SortDirection = "asc" | "desc" | "none";

export type Column<T> = {
  key: keyof T;
  label: string;
  render?: (row: T) => ReactNode;
  sortable?: boolean;
};

export type SortConfig<T> = {
  key: keyof T | null;
  direction: SortDirection;
};

export interface TablePaginationProps<T> {
  columns: Column<T>[];
  data: T[];
  keyExtractor: (row: T) => string;
  pageSize?: number;
  emptyState?: string;
  query?: string;
  binarySearchKey?: keyof T;
  select?: boolean;
  search?: boolean;
  highlight?: boolean;
}

// ── HighlightContext ───────────────────────────────────────────────────────────
export interface HighlightContextValue {
  query: string;
  highlight: boolean;
}

// ── Highlight ──────────────────────────────────────────────────────────────────
export interface HighlightProps {
  text: string;
}

// ── Pagination ─────────────────────────────────────────────────────────────────
export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

// ── Search ─────────────────────────────────────────────────────────────────────
export interface SearchProps {
  query: string;
  onChange: (value: string) => void;
  placeholder?: string;
  highlight?: boolean;
}

// ── Select ─────────────────────────────────────────────────────────────────────
export interface SelectHeaderProps {
  checked: boolean;
  indeterminate?: boolean;
  onChange: (checked: boolean) => void;
}

export interface SelectCellProps {
  rowKey: string;
  checked: boolean;
  onChange: (key: string, checked: boolean) => void;
}

// ── TableHeader ────────────────────────────────────────────────────────────────
export interface TableHeaderProps<T> {
  columns: Column<T>[];
  sortConfig: SortConfig<T>;
  onSort: (key: keyof T) => void;
  showSelect?: boolean;
  allSelected?: boolean;
  someSelected?: boolean;
  onSelectAll?: (checked: boolean) => void;
}

// ── TableRow ───────────────────────────────────────────────────────────────────
export interface TableRowProps<T> {
  row: T;
  columns: Column<T>[];
  rowKey: string;
  showSelect?: boolean;
  selected?: boolean;
  onSelectChange?: (key: string, checked: boolean) => void;
}