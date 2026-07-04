import { createContext, useContext } from "react";

interface HighlightContextValue {
  query: string;
  highlight: boolean;
}

export const HighlightContext = createContext<HighlightContextValue>({
  query: "",
  highlight: false,
});

export const useHighlight = () => useContext(HighlightContext);