import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import style from "./header.module.css";

export type defaultPropsHeader = {
  isAuth: boolean;
  logOut: () => void;
  login: string;
};

const Header: React.FC<defaultPropsHeader> = ({ isAuth, logOut, login }) => {
  return (
    <header className={style.header}>
      <NavLink to="/profile" className={style.logo}>
        Social Space
      </NavLink>
      <div className={style.loginBlock}>
        {isAuth && login ? (
          <div>
            <strong onClick={logOut} className={style.logOut}>
              LogOut
            </strong>
            <NavLink to="/login">{login}</NavLink>
          </div>
        ) : (
          <NavLink to="/login">LOGIN</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
