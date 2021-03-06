import React from "react";
import logo from "./../../asset/siteLogo.png"
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-use";
import {
  stateAuthIsInitialization,
  stateAuthLogin,
} from "../../store/reselectors/auth-selector";
import { signOutProfile } from "../../store/thunks/auth-thunk";
import style from "./header.module.sass";


const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isAuth, login } = {
    isAuth: useAppSelector(stateAuthIsInitialization),
    login: useAppSelector(stateAuthLogin),
  };
  return (
    <header className={style.header}>
      <NavLink to="/profile" className={style.logo}>
        <img src={logo} alt="Logo" />
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
