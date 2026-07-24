
import Button from "../Button/Button";
import type { BulkActionsBarProps } from "./type";
import {
  bulkActionsBarStyle,
  bulkActionsCountStyle,
  bulkActionsButtonsStyle,
} from "./TablePaginationStyle";

// ── Bulk Actions Bar Component ───────────────────────────
export function BulkActionsBar<T>({
  selectedRows,
  selectedKeys,
  actions,
}: BulkActionsBarProps<T>) {
  // If nothing is selected or no actions exist, show nothing
  if (!selectedKeys.length || !actions.length) return null;

  return (
    <div className={bulkActionsBarStyle}>
      {/* Show count of selected rows */}
      <span className={bulkActionsCountStyle}>
        {selectedKeys.length} selected
      </span>

      {/* Render action buttons */}
      <div className={bulkActionsButtonsStyle}>
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