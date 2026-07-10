import type { BulkActionConfig } from "./type";

export function createDeleteAction<T>(onDelete: (keys: string[]) => void): BulkActionConfig<T> {
  return {
    label: "Delete",
    variant: "danger",
    onClick: (_rows, keys) => onDelete(keys),
  };
}