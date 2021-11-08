import {
  connect,
  changedStatusTC,
  changeStatusAC,
  getProfileDataTC,
  rewriteProfileAC,
  withRouter,
  withAuthRedirect,
  compose,
  ProfileData,
} from "./index";

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
    rewriteProfile: (data) => dispatch(rewriteProfileAC(data)),
  })
);

export default compose(
  ProfileDataConnect,
  withRouter,
  withAuthRedirect
)(ProfileData);
