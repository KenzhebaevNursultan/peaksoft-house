import { Outlet, useLocation } from "react-router";
import styles from "./AppLayout.module.css";
import Footer from "./Footer";
import Navbar from "./NavBar";

function AppLayout() {
  const { pathname } = useLocation();
  return (
    <div>
      <header className={`${styles.header} ${styles.extraClass}`}>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      {pathname !== "/main" && <Footer />}
    </div>
  );
}

export default AppLayout;
