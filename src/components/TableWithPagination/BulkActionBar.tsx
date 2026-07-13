import React from "react";
import Button from "../Button/Button";
import type { BulkActionConfig, BulkActionsBarProps } from "./type";
import { tableStyles } from "./TablePaginationStyle";

export function BulkActionsBar<T>({
  selectedRows,
  selectedKeys,
  actions,
}: BulkActionsBarProps<T>) {
  // If nothing is selected or no actions exist, show nothing
  if (!selectedKeys.length || !actions.length) return null;

  return (
    <div className={tableStyles.bulkActionsBar}>
      {/* Show count of selected rows */}
      <span className={tableStyles.bulkActionsCount}>
        {selectedKeys.length} selected
      </span>

      {/* Render action buttons */}
      <div className={tableStyles.bulkActionsButtons}>
        {actions.map((action, i) => (
          <Button
            key={i}
            size="sm"
            variant={action.variant || "secondary"}
            content={action.label}
            onClick={() => action.onClick(selectedRows, selectedKeys)}
          />
        ))}
      </div>
    </div>
  );
}