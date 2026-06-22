import { useState } from "react";
import ComboBox from "./ComboBox";

const frameworkOptions = [
    { label: "React", value: "react" },
    { label: "Vue", value: "vue" },
    { label: "Svelte", value: "svelte" },
    { label: "Angular", value: "angular" },
    { label: "SolidJS", value: "solidjs" },
];

const ComboBoxDemo = () => {
    const [selected, setSelected] = useState<string | undefined>(undefined);
    return (
        <ComboBox
            options={frameworkOptions}
            value={selected}
            onChange={setSelected}
            placeholder="Select a framework..."
        />
    );
};

export default ComboBoxDemo;
