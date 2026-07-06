import type { SortDirection } from "./type";

// ── Substring search ───────────────────────────────────────────────────────────
export function substringSearch<T>(arr: T[], key: keyof T, target: string): T[] {
  const lower = target.toLowerCase();
  return arr.filter((item) =>
    (item[key]?.toString().toLowerCase() ?? "").includes(lower)
  );
}

// ── Merge sort ─────────────────────────────────────────────────────────────────
export function mergeSort<T>(arr: T[], key: keyof T, direction: "asc" | "desc"): T[] {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid), key, direction);
  const right = mergeSort(arr.slice(mid), key, direction);
  return merge(left, right, key, direction);
}

function merge<T>(left: T[], right: T[], key: keyof T, direction: "asc" | "desc"): T[] {
  const result: T[] = [];
  let i = 0, j = 0;
  while (i < left.length && j < right.length) {
    const a = left[i][key]?.toString().toLowerCase() ?? "";
    const b = right[j][key]?.toString().toLowerCase() ?? "";
    (direction === "asc" ? a <= b : a >= b) ? result.push(left[i++]) : result.push(right[j++]);
  }
  return [...result, ...left.slice(i), ...right.slice(j)];
}

// ── Pagination page list ───────────────────────────────────────────────────────
export function getPageList(currentPage: number, totalPages: number): (number | "ellipsis")[] {
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