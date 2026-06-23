// SelectOption.tsx

import type { KeyboardEvent } from "react";
import type { SelectOptionProps } from "./Select.types";

const SelectOption = ({
  option,
  selected,
  onSelect,
}: SelectOptionProps) => {
  const handleClick = () => {
    if (!option.disabled) {
      onSelect(option.value);
    }
  };

  const handleKeyDown = (
    e: KeyboardEvent<HTMLDivElement>
  ) => {
    if (option.disabled) return;

    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect(option.value);
    }
  };

  return (
    <div
      className={`select-option ${
        selected ? "selected" : ""
      } ${option.disabled ? "disabled" : ""}`}
      role="option"
      aria-selected={selected}
      aria-disabled={option.disabled}
      tabIndex={option.disabled ? -1 : 0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      {option.icon && (
        <span className="select-option-icon">
          {option.icon}
        </span>
      )}

      <span className="select-option-label">
        {option.label}
      </span>

      {selected && (
        <span className="select-option-check">
          ✓
        </span>
      )}
    </div>
  );
};

export default SelectOption;