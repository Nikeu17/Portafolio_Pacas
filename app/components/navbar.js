import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>Nikeu</h1>
      <ul style={styles.links}>
        <li><a href="#" style={styles.link}>Inicio</a></li>
        <li><a href="#" style={styles.link}>Productos</a></li>
        <li><a href="#" style={styles.link}>Contacto</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#fff",
    borderBottom: "1px solid #eee",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: 700,
    color: "#111",
    margin: 0,
  },
  links: {
    listStyle: "none",
    display: "flex",
    gap: "1.5rem",
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontWeight: 500,
    transition: "color 0.2s",
  },
};

export default Navbar;
