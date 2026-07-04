import type { ReactNode } from "react";

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
  // Data
  columns: Column<T>[];
  data: T[];

  // Key
  keyExtractor: (row: T) => string;

  // Pagination
  pageSize?: number;

  // UI
  emptyState?: string;

  // Search
  query?: string;
  //it is for defining the key of the column
  binarySearchKey?: keyof T;

  //for checkbox
  select ?: boolean;

  //for searchbox to appear or not
  search ?: boolean;
  highlight?: boolean;
}