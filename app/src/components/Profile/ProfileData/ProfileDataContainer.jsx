import { connect } from "react-redux";
import {
  changedStatusTC,
  changeStatusAC,
  getProfileDataTC,
} from "../../../redux/profile-reducer";
import ProfileData from "./ProfileData";
import { withRouter } from "react-router";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const ProfileDataConnect = connect(
  (state) => ({
    profile: state.pageProfile.profile,
    idLoggedUser: state.authenticator.userID,
    isAuth: state.authenticator.isAuth,
    actualID: state.authenticator.userID,
  }),
  (dispatch) => ({
    getProfileData: (userID, loggedID, isAuth) =>
    dispatch(getProfileDataTC(userID, loggedID, isAuth)),
    changeStatus: (text) => dispatch(changeStatusAC(text)),
    saveStatus: (userID, data) => dispatch(changedStatusTC(userID, data)),
  })
);

export default compose(
  ProfileDataConnect,
  withRouter,
  withAuthRedirect
)(ProfileData);
