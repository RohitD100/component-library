import { createContext, useContext } from "react";
import type { HighlightContextValue } from "./type";

export const HighlightContext = createContext<HighlightContextValue>({
  query: "",
  highlight: false,
});

export const useHighlight = () => useContext(HighlightContext);