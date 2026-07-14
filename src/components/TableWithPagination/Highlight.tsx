import React from "react";
import type { HighlightProps } from "./type";
import { highlightMarkStyle } from "./TablePaginationStyle";

// ── Highlight Search Matches in Text ─────────────────────
export function Highlight({ text, query }: HighlightProps) {
  // If there's no search text, just show the original text
  if (!query.trim()) {
    return <>{text}</>;
  }

  // Escape special regex characters in the query
  const safeQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  // Build a case-insensitive regex to find matches
  const regex = new RegExp(`(${safeQuery})`, "gi");

  // Split the text into matching and non-matching parts
  const parts = text.split(regex);

  // Render each part: highlight matches, show others normally
  return (
    <>
      {parts.map((part, i) => {
        const isMatch = part.toLowerCase() === query.toLowerCase();

        if (isMatch) {
          return (
            <mark key={i} className={highlightMarkStyle}>
              {part}
            </mark>
          );
        }

        return <span key={i}>{part}</span>;
      })}
    </>
  );
}