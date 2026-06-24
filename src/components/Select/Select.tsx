import { useEffect, useMemo, useRef, useState } from "react";
import type { SelectProps, SelectOption, SelectOptionGroup } from "./types";
import { selectStyles } from "./selectStyle";

const Select = ({
  options,
  value,
  onChange,
  multiSelect = false,
  placeholder = "Select an option",
  clearable = false,
  disabled = false,
  validationState = "default",
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectedValues = useMemo<string[]>(() => {
    if (Array.isArray(value)) return value;
    if (value) return [value];
    return [];
  }, [value]);

  const handleSelect = (optionValue: string) => {
    if (disabled) return;

    if (multiSelect) {
      const exists = selectedValues.includes(optionValue);

      const updatedValues = exists
        ? selectedValues.filter((item) => item !== optionValue)
        : [...selectedValues, optionValue];

      onChange(updatedValues);
    } else {
      onChange(optionValue);
      setIsOpen(false);
    }
  };

  const handleClear = () => {
    multiSelect ? onChange([]) : onChange("");
  };

  return (
    <div ref={selectRef} style={selectStyles.container}>
      <div
        style={{
          ...selectStyles.control,
          ...(validationState === "error"
            ? selectStyles.controlError
            : validationState === "success"
              ? selectStyles.controlSuccess
              : isOpen
                ? selectStyles.controlActive
                : {}),
        }}
        onMouseEnter={(e) => {
          if (validationState === "default" && !isOpen) {
            Object.assign(e.currentTarget.style, selectStyles.controlHover);
          }
        }}
        onMouseLeave={(e) => {
          if (validationState === "default" && !isOpen) {
            e.currentTarget.style.border = "1px solid #C4B5FD";
            e.currentTarget.style.boxShadow =
              "0 2px 8px rgba(139, 92, 246, 0.1)";
          }
        }}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <span>
          {selectedValues.length ? selectedValues.join(", ") : placeholder}
        </span>

        <span>{isOpen ? "▲" : "▼"}</span>
      </div>

      {isOpen && (
        <div style={selectStyles.dropdown}>
          {clearable && selectedValues.length > 0 && (
            <button style={selectStyles.clearButton} onClick={handleClear}>
              Clear
            </button>
          )}

          {options.length > 0 && "options" in options[0]
            ? (options as SelectOptionGroup[]).map((group) => (
                <div key={group.label}>
                  <div style={selectStyles.groupLabel}>{group.label}</div>

                  {group.options.map((option) => (
                    <div
                      key={option.value}
                      style={{
                        ...selectStyles.option,
                        ...(selectedValues.includes(option.value)
                          ? selectStyles.selectedOption
                          : {}),
                        ...(option.disabled ? selectStyles.disabledOption : {}),
                      }}
                      onMouseEnter={(e) => {
                        if (!selectedValues.includes(option.value)) {
                          Object.assign(
                            e.currentTarget.style,
                            selectStyles.hoverOption,
                          );
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!selectedValues.includes(option.value)) {
                          e.currentTarget.style.backgroundColor = "#FFFFFF";
                          e.currentTarget.style.color = "#111827";
                          e.currentTarget.style.borderLeft =
                            "3px solid transparent";
                          e.currentTarget.style.transform = "translateX(0)";
                        }
                      }}
                      onClick={() =>
                        !option.disabled && handleSelect(option.value)
                      }
                    >
                      <span>{option.label}</span>

                      {selectedValues.includes(option.value) && <span>✓</span>}
                    </div>
                  ))}
                </div>
              ))
            : (options as SelectOption[]).map((option) => (
                <div
                  key={option.value}
                  style={{
                    ...selectStyles.option,
                    ...(selectedValues.includes(option.value)
                      ? selectStyles.selectedOption
                      : {}),
                    ...(option.disabled ? selectStyles.disabledOption : {}),
                  }}
                  onMouseEnter={(e) => {
                    if (!selectedValues.includes(option.value)) {
                      Object.assign(
                        e.currentTarget.style,
                        selectStyles.hoverOption,
                      );
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!selectedValues.includes(option.value)) {
                      e.currentTarget.style.backgroundColor = "#FFFFFF";
                      e.currentTarget.style.color = "#111827";
                      e.currentTarget.style.borderLeft =
                        "3px solid transparent";
                      e.currentTarget.style.transform = "translateX(0)";
                    }
                  }}
                  onClick={() => !option.disabled && handleSelect(option.value)}
                >
                  <span>{option.label}</span>

                  {selectedValues.includes(option.value) && <span>✓</span>}
                </div>
              ))}
        </div>
      )}
    </div>
  );
};

export default Select;
