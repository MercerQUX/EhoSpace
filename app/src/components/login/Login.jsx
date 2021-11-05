import { Field, reduxForm } from "redux-form";
import { indentifyDataTC } from "../../redux/auth-reducer";
import { FormControl } from "../../UI/form/FormControl";
import { required } from "../../UI/form/validation/validators";
import { connect } from "react-redux";
import style from "../CSS/main.module.css";
import { Redirect } from "react-router";
import { compose } from "redux";

const LoginReduxForm = reduxForm({ form: "Login" })(
  ({ handleSubmit, ...props }) => {
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            placeholder={"Login"}
            name={"login"}
            component={FormControl}
            validate={[required]}
            dataType={"input"}
          />
        </div>
        <div>
          <Field
            type={"password"}
            placeholder={"Password"}
            name={"password"}
            component={FormControl}
            validate={[required]}
            dataType={"input"}
          />
        </div>
        <div>
          <Field type={"checkbox"} name={"rememberme"} component={"input"} />
          Remember Me
        </div>
        <div>
          <button>Send</button>
        </div>
      </form>
    );
  }
);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.indentifyData(formData.login, formData.password);
  };
  return props.isAuth ? (
    <Redirect to={"/profile"} />
  ) : (
    <div className={style.profile}>
      LOGIN
      <LoginReduxForm onSubmit={onSubmit} />
      {props.error != undefined ? <span>{props.error}</span> : <span></span>}
    </div>
  );
};

let LoginConnect = connect(
  (state) => ({
    isAuth: state.authenticator.isAuth,
    error: state.authenticator.error,
  }),
  (dispatch) => ({
    indentifyData: (login, password) =>
      dispatch(indentifyDataTC(login, password)),
  })
);

export default compose(LoginConnect)(Login);
