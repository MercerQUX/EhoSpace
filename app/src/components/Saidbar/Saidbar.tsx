import React, { useEffect, useState } from "react";
import style from "./saidbar.module.css";
import { NavLink, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getProfileDataTC } from "../../redux/profile-creators";
import { AppDispatch, RootState } from "../../redux/redux-store";

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
            {isRedirect && <Redirect to="/login" />}
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

export default connect(
  (state:RootState) => ({
    idLoggedUser: state.authenticator.userID,
    isAuth: state.authenticator.isAuth,
  }),
  (dispatch:AppDispatch) => ({
    getProfileData: (id:number, idLogged:number, isAuth:boolean) =>
      dispatch(getProfileDataTC(id, idLogged, isAuth)),
  })
)(Saidbar);
