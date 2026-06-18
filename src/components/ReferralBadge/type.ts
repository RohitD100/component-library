export type BadgeVariant = "default" | "active" | "reward" | "expired";

export type ReferralBadgeProps = {
    referralCode?: string;
    label?: string;
    variant?: BadgeVariant;
    size?: "sm" | "md" | "lg";
    showIcon?: boolean;
    className?: string;
    style?:React.CSSProperties
};
