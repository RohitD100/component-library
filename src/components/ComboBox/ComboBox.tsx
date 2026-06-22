import React, { useState, useRef, useEffect } from "react";
import {
    triggerStyle,
    dropdownStyle,
    searchInputStyle,
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

    return (
        <div
            ref={containerRef}
            className={`relative w-full ${className}`}
            style={styles}
            onKeyDown={handleKeyDown}
        >
            <button
                type="button"
                role="combobox"
                aria-expanded={open}
                aria-haspopup="listbox"
                disabled={disabled}
                onClick={() => setOpen((prev) => !prev)}
                className={triggerStyle}
            >
                <span className={!selected ? placeholderStyle : ""}>
                    {selected ? selected.label : placeholder}
                </span>
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
            </button>

            {open && (
                <div role="listbox" className={dropdownStyle}>
                    <div className="p-2 border-b border-gray-100">
                        <input
                            autoFocus
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search..."
                            className={searchInputStyle}
                        />
                    </div>

                    <ul className="max-h-48 overflow-y-auto p-1">
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
                </div>
            )}
        </div>
    );
};

export default ComboBox;
