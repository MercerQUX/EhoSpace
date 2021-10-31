import { connect } from "react-redux";
import { getProfileDataTC } from "../../../redux/profile-reducer";
import ProfileData from "./ProfileData";
import { withRouter } from "react-router";

const ProfileDataContainer = connect(
  (state) => ({
    profile: state.pageProfile.profile,
    idLoggedUser: state.authenticator.userID,
    isAuth: state.authenticator.isAuth,
  }),
  (dispatch) => ({
    getProfileData: (userID, loggedID, isAuth) =>
      dispatch(getProfileDataTC(userID, loggedID, isAuth)),
  })
)(withRouter(ProfileData));

export default ProfileDataContainer;
