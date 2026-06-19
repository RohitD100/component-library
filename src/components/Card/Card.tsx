import {
    actionButtonStyle,
    badgeStyle,
    badgeVariants,
    baseCardStyle,
    cardVariants,
    contentStyle,
    descriptionVariants,
    footerStyle,
    footerVariants,
    imageStyle,
    secondaryButtonVariants,
    sizeStyles,
    titleVariants,
} from "./cardStyle";
import type { CardProps } from "./type";

const Card = ({
    title,
    description,
    imageUrl,
    badge,
    badgeVariant = "default",
    variant = "dark",
    size = "md",
    actionLabel,
    onAction,
    secondaryLabel,
    onSecondary,
    footer,
    className = "",
    style = {},
}: CardProps) => {
    return (
        <div
            className={`${baseCardStyle} ${cardVariants[variant]} ${sizeStyles[size]} ${className}`}
            style={style}
        >
            {imageUrl && (
                <img src={imageUrl} alt={title} className={imageStyle} />
            )}

            <div className={contentStyle}>
                {badge && (
                    <span
                        className={`${badgeStyle} ${badgeVariants[badgeVariant]} mb-3 block w-fit`}
                    >
                        {badge}
                    </span>
                )}
                <h3 className={titleVariants[variant]}>{title}</h3>
                <p className={descriptionVariants[variant]}>{description}</p>
            </div>

            {(actionLabel || secondaryLabel || footer) && (
                <div className={`${footerStyle} ${footerVariants[variant]}`}>
                    {footer ? (
                        footer
                    ) : (
                        <>
                            {secondaryLabel && (
                                <button
                                    onClick={onSecondary}
                                    className={secondaryButtonVariants[variant]}
                                >
                                    {secondaryLabel}
                                </button>
                            )}
                            {actionLabel && (
                                <button
                                    onClick={onAction}
                                    className={actionButtonStyle}
                                >
                                    {actionLabel}
                                </button>
                            )}
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default Card;
