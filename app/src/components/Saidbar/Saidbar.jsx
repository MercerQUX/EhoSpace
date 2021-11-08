import React from "react";
import style from "../CSS/main.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { getProfileDataTC } from "../Profile/ProfileData";

const Saidbar = ({ getProfileData, idLoggedUser, isAuth }) => {
  return (
    <div className={style.saidbar}>
      <ul>
        <li>
          <NavLink to="/login" activeClassName={style.activeLink}>
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

export default connect(
  (state) => ({
    idLoggedUser: state.authenticator.userID,
    isAuth: state.authenticator.isAuth,
  }),
  (dispatch) => ({
    getProfileData: (id, idLogged, isAuth) =>
      dispatch(getProfileDataTC(id, idLogged, isAuth)),
  })
)(Saidbar);
