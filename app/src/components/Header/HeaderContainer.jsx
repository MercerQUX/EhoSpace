import { connect } from "react-redux";
import { setLoggedDataAC } from "../../redux/auth-reducer";
import Header from "./Header";
import { getLoggedDataAPI } from "../../API/auth-API";

const HeaderContainer = (props) => {
  getLoggedDataAPI().then((data) => {
    props.setLoggedData(data);
  });

  return <Header isAuth={props.isAuth} login={props.login} />;
};

export default connect(
  (state) => ({
    login: state.authenticator.login,
    isAuth: state.authenticator.isAuth,
  }),
  (dispatch) => ({ setLoggedData: (data) => dispatch(setLoggedDataAC(data)) })
)(HeaderContainer);
