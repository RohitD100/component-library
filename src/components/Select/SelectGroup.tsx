// SelectGroup.tsx

import SelectOption from "./SelectOption";
import type { SelectGroupProps } from "./Select.types";

const SelectGroup = ({
  group,
  selectedValues,
  onSelect,
}: SelectGroupProps) => {
  return (
    <div className="select-group">
      <div className="select-group-label">
        {group.label}
      </div>

      <div className="select-group-options">
        {group.options.map((option) => (
          <SelectOption
            key={option.value}
            option={option}
            selected={selectedValues.includes(option.value)}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectGroup;