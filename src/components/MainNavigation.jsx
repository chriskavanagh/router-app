import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import classes from "../styles/MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <FaBars size={"2em"} className={classes.hamburger} />
          </li>
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
      <div className={classes.right}>
        <ul className={classes.list__right}>
          <li>
            <h4>LOG IN</h4>
          </li>
          <div className={classes.sep}></div>
          <li>
            <button className={classes.btn}>Sign Up</button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default MainNavigation;
