import { connect } from "react-redux";
import { setSelectedProfileAC } from "../../../redux/profile-reducer";
import ProfileData from "./ProfileData";
import { withRouter } from "react-router";


const ProfileDataContainer = connect(
  (state) => ({
    profile: state.pageProfile.profile,
  }),
  (dispatch) => ({
    setSelectedProfile: (data) => dispatch(setSelectedProfileAC(data)),
  })
)(withRouter(ProfileData));

export default ProfileDataContainer;

