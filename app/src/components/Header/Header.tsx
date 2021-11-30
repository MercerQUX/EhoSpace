import React from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-use";
import {
  isAuthInitialization,
  getAuthLogin,
} from "../../store/reselectors/auth-selector";
import { authLogOut } from "../../store/thunks/authThunks";
import style from "./header.module.css";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isAuth, login } = {
    isAuth: useAppSelector(isAuthInitialization),
    login: useAppSelector(getAuthLogin),
  };
  const logOut = authLogOut();

  return (
    <header className={style.header}>
      <NavLink to="/profile" className={style.logo}>
        Social Space
      </NavLink>
      <div className={style.loginBlock}>
        {isAuth && login ? (
          <div>
            <strong onClick={() => dispatch(logOut)} className={style.logOut}>
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
