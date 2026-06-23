import { useMemo, useState } from "react";
import type {
SelectProps,
SelectOption,
SelectOptionGroup,
} from "./types";
import { selectStyles } from "./selectStyle";

const Select = ({
options,
value,
onChange,
multiSelect = false,
placeholder = "Select an option",
clearable = false,
disabled = false,
}: SelectProps) => {
const [isOpen, setIsOpen] = useState(false);

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
multiSelect ? onChange([]) : onChange("");
};

return ( <div style={selectStyles.container}>
<div
style={selectStyles.control}
onClick={() =>
!disabled && setIsOpen(!isOpen)
}
> <span>
{selectedValues.length
? selectedValues.join(", ")
: placeholder} </span>

```
    <span>{isOpen ? "▲" : "▼"}</span>
  </div>

  {isOpen && (
    <div style={selectStyles.dropdown}>
      {clearable &&
        selectedValues.length > 0 && (
          <button
            style={selectStyles.clearButton}
            onClick={handleClear}
          >
            Clear
          </button>
        )}

      {options.length > 0 &&
      "options" in options[0]
        ? (
            options as SelectOptionGroup[]
          ).map((group) => (
            <div key={group.label}>
              <div style={selectStyles.groupLabel}>
                {group.label}
              </div>

              {group.options.map((option) => (
                <div
                  key={option.value}
                  style={{
                    ...selectStyles.option,
                    ...(selectedValues.includes(
                      option.value
                    )
                      ? selectStyles.selectedOption
                      : {}),
                    ...(option.disabled
                      ? selectStyles.disabledOption
                      : {}),
                  }}
                  onMouseEnter={(e) => {
                    if (
                      !selectedValues.includes(
                        option.value
                      )
                    ) {
                      e.currentTarget.style.backgroundColor =
                        "#eff6ff";
                      e.currentTarget.style.color =
                        "#2563eb";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (
                      !selectedValues.includes(
                        option.value
                      )
                    ) {
                      e.currentTarget.style.backgroundColor =
                        "#fff";
                      e.currentTarget.style.color =
                        "#111827";
                    }
                  }}
                  onClick={() =>
                    !option.disabled &&
                    handleSelect(option.value)
                  }
                >
                  <span>{option.label}</span>

                  {selectedValues.includes(
                    option.value
                  ) && <span>✓</span>}
                </div>
              ))}
            </div>
          ))
        : (
            options as SelectOption[]
          ).map((option) => (
            <div
              key={option.value}
              style={{
                ...selectStyles.option,
                ...(selectedValues.includes(
                  option.value
                )
                  ? selectStyles.selectedOption
                  : {}),
                ...(option.disabled
                  ? selectStyles.disabledOption
                  : {}),
              }}
              onMouseEnter={(e) => {
                if (
                  !selectedValues.includes(
                    option.value
                  )
                ) {
                  e.currentTarget.style.backgroundColor =
                    "#eff6ff";
                  e.currentTarget.style.color =
                    "#2563eb";
                }
              }}
              onMouseLeave={(e) => {
                if (
                  !selectedValues.includes(
                    option.value
                  )
                ) {
                  e.currentTarget.style.backgroundColor =
                    "#fff";
                  e.currentTarget.style.color =
                    "#111827";
                }
              }}
              onClick={() =>
                !option.disabled &&
                handleSelect(option.value)
              }
            >
              <span>{option.label}</span>

              {selectedValues.includes(
                option.value
              ) && <span>✓</span>}
            </div>
          ))}
    </div>
  )}
</div>


);
};

export default Select;
