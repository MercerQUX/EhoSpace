import { connect } from "react-redux";
import { compose } from "redux";
import { actualLoggedUserTC, logOutTC } from "../../redux/auth-reducer";
import Header from "./Header";

const HeaderContainer = (props) => {
  props.actualLoggedUser();

  return (
    <Header logOut={props.logOut} isAuth={props.isAuth} login={props.login} />
  );
};

const HeaderConnect = connect(
  (state) => ({
    login: state.authenticator.login,
    isAuth: state.authenticator.isAuth,
  }),
  (dispatch) => ({
    actualLoggedUser: () => dispatch(actualLoggedUserTC()),
    logOut: () => dispatch(logOutTC()),
  })
);

export default compose(HeaderConnect)(HeaderContainer);
