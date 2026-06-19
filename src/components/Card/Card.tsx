import {
    actionButtonStyle,
    badgeStyle,
    badgeVariants,
    baseCardStyle,
    contentStyle,
    descriptionStyle,
    footerStyle,
    imageStyle,
    secondaryButtonStyle,
    sizeStyles,
    titleStyle,
} from "./cardStyle";
import type { CardProps } from "./type";

const Card = ({
    title,
    description,
    imageUrl,
    badge,
    badgeVariant = "default",
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
            className={`${baseCardStyle} ${sizeStyles[size]} ${className}`}
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

                <h3 className={titleStyle}>{title}</h3>
                <p className={descriptionStyle}>{description}</p>
            </div>

            {(actionLabel || secondaryLabel || footer) && (
                <div className={footerStyle}>
                    {footer ? (
                        footer
                    ) : (
                        <>
                            {secondaryLabel && (
                                <button
                                    onClick={onSecondary}
                                    className={secondaryButtonStyle}
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
