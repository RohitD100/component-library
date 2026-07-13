import type { ReactNode } from "react";

// ── Sorting ─────────────────────────────────────────────
// Direction of sorting: ascending, descending, or none
export type sortDirection = "asc" | "desc" | "none";

// A column in the table
export type Column<T> = {
  key: keyof T;                  // which field of the data this column shows
  label: string;                 // text shown in the header
  render?: (row: T) => ReactNode; // optional custom display for each cell
  sortable?: boolean;            // can this column be sorted?
};

// Current sorting state
export type SortConfig<T> = {
  key: keyof T | null;           // which column is sorted
  direction: sortDirection;      // asc / desc / none
};

// ── Table with Pagination ───────────────────────────────
// Main props for the table component
export interface TablePaginationProps<T> {
  columns: Column<T>[];          // list of columns
  data: T[];                     // all rows of data
  keyExtractor: (row: T) => string; // unique key for each row
  pageSize?: number;             // rows per page
  emptyState?: string;           // message when no data
  query?: string;                // search text
  binarySearchKey?: keyof T;     // field used for fast search
  select?: boolean;              // enable row selection
  search?: boolean;              // enable search bar
  highlight?: boolean;           // highlight search matches
  enableBulkActions?: boolean;   // show bulk action buttons
  bulkActions?: BulkActionConfig<T>[]; // list of bulk actions

  // ── Sorting (now controlled externally via props) ──────
  sortKey?: keyof T;              // which field to sort by
  sortDirection?: sortDirection;  // "asc" | "desc" | "none"
}

// ── Highlight ───────────────────────────────────────────
// Used to highlight search matches in text
export interface HighlightProps {
  text: string;
  query: string;
}

// ── Pagination Controls ─────────────────────────────────
export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

// ── Search Bar ──────────────────────────────────────────
export interface SearchProps {
  query: string;
  onChange: (value: string) => void;
  placeholder?: string;
  highlight?: boolean;
}

// ── Selection (Checkboxes) ──────────────────────────────
export interface SelectHeaderProps {
  checked: boolean;              // all rows selected?
  indeterminate?: boolean;       // some rows selected?
  onChange: (checked: boolean) => void;
}

export interface SelectCellProps {
  rowKey: string;                // unique row id
  checked: boolean;              // is this row selected?
  onChange: (key: string, checked: boolean) => void;
}

// ── Table Header ────────────────────────────────────────
export interface TableHeaderProps<T> {
  columns: Column<T>[];          // list of columns
  

  // Optional selection controls
  showSelect?: boolean;
  allSelected?: boolean;
  someSelected?: boolean;
  onSelectAll?: (checked: boolean) => void;
}

// ── Table Row ───────────────────────────────────────────
export interface TableRowProps<T> {
  row: T;                        // data for this row
  columns: Column<T>[];          // columns to display
  rowKey: string;                // unique id
  showSelect?: boolean;          // show checkbox?
  selected?: boolean;            // is row selected?
  onSelectChange?: (key: string, checked: boolean) => void;
  query?: string;                // search text
  highlight?: boolean;           // highlight matches?
}

// ── Bulk Actions ────────────────────────────────────────
export interface BulkActionConfig<T> {
  label: string;                 // button text
  variant?: "primary" | "secondary" | "danger"; // style
  onClick: (selectedRows: T[], selectedKeys: string[]) => void;
}
export interface BulkActionsBarProps<T> {
  selectedRows: T[];
  selectedKeys: string[];
  actions: BulkActionConfig<T>[];
}
