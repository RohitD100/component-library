import { sizePadding } from "./navbarStyle";
import type { NavbarProps } from "./type";


const Navbar = ({
    size = "medium",
    theme = "light",
    links,
    logo,
    style = {},
}: NavbarProps) => {
    return (
        <nav
            style={{
                padding: sizePadding[size],
                backgroundColor: theme === "dark" ? "black" : "white",
                color: theme === "dark" ? "white" : "black",
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
                        height: "50px",
                        width: "50px",
                        objectFit: "contain",
                    }}
                />
            )}
            <ul style={{ listStyle: "none", display: "flex", gap: "20px" }}>
                {links.map((link, index) => (
                    <li key={index}>
                        <a
                            href={link.href}
                            style={{
                                color: theme === "dark" ? "white" : "black",
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
