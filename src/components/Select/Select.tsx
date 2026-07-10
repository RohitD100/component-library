import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
} from "react";
import { Icons } from "../icons/IconSvg";
import { useClickOutside } from "./useClickOutside";
import type {
  SelectData,
  SelectOption,
  SelectOptionGroup,
  SelectProps,
} from "./types";

const isGrouped = (options: SelectData): options is SelectOptionGroup[] =>
  options.length > 0 && "options" in options[0];

const flattenOptions = (options: SelectData): SelectOption[] =>
  isGrouped(options)
    ? options.flatMap((g) => g.options)
    : (options as SelectOption[]);

const cx = (...classes: Array<string | false | undefined>) =>
  classes.filter(Boolean).join(" ");

const borderClasses: Record<
  NonNullable<SelectProps["validationState"]>,
  string
> = {
  default:
    "border-violet-200 hover:border-violet-400 focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-500/20",
  error:
    "border-red-400 focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-500/20",
  success:
    "border-green-400 focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-500/20",
};

const Select = ({
  options,
  value,
  onChange,
  multiSelect = false,
  placeholder = "Select an option",
  clearable = false,
  disabled = false,
  validationState = "default",
  helperText,
  label,
  id,
  name,
  className,
  maxVisibleTags = 3,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const typeaheadRef = useRef("");
  const typeaheadTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  const generatedId = useId();
  const selectId = id ?? generatedId;
  const listboxId = `${selectId}-listbox`;

  useClickOutside(containerRef, () => setIsOpen(false));

  const grouped = useMemo(() => isGrouped(options), [options]);
  const flatOptions = useMemo(() => flattenOptions(options), [options]);

  const selectedValues = useMemo<string[]>(() => {
    if (Array.isArray(value)) return value;
    if (value) return [value];
    return [];
  }, [value]);

  const selectedOptions = useMemo(
    () => flatOptions.filter((opt) => selectedValues.includes(opt.value)),
    [flatOptions, selectedValues],
  );

  // When the list opens, land on the first selected (or first enabled) option.
  useEffect(() => {
    if (!isOpen) {
      setHighlightedIndex(-1);
      return;
    }
    const firstSelected = flatOptions.findIndex(
      (opt) => selectedValues.includes(opt.value) && !opt.disabled,
    );
    const firstEnabled = flatOptions.findIndex((opt) => !opt.disabled);
    setHighlightedIndex(firstSelected !== -1 ? firstSelected : firstEnabled);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || highlightedIndex < 0) return;
    listRef.current
      ?.querySelector<HTMLElement>(`[data-index="${highlightedIndex}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [highlightedIndex, isOpen]);

  const commitSelect = useCallback(
    (option: SelectOption) => {
      if (option.disabled) return;
      if (multiSelect) {
        const exists = selectedValues.includes(option.value);
        onChange(
          exists
            ? selectedValues.filter((v) => v !== option.value)
            : [...selectedValues, option.value],
        );
      } else {
        onChange(option.value);
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    },
    [multiSelect, onChange, selectedValues],
  );

  const handleClear = (event: MouseEvent) => {
    event.stopPropagation();
    onChange(multiSelect ? [] : "");
  };

  const handleRemoveTag = (event: MouseEvent, val: string) => {
    event.stopPropagation();
    onChange(selectedValues.filter((v) => v !== val));
  };

  const moveHighlight = (direction: 1 | -1) => {
    if (flatOptions.length === 0) return;
    let next = highlightedIndex;
    for (let i = 0; i < flatOptions.length; i++) {
      next = (next + direction + flatOptions.length) % flatOptions.length;
      if (!flatOptions[next].disabled) break;
    }
    setHighlightedIndex(next);
  };

  const handleTypeahead = (char: string) => {
    window.clearTimeout(typeaheadTimer.current);
    typeaheadRef.current += char.toLowerCase();
    const match = flatOptions.findIndex((opt) =>
      opt.label.toLowerCase().startsWith(typeaheadRef.current),
    );
    if (match !== -1) setHighlightedIndex(match);
    typeaheadTimer.current = setTimeout(() => {
      typeaheadRef.current = "";
    }, 500);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) return;

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        isOpen ? moveHighlight(1) : setIsOpen(true);
        break;
      case "ArrowUp":
        event.preventDefault();
        isOpen ? moveHighlight(-1) : setIsOpen(true);
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        if (!isOpen) setIsOpen(true);
        else if (highlightedIndex >= 0)
          commitSelect(flatOptions[highlightedIndex]);
        break;
      case "Escape":
        if (isOpen) {
          event.preventDefault();
          setIsOpen(false);
          triggerRef.current?.focus();
        }
        break;
      case "Tab":
        setIsOpen(false);
        break;
      case "Home":
        if (isOpen) {
          event.preventDefault();
          const first = flatOptions.findIndex((o) => !o.disabled);
          if (first !== -1) setHighlightedIndex(first);
        }
        break;
      case "End":
        if (isOpen) {
          event.preventDefault();
          for (let i = flatOptions.length - 1; i >= 0; i--) {
            if (!flatOptions[i].disabled) {
              setHighlightedIndex(i);
              break;
            }
          }
        }
        break;
      default:
        if (event.key.length === 1 && /[a-z0-9]/i.test(event.key)) {
          if (!isOpen) setIsOpen(true);
          handleTypeahead(event.key);
        }
        break;
    }
  };

  // Shared running index across groups, since options are rendered per-group
  // but keyboard navigation treats them as one flat, ordered list.
  let cursor = -1;

  const renderOption = (option: SelectOption) => {
    cursor += 1;
    const index = cursor;
    const isSelected = selectedValues.includes(option.value);
    const isHighlighted = index === highlightedIndex;

    return (
      <li
        key={option.value}
        id={`${selectId}-option-${index}`}
        data-index={index}
        role="option"
        aria-selected={isSelected}
        aria-disabled={option.disabled}
        onMouseEnter={() => !option.disabled && setHighlightedIndex(index)}
        onClick={() => commitSelect(option)}
        className={cx(
          "flex items-center justify-between gap-2 px-3 py-2 text-sm transition-colors",
          option.disabled
            ? "cursor-not-allowed text-gray-300"
            : cx(
                "cursor-pointer",
                isSelected
                  ? "bg-violet-600 text-white"
                  : isHighlighted
                    ? "bg-violet-50 text-violet-700"
                    : "text-gray-700",
              ),
        )}
      >
        <span className="flex min-w-0 items-center gap-2">
          {option.icon && <span className="shrink-0">{option.icon}</span>}
          <span className="truncate">{option.label}</span>
        </span>
        {isSelected && (
          <span className="h-4 w-4 shrink-0">
            <Icons.check />
          </span>
        )}
      </li>
    );
  };

  return (
    <div className={cx("relative w-full", className)} ref={containerRef}>
      {label && (
        <label
          htmlFor={selectId}
          className="mb-1.5 block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}

      <button
        ref={triggerRef}
        id={selectId}
        type="button"
        name={name}
        disabled={disabled}
        onClick={() => !disabled && setIsOpen((v) => !v)}
        onKeyDown={handleKeyDown}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls={listboxId}
        aria-invalid={validationState === "error"}
        aria-describedby={helperText ? `${selectId}-helper` : undefined}
        className={cx(
          "flex w-full items-center justify-between gap-2 rounded-xl border bg-white px-3 py-2.5 text-left text-sm shadow-sm outline-none transition-colors",
          disabled
            ? "cursor-not-allowed border-gray-200 bg-gray-50 text-gray-400"
            : borderClasses[validationState],
        )}
      >
        <span className="flex min-w-0 flex-1 flex-wrap items-center gap-1">
          {selectedOptions.length === 0 && (
            <span className="text-gray-400">{placeholder}</span>
          )}

          {multiSelect
            ? selectedOptions.slice(0, maxVisibleTags).map((opt) => (
                <span
                  key={opt.value}
                  className="flex items-center gap-1 rounded-md bg-violet-100 px-2 py-0.5 text-xs font-medium text-violet-700"
                >
                  {opt.label}
                  {!disabled && (
                    <span
                      className="h-3 w-3 cursor-pointer hover:text-violet-900"
                      onClick={(e) => handleRemoveTag(e, opt.value)}
                    >
                      <Icons.close />
                    </span>
                  )}
                </span>
              ))
            : selectedOptions[0] && (
                <span className="truncate text-gray-900">
                  {selectedOptions[0].label}
                </span>
              )}

          {multiSelect && selectedOptions.length > maxVisibleTags && (
            <span className="rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
              +{selectedOptions.length - maxVisibleTags} more
            </span>
          )}
        </span>

        <span className="flex shrink-0 items-center gap-1">
          {clearable && selectedValues.length > 0 && !disabled && (
            <span
              className="h-4 w-4 cursor-pointer text-gray-400 hover:text-gray-600"
              onClick={handleClear}
            >
              <Icons.close />
            </span>
          )}
          <span
            className={cx(
              "h-4 w-4 text-gray-400 transition-transform",
              isOpen && "rotate-180",
            )}
          >
            <Icons.chevronDown />
          </span>
        </span>
      </button>

      {isOpen && (
        <ul
          ref={listRef}
          id={listboxId}
          role="listbox"
          aria-multiselectable={multiSelect}
          className="absolute z-20 mt-1 max-h-64 w-full overflow-auto rounded-xl border border-violet-100 bg-white py-1 shadow-lg shadow-violet-500/10"
        >
          {flatOptions.length === 0 && (
            <li className="px-3 py-6 text-center text-sm text-gray-400">
              No options available
            </li>
          )}

          {grouped
            ? (options as SelectOptionGroup[]).map((group) => (
                <li key={group.label} role="group" aria-label={group.label}>
                  <div className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-violet-500">
                    {group.label}
                  </div>
                  <ul>{group.options.map(renderOption)}</ul>
                </li>
              ))
            : (options as SelectOption[]).map(renderOption)}
        </ul>
      )}

      {helperText && (
        <p
          id={`${selectId}-helper`}
          className={cx(
            "mt-1.5 text-xs",
            validationState === "error"
              ? "text-red-500"
              : validationState === "success"
                ? "text-green-600"
                : "text-gray-500",
          )}
        >
          {helperText}
        </p>
      )}
    </div>
  );
};

export default Select;
