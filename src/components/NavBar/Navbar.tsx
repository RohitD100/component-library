type NavbarProps = {
    size?: "small" | "medium" | "large";
    theme?: "light" | "dark";
    links: { label: string; href: string }[];
    logo?: string;
};

const Navbar = ({ size = "medium", theme = "light", links, logo }: NavbarProps) => {
    return (
        <nav
            style={{
                padding:
                    size === "small"
                        ? "5px"
                        : size === "medium"
                          ? "8px"
                          : "10px",
                backgroundColor: theme === "dark" ? "black" : "white",
                color: theme === "dark" ? "white" : "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            {logo && (
                <img
                    src={logo}
                    alt="Logo"
                    style={{
                        height: "50px",
                        width: "50px",
                        objectFit: "contain",
                    }}
                />
            )}
            <ul
                style={{
                    listStyle: "none",
                    display: "flex",
                    gap: "20px",
                }}
            >
                {links.map((link, index) => (
                    <li key={index}>
                        <a
                            href={link.href}
                            style={{
                                color: theme === "dark" ? "white" : "black",
                                textDecoration: "none",
                            }}
                        >
                            {" "}
                            {link.label}{" "}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
