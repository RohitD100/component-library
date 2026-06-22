import React, { useState, useRef, useEffect, useCallback } from "react";
import {
    popupBase,
    popupVariant,
    titleVariant,
    iconVariant,
    placementClass,
    triggerButtonBase,
} from "./helpPopupStyling";
import type { HelpPopupProps } from "./types";

const DefaultTrigger = ({ variant }: { variant: string }) => (
    <span
        className={`${triggerButtonBase} ${variant} bg-gray-100`}
        aria-label="Help"
    >
        ?
    </span>
);

const HelpPopup = ({
    content,
    title,
    trigger,
    triggerType = "click",
    placement = "bottom",
    variant = "default",
    defaultOpen = false,
    className = "",
    styles = {},
}: HelpPopupProps) => {
    const [open, setOpen] = useState(defaultOpen);
    const containerRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const close = useCallback(() => setOpen(false), []);

    useEffect(() => {
        if (triggerType !== "click") return;
        function handleClickOutside(e: MouseEvent) {
            if (
                containerRef.current &&
                !containerRef.current.contains(e.target as Node)
            ) {
                close();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [triggerType, close]);

    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") close();
        }
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [close]);

    const hoverHandlers =
        triggerType === "hover"
            ? {
                  onMouseEnter: () => {
                      if (timeoutRef.current) clearTimeout(timeoutRef.current);
                      setOpen(true);
                  },
                  onMouseLeave: () => {
                      timeoutRef.current = setTimeout(
                          () => setOpen(false),
                          150,
                      );
                  },
              }
            : {};

    const clickHandlers =
        triggerType === "click"
            ? {
                  onClick: () => setOpen((prev) => !prev),
              }
            : {};

    return (
        <div
            ref={containerRef}
            className={`relative inline-flex items-center ${className}`}
            style={styles}
            {...hoverHandlers}
        >
            <div
                role={triggerType === "click" ? "button" : undefined}
                aria-expanded={triggerType === "click" ? open : undefined}
                aria-haspopup={triggerType === "click" ? "true" : undefined}
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setOpen((prev) => !prev);
                    }
                }}
                {...clickHandlers}
            >
                {trigger ?? <DefaultTrigger variant={iconVariant[variant]} />}
            </div>

            {open && (
                <div
                    role="tooltip"
                    aria-live="polite"
                    className={`${popupBase} ${popupVariant[variant]} ${placementClass[placement]}`}
                >
                    {triggerType === "click" && (
                        <button
                            onClick={close}
                            aria-label="Close"
                            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-3.5 w-3.5"
                            >
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>
                    )}

                    {title && (
                        <p
                            className={`font-semibold text-sm mb-1 pr-5 ${titleVariant[variant]}`}
                        >
                            {title}
                        </p>
                    )}
                    <div className="text-sm leading-relaxed">{content}</div>
                </div>
            )}
        </div>
    );
};

export default HelpPopup;
