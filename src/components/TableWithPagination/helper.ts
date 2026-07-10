// ── Substring search ──
// Find items where a field contains the target text
export function substringSearch<T>(arr: T[], key: keyof T, target: string): T[] {
  const search = target.toLowerCase();
  return arr.filter(item =>
    String(item[key] ?? "").toLowerCase().includes(search)
  );
}

// ── Merge sort ──
// Sort an array of objects by a given field
export function mergeSort<T>(arr: T[], key: keyof T, dir: "asc" | "desc"): T[] {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid), key, dir);
  const right = mergeSort(arr.slice(mid), key, dir);

  return merge(left, right, key, dir);
}

function merge<T>(left: T[], right: T[], key: keyof T, dir: "asc" | "desc"): T[] {
  const result: T[] = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    const a = String(left[i][key] ?? "").toLowerCase();
    const b = String(right[j][key] ?? "").toLowerCase();

    const takeLeft = dir === "asc" ? a <= b : a >= b;
    result.push(takeLeft ? left[i++] : right[j++]);
  }

  return result.concat(left.slice(i), right.slice(j));
}

// ── Pagination page list ──
// Build a list of page numbers with ellipsis
export function getPageList(current: number, total: number): (number | "ellipsis")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const pages: (number | "ellipsis")[] = [1];

  if (current > 3) pages.push("ellipsis");

  for (let p = Math.max(2, current - 1); p <= Math.min(total - 1, current + 1); p++) {
    pages.push(p);
  }

  if (current < total - 2) pages.push("ellipsis");

  pages.push(total);
  return pages;
}
