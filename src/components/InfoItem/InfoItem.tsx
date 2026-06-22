import React from "react";
import {
    containerOrientation,
    containerVariant,
    wrapperOrientation,
    labelBase,
    labelSize,
    labelVariant,
    valueBase,
    valueSize,
    valueVariant,
    iconBase,
} from "./infoItemStyling";
import type { InfoItemProps } from "./types";

const InfoItem = ({
    label,
    value,
    variant = "default",
    size = "md",
    orientation = "vertical",
    icon,
    className = "",
    styles = {},
}: InfoItemProps) => {
    return (
        <div
            className={`${containerVariant[variant]} ${containerOrientation[orientation]} ${className}`}
            style={styles}
        >
            {icon && <span className={iconBase}>{icon}</span>}
            <div className={wrapperOrientation[orientation]}>
                {label && (
                    <span
                        className={`${labelBase} ${labelSize[size]} ${labelVariant[variant]}`}
                    >
                        {label}
                    </span>
                )}
                <span
                    className={`${valueBase} ${valueSize[size]} ${valueVariant[variant]}`}
                >
                    {value}
                </span>
            </div>
        </div>
    );
};

export default InfoItem;
