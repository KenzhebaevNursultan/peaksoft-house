import { NavLink } from "react-router";
import logo from "../../src/assets/svg/svg.svg";
import burger from "../../src/assets/bb.png";
import x from "../../src/assets/x.png";
import styles from "./AppLayout.module.css";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.nav}>
      <div className={styles.headerClass}>
        <NavLink to="/">
          <img src={logo} alt="peaksoft-logo" />
        </NavLink>
        <button
          className={`${styles.burger} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img src={!menuOpen ? burger : x} alt="burger" />
        </button>
      </div>
      <ul className={styles.navigation}>
        {[
          { path: "/courses", label: "Курстар" },
          { path: "/why-us", label: "Эмне үчүн биз?" },
          { path: "/lessons", label: "Сабактар" },
          { path: "/about", label: "Биз жөнүндө" },
          { path: "/graduates", label: "Бүтүрүүчүлөр" },
          { path: "/test", label: "Тест" },
        ].map(({ path, label }) => (
          <li key={path}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive ? styles.active : styles.navLink
              }
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      <ul
        className={`${styles.mobileNavigation} ${menuOpen ? styles.open : ""}`}
      >
        {[
          { path: "/courses", label: "Курстар" },
          { path: "/why-us", label: "Эмне үчүн биз?" },
          { path: "/lessons", label: "Сабактар" },
          { path: "/about", label: "Биз жөнүндө" },
          { path: "/graduates", label: "Бүтүрүүчүлөр" },
          { path: "/test", label: "Тест" },
        ].map(({ path, label }) => (
          <li key={path}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive ? styles.active : styles.navLink
              }
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
