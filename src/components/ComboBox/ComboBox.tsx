import React, { useState, useRef, useEffect } from "react";
import {
    triggerStyle,
    dropdownStyle,
    triggerSearchInputStyle,
    optionStyle,
    optionActiveStyle,
    placeholderStyle,
    chevronStyle,
    chevronOpenStyle,
} from "./comboBoxStyling";
import type { ComboBoxProps } from "./types";

const ComboBox = ({
    options,
    value,
    onChange,
    placeholder = "Select an option...",
    disabled = false,
    className = "",
    styles = {},
}: ComboBoxProps) => {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const selected = options.find((o) => o.value === value);

    const filtered = query.trim()
        ? options.filter((o) =>
              o.label.toLowerCase().includes(query.toLowerCase()),
          )
        : options;

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (
                containerRef.current &&
                !containerRef.current.contains(e.target as Node)
            ) {
                setOpen(false);
                setQuery("");
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Focus the inline input when dropdown opens
    useEffect(() => {
        if (open) {
            inputRef.current?.focus();
        } else {
            setQuery("");
        }
    }, [open]);

    function handleSelect(val: string) {
        onChange?.(val);
        setOpen(false);
        setQuery("");
    }

    function handleKeyDown(e: React.KeyboardEvent) {
        if (e.key === "Escape") {
            setOpen(false);
            setQuery("");
        }
    }

    function handleTriggerClick() {
        if (!disabled) setOpen((prev) => !prev);
    }

    return (
        <div
            ref={containerRef}
            className={`relative w-full ${className}`}
            style={styles}
            onKeyDown={handleKeyDown}
        >
            {/* Trigger — now contains inline search input when open */}
            <div
                role="combobox"
                aria-expanded={open}
                aria-haspopup="listbox"
                onClick={handleTriggerClick}
                className={`${triggerStyle} ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
            >
                {open ? (
                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        placeholder={selected ? selected.label : placeholder}
                        className={triggerSearchInputStyle}
                    />
                ) : (
                    <span className={!selected ? placeholderStyle : ""}>
                        {selected ? selected.label : placeholder}
                    </span>
                )}

                <svg
                    className={`${chevronStyle} ${open ? chevronOpenStyle : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </div>

            {/* Dropdown — options only, no separate search bar */}
            {open && (
                <ul role="listbox" className={dropdownStyle}>
                    {filtered.length === 0 ? (
                        <li className="px-3 py-2 text-sm text-gray-400">
                            No results found.
                        </li>
                    ) : (
                        filtered.map((option) => (
                            <li
                                key={option.value}
                                role="option"
                                aria-selected={option.value === value}
                                onClick={() => handleSelect(option.value)}
                                className={`${optionStyle} ${option.value === value ? optionActiveStyle : ""}`}
                            >
                                <span>{option.label}</span>
                                {option.value === value && (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2.5}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-4 w-4 shrink-0"
                                    >
                                        <path d="M20 6L9 17l-5-5" />
                                    </svg>
                                )}
                            </li>
                        ))
                    )}
                </ul>
            )}
        </div>
    );
};

export default ComboBox;
