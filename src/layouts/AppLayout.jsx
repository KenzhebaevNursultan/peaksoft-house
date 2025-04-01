import { NavLink, Outlet } from "react-router";
import styles from "./AppLayout.module.css";
import logo from "../../src/assets/svg/svg.svg";

function AppLayout() {
  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div>
            <img src={logo} alt="peaksoft-logo" />
          </div>
          <ul className={styles.navigation}>
            <li>
              <NavLink
                to="/courses"
                className={({ isActive }) =>
                  isActive ? styles.active : styles.navLink
                }
              >
                Курстар
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/why-us"
                className={({ isActive }) =>
                  isActive ? styles.active : styles.navLink
                }
              >
                Эмне үчүн биз?
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lessons"
                className={({ isActive }) =>
                  isActive ? styles.active : styles.navLink
                }
              >
                Сабактар
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? styles.active : styles.navLink
                }
              >
                Биз жөнүндө
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/graduates"
                className={({ isActive }) =>
                  isActive ? styles.active : styles.navLink
                }
              >
                Бүтүрүүчүлөр
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/test"
                className={({ isActive }) =>
                  isActive ? styles.active : styles.navLink
                }
              >
                Тест
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
