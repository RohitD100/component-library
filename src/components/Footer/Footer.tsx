type FooterProps = {
    size: "sm" | "md" | "lg";
    theme: "light" | "dark";
    links: { label: string; url: string }[];
    logoUrl: string;
    disclaimer: string;
};

const Footer = ({
    size = "md",
    theme = "light",
    links,
    logoUrl,
    disclaimer,
}: FooterProps) => {
    return (
        <footer
            style={{
                padding:
                    size === "sm" ? "10px" : size === "md" ? "20px" : "30px",
                backgroundColor: theme === "light" ? "white" : "black",
                color: theme === "light" ? "black" : "white",
                textAlign: "center",
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
