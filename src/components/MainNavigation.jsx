import { NavLink } from "react-router-dom";
import classes from "../styles/MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cars"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Cars
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/trucks"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Trucks
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
