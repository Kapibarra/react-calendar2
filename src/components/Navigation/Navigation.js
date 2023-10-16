import React from "react";
import { NavLink } from "react-router-dom"; // Используйте NavLink
import classes from "./Navigation.module.css";

function Navigation() {
  return (
    <nav>
      <ul className={classes.Navigation}>
        <li>
          <NavLink to="/results" activeclassname={classes.activeLink}>
            Результаты
          </NavLink>
        </li>
        <li>
          <NavLink to="/calendar" activeclassname={classes.activeLink}>
            Календарь
          </NavLink>
        </li>
        <li>
          <NavLink to="/raitings" activeclassname={classes.activeLink}>
            Рейтинги
          </NavLink>
        </li>
        <li>
          <NavLink to="/org" activeclassname={classes.activeLink}>
            Организаторам
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
