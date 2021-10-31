import { connect } from "react-redux";
import { setLoggedDataAC } from "../../redux/auth-reducer";
import Header from "./Header";
import * as axios from "axios";

const HeaderContainer = (props) => {
  axios.get("http://localhost:4000/authSystem?authNow_like").then((res) => {
    if (res.data[0].authNow.isAuth) {
      props.setLoggedData(res.data[0].authNow);
    }
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
