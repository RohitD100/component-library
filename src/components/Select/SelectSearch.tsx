// SelectSearch.tsx

import type { ChangeEvent } from "react";
import type { SelectSearchProps } from "./Select.types";

const SelectSearch = ({
  value,
  onChange,
  placeholder = "Search...",
}: SelectSearchProps) => {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    onChange(e.target.value);
  };

  return (
    <div className="select-search-wrapper">
      <input
        type="text"
        className="select-search"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        role="searchbox"
        aria-label="Search options"
      />
    </div>
  );
};

export default SelectSearch;