import React from "react";

type NavbarProps = {
    size?: "small" | "medium" | "large";
    theme?: "light" | "dark";
    links: { label: string; href: string }[];
    logo?: string;
    className?: string;
    style?: React.CSSProperties;
    bgColor?: string;
    textColor?: string;
    linkColor?: string;
    padding?: string | number;
    logoSize?: string | number;
    gap?: string | number;
};

const sizePadding: Record<string, string> = {
    small: "5px",
    medium: "8px",
    large: "10px",
};

const Navbar = ({
    size = "medium",
    theme = "light",
    links,
    logo,
    className = "",
    style = {},
    bgColor,
    textColor,
    linkColor,
    padding,
    logoSize,
    gap,
}: NavbarProps) => {
    const resolvedTextColor =
        textColor || (theme === "dark" ? "white" : "black");
    const resolvedLinkColor = linkColor || resolvedTextColor;

    return (
        <nav
            className={className}
            style={{
                padding: padding ?? sizePadding[size],
                backgroundColor:
                    bgColor || (theme === "dark" ? "black" : "white"),
                color: resolvedTextColor,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                ...style,
            }}
        >
            {logo && (
                <img
                    src={logo}
                    alt="Logo"
                    style={{
                        height: logoSize ?? "50px",
                        width: logoSize ?? "50px",
                        objectFit: "contain",
                    }}
                />
            )}
            <ul
                style={{
                    listStyle: "none",
                    display: "flex",
                    gap: gap ?? "20px",
                }}
            >
                {links.map((link, index) => (
                    <li key={index}>
                        <a
                            href={link.href}
                            style={{
                                color: resolvedLinkColor,
                                textDecoration: "none",
                            }}
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
