// SelectTag.tsx

import type { MouseEvent } from "react";
import type { SelectTagProps } from "./Select.types";

const SelectTag = ({
  label,
  value,
  onRemove,
}: SelectTagProps) => {
  const handleRemove = (
    e: MouseEvent<HTMLButtonElement>
  ): void => {
    e.stopPropagation();
    onRemove(value);
  };

  return (
    <div className="select-tag">
      <span className="select-tag-label">
        {label}
      </span>

      <button
        type="button"
        className="select-tag-remove"
        onClick={handleRemove}
        aria-label={`Remove ${label}`}
      >
        ×
      </button>
    </div>
  );
};

export default SelectTag;