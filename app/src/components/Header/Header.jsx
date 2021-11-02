import React from "react";
import { NavLink } from "react-router-dom";
import style from "../CSS/main.module.css";

const Header = (props) => {
  return (
    <header className={style.header}>
      <div className={style.logo}>LOGO</div>
      <div className={style.loginBlock}>
        {props.isAuth ? (
          <div>
            <strong onClick={props.logOut} className={style.logOut}>
              LogOut
            </strong>
            <NavLink to="/login">{props.login}</NavLink>
          </div>
        ) : (
          <NavLink to="/login">LOGIN</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
