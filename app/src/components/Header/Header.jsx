import React from "react";
import { NavLink } from "react-router-dom";
import style from "../CSS/main.module.css";

const Header = (props) => {
  return (
    <header className={style.header}>
      <div className={style.logo}>LOGO</div>
      <div className={style.loginBlock}>
        {props.isAuth ? (
          <NavLink to="/login">{props.login}</NavLink>
        ) : (
          <NavLink to="/login">LOGIN</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
