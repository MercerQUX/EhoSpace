import React from "react";
import style from "../CSS/main.module.css";
import { NavLink } from "react-router-dom";

const Saidbar = (props) => {
  return (
    <div className={style.saidbar}>
      <ul>
        <li>
          <NavLink to="/profile" activeClassName={style.activeLink}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/dialogs" activeClassName={style.activeLink}>
            Message
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" activeClassName={style.activeLink}>
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to="/news" activeClassName={style.activeLink}>
            News
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName={style.activeLink}>
            Contacts
          </NavLink>
        </li>
        <br />
        <li>
          <a href="#">Setting</a>
        </li>
      </ul>
    </div>
  );
};

export default Saidbar;
