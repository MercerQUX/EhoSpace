import React, { useEffect, useState } from "react";
import style from "./saidbar.module.css";
import { NavLink, Navigate } from "react-router-dom";

const Saidbar = () => {
  const [isRedirect, setRedirect] = useState(false);
  useEffect(() => setRedirect(false));
  return (
    <div className={style.saidbar}>
      <ul>
        <li>
          <NavLink
            onClick={() => setRedirect(true)}
            to="/profile"
            activeClassName={style.activeLink}
          >
            Profile
            {/* {isRedirect && <Navigate to="/login" />} */}
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