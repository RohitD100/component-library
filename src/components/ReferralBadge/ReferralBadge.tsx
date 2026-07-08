import {
    baseBadgeStyle,
    iconStyles,
    sizeStyles,
    variantStyles,
} from "./badgeStyle";
import { defaultLabels } from "./labelTypes";
import type { ReferralBadgeProps } from "./type";


const ReferralBadge = ({
    referralCode,
    label,
    variant = "default",
    size = "md",
    showIcon = true,
    className = "",
    style={}
}: ReferralBadgeProps) => {
    const displayLabel = label || defaultLabels[variant];

    return (
        <div
            role="status"
            aria-label={`${displayLabel}${referralCode ? ` @${referralCode}` : ""}`}
            className={`${baseBadgeStyle} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
            style={style}
        >
            {showIcon && <span aria-hidden="true">{iconStyles[variant]}</span>}
            <span>
                {displayLabel}
                {referralCode && (
                    <span className="font-semibold ml-1">@{referralCode}</span>
                )}
            </span>
        </div>
    );
};

export default ReferralBadge;
