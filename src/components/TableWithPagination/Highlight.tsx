import React from "react";
import type { HighlightProps } from "./type";
import { useHighlight } from "./HighlightContext";

export function Highlight({ text }: HighlightProps) {
  const { query, highlight } = useHighlight();

  if (!highlight || !query.trim()) return <>{text}</>;

  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escaped})`, "gi");
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <mark key={i} className="bg-violet-200 text-violet-900 rounded-sm px-0.5 font-medium not-italic">
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}