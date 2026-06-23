
// Select.tsx

import { useMemo, useState } from "react";
import "./Select.css";

import type {
  SelectProps,
  SelectOption,
  SelectOptionGroup,
} from "./Select.types";

const Select = ({
  options,
  value,
  onChange,
  multiSelect = false,
  placeholder = "Select an option",
  searchable = false,
  clearable = false,
  disabled = false,
  validationState = "default",
  theme = "light",
  className = "",
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const selectedValues = useMemo<string[]>((() => {
    if (Array.isArray(value)) return value;
    if (value) return [value];
    return [];
  }), [value]);

  const handleSelect = (optionValue: string) => {
    if (disabled) return;

    if (multiSelect) {
      const exists = selectedValues.includes(optionValue);

      const updatedValues = exists
        ? selectedValues.filter(
            (item) => item !== optionValue
          )
        : [...selectedValues, optionValue];

      onChange(updatedValues);
    } else {
      onChange(optionValue);
      setIsOpen(false);
    }
  };

  const handleClear = () => {
    if (disabled) return;

    if (multiSelect) {
      onChange([]);
    } else {
      onChange("");
    }
  };

  const filteredOptions = useMemo(() => {
    if (
      options.length > 0 &&
      "options" in options[0]
    ) {
      return (options as SelectOptionGroup[]).map(
        (group) => ({
          ...group,
          options: group.options.filter((option) =>
            option.label
              .toLowerCase()
              .includes(searchValue.toLowerCase())
          ),
        })
      );
    }

    return (options as SelectOption[]).filter(
      (option) =>
        option.label
          .toLowerCase()
          .includes(searchValue.toLowerCase())
    );
  }, [options, searchValue]);

  return (
    <div
      className={`select ${validationState} ${theme} ${className}`}
    >
      <div
        className={`select-control ${
          disabled ? "disabled" : ""
        }`}
        onClick={() =>
          !disabled && setIsOpen(!isOpen)
        }
      >
        <span>
          {selectedValues.length > 0
            ? selectedValues.join(", ")
            : placeholder}
        </span>

        <span className="arrow">
          {isOpen ? "▲" : "▼"}
        </span>
      </div>

      {isOpen && (
        <div className="select-dropdown">
          {searchable && (
            <div className="select-search-wrapper">
              <input
                type="text"
                className="select-search"
                value={searchValue}
                placeholder="Search..."
                onChange={(e) =>
                  setSearchValue(e.target.value)
                }
              />
            </div>
          )}

          {clearable &&
            selectedValues.length > 0 && (
              <button
                type="button"
                className="clear-btn"
                onClick={handleClear}
              >
                Clear
              </button>
            )}

          {filteredOptions.length > 0 &&
          "options" in filteredOptions[0]
            ? (
                filteredOptions as SelectOptionGroup[]
              ).map((group) => (
                <div key={group.label}>
                  <div className="select-group-label">
                    {group.label}
                  </div>

                  {group.options.map((option) => (
                    <div
                      key={option.value}
                      className={`select-option ${
                        selectedValues.includes(
                          option.value
                        )
                          ? "selected"
                          : ""
                      } ${
                        option.disabled
                          ? "disabled"
                          : ""
                      }`}
                      onClick={() =>
                        !option.disabled &&
                        handleSelect(option.value)
                      }
                    >
                      {option.icon && (
                        <span className="select-option-icon">
                          {option.icon}
                        </span>
                      )}

                      <span>
                        {option.label}
                      </span>

                      {selectedValues.includes(
                        option.value
                      ) && (
                        <span className="select-option-check">
                          ✓
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              ))
            : (
                filteredOptions as SelectOption[]
              ).map((option) => (
                <div
                  key={option.value}
                  className={`select-option ${
                    selectedValues.includes(
                      option.value
                    )
                      ? "selected"
                      : ""
                  } ${
                    option.disabled
                      ? "disabled"
                      : ""
                  }`}
                  onClick={() =>
                    !option.disabled &&
                    handleSelect(option.value)
                  }
                >
                  {option.icon && (
                    <span className="select-option-icon">
                      {option.icon}
                    </span>
                  )}

                  <span>
                    {option.label}
                  </span>

                  {selectedValues.includes(
                    option.value
                  ) && (
                    <span className="select-option-check">
                      ✓
                    </span>
                  )}
                </div>
              ))}
        </div>
      )}
    </div>
  );
};

export default Select;

