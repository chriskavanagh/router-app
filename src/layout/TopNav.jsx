import { NavLink } from "react-router-dom";
import styles from "../styles/MainNavigation.module.css";

export default function TopNav() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cars"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              end
            >
              Cars
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bikes"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              end
            >
              Bikes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/suvs"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              end
            >
              SUV's
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
