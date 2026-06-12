import React from "react";

type FooterProps = {
    size?: "sm" | "md" | "lg";
    theme?: "light" | "dark";
    links: { label: string; url: string }[];
    logoUrl: string;
    disclaimer: string;
    className?: string;
    style?: React.CSSProperties;
    bgColor?: string;
    textColor?: string;
    linkColor?: string;
    padding?: string | number;
    logoHeight?: string | number;
};

const sizePadding: Record<string, string> = {
    sm: "10px",
    md: "20px",
    lg: "30px",
};

const Footer = ({
    size = "md",
    theme = "light",
    links,
    logoUrl,
    disclaimer,
    className = "",
    style = {},
    bgColor,
    textColor,
    linkColor,
    padding,
    logoHeight,
}: FooterProps) => {
    const resolvedTextColor =
        textColor || (theme === "light" ? "black" : "white");
    const resolvedLinkColor = linkColor || resolvedTextColor;

    return (
        <footer
            className={className}
            style={{
                padding: padding ?? sizePadding[size],
                backgroundColor:
                    bgColor || (theme === "light" ? "white" : "black"),
                color: resolvedTextColor,
                textAlign: "center",
                ...style,
            }}
        >
            <img
                src={logoUrl}
                alt="Logo"
                style={{ height: logoHeight ?? "50px", marginBottom: "10px" }}
            />
            <nav>
                {links.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        style={{
                            margin: "0 10px",
                            color: resolvedLinkColor,
                            textDecoration: "none",
                        }}
                    >
                        {link.label}
                    </a>
                ))}
            </nav>
            <p style={{ marginTop: "10px", fontSize: "12px" }}>{disclaimer}</p>
        </footer>
    );
};

export default Footer;
