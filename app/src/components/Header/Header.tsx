import React from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-use";
import {
  isAuthInitialization,
  getAuthLogin,
} from "../../store/reselectors/auth-selector";
import { signOutProfile } from "../../store/thunks/authThunks";
import style from "./header.module.css";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isAuth, login } = {
    isAuth: useAppSelector(isAuthInitialization),
    login: useAppSelector(getAuthLogin),
  };
  return (
    <header className={style.header}>
      <NavLink to="/profile" className={style.logo}>
        EhoSpace Social
      </NavLink>
      <div className={style.loginBlock}>
        {isAuth ? (
          <div>
            <strong
              onClick={() => dispatch(signOutProfile())}
              className={style.logOut}
            >
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
