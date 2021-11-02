import { connect } from "react-redux";
import { logOutTC, setLoggedDataAC } from "../../redux/auth-reducer";
import Header from "./Header";
import { getLoggedDataAPI } from "../../API/auth-API";

const HeaderContainer = (props) => {
  getLoggedDataAPI().then((data) => {
    if (data != undefined) {
      props.setLoggedData(data);
    }
  });

  return (
    <Header logOut={props.logOut} isAuth={props.isAuth} login={props.login} />
  );
};

export default connect(
  (state) => ({
    login: state.authenticator.login,
    isAuth: state.authenticator.isAuth,
  }),
  (dispatch) => ({
    setLoggedData: (data) => dispatch(setLoggedDataAC(data)),
    logOut: () => dispatch(logOutTC()),
  })
)(HeaderContainer);
