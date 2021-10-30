import { connect } from "react-redux";
import { setSelectedProfileAC } from "../../../redux/profile-reducer";
import ProfileData from "./ProfileData";
import { withRouter } from "react-router";

const ProfileDataContainer = connect(
  (state) => ({
    profile: state.pageProfile.profile,
    idLoggedUser: state.authenticator.userID,
    isAuth: state.authenticator.isAuth,
  }),
  (dispatch) => ({
    setSelectedProfile: (data) => dispatch(setSelectedProfileAC(data)),
  })
)(withRouter(ProfileData));

export default ProfileDataContainer;
