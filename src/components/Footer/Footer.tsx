import { sizePadding } from "./footerStyle";
import type { FooterProps } from "./type";

const Footer = ({
    size = "md",
    theme = "light",
    links,
    logoUrl,
    disclaimer,
    style = {},
}: FooterProps) => {
    return (
        <footer
            style={{
                padding: sizePadding[size],
                backgroundColor: theme === "light" ? "white" : "black",
                color: theme === "light" ? "black" : "white",
                textAlign: "center",
                ...style,
            }}
        >
            <img
                src={logoUrl}
                alt="Logo"
                style={{ height: "50px", marginBottom: "10px" }}
            />
            <nav>
                {links.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        style={{
                            margin: "0 10px",
                            color: theme === "light" ? "black" : "white",
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
