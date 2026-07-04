import React from "react";
import { useHighlight } from "./HighlightContext";

interface HighlightProps {
  text: string;
}

export function Highlight({ text }: HighlightProps) {
  const { query, highlight } = useHighlight();

  // If highlight off or no query, return plain text
  if (!highlight || !query.trim()) return <>{text}</>;

  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escaped})`, "gi");
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark
            key={i}
            className="bg-violet-200 text-violet-900 rounded-sm px-0.5 font-medium not-italic"
          >
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}