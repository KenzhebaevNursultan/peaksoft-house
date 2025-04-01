import { NavLink, Outlet, useLocation } from "react-router";
import styles from "./AppLayout.module.css";
import logo from "../../src/assets/svg/svg.svg";
import Footer from "./Footer";

function AppLayout() {
  const { pathname } = useLocation();
  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div>
            <NavLink to="/">
              <img src={logo} alt="peaksoft-logo" />
            </NavLink>
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
      {pathname !== "/main" && <Footer />}
    </div>
  );
}

export default AppLayout;
