import { connect } from "react-redux";
import { compose } from "redux";
import { actualLoggedUserTC, logOutTC } from "../../redux/auth-reducer";
import Header from "./Header";

const HeaderContainer = ({ actualLoggedUser, ...props }) => {
  actualLoggedUser();
  return <Header {...props} />;
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
