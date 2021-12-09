import React, { useEffect, useState } from "react";
import style from "./saidbar.module.css";
import { NavLink, Navigate } from "react-router-dom";

const Saidbar = () => {
  const [isRedirect, setRedirect] = useState(false);
  useEffect(() => setRedirect(false),[isRedirect]);
  return (
    <div className={style.saidbar}>
      <ul>
        <li>
          <NavLink
            onClick={() => setRedirect(true)}
            to="/profile"
            className={({ isActive }) => (isActive ? style.activeLink : "")}
          >
            Profile
            {isRedirect && <Navigate to="/login" />}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dialogs"
            className={({ isActive }) => (isActive ? style.activeLink : "")}
          >
            Message
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            className={({ isActive }) => (isActive ? style.activeLink : "")}
          >
            Users
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/news"
            className={({ isActive }) => (isActive ? style.activeLink : "")}
          >
            News
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? style.activeLink : "")}
          >
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
