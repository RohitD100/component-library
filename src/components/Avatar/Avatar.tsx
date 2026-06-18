import { useState } from "react";
import {
    baseAvatarStyle,
    baseStatusStyle,
    shapeStyles,
    sizeStyles,
    statusSizeStyles,
    statusStyles,
} from "./avatarStyle";
import type { AvatarProps } from "./type";

const Avatar = ({
    src,
    alt = "avatar",
    initials,
    size = "md",
    shape = "circle",
    status,
    className = "",
    style = {},
}: AvatarProps) => {
    const [imgError, setImgError] = useState(false);

    const showImage = src && !imgError;
    const showInitials = !showImage && initials;
    const showPlaceholder = !showImage && !showInitials;

    return (
        <div
            role="img"
            aria-label={alt}
            className={`${baseAvatarStyle} ${sizeStyles[size]} ${shapeStyles[shape]} ${className}`}
            style={style}
        >
            {showImage && (
                <img
                    src={src}
                    alt={alt}
                    onError={() => setImgError(true)}
                    className={`w-full h-full object-cover ${shapeStyles[shape]}`}
                />
            )}
            {showInitials && (
                <span aria-hidden="true">
                    {initials.slice(0, 2).toUpperCase()}
                </span>
            )}

            {showPlaceholder && (
                <svg
                    aria-hidden="true"
                    className="w-1/2 h-1/2 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                </svg>
            )}

            {status && (
                <span
                    aria-label={status}
                    className={`${baseStatusStyle} ${statusStyles[status]} ${statusSizeStyles[size]}`}
                />
            )}
        </div>
    );
};

export default Avatar;
