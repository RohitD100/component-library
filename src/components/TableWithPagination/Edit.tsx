import type { BulkActionConfig } from "./type";

export function createEditAction<T>(onEdit: (rows: T[]) => void): BulkActionConfig<T> {
  return {
    label: "Edit",
    variant: "primary",
    onClick: (rows) => onEdit(rows),
  };
}