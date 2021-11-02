import { Field, reduxForm } from "redux-form";
import { indentifyDataTC } from "../../redux/auth-reducer";
import { FormControl } from "../../UI/form/FormControl";
import { required } from "../../UI/form/validation/validators";
import { connect } from "react-redux";
import style from "../CSS/main.module.css";
import { Redirect } from "react-router";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
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
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

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
    </div>
  );
};

export default connect(
  (state) => ({ isAuth: state.authenticator.isAuth }),
  (dispatch) => ({
    indentifyData: (login, password) =>
      dispatch(indentifyDataTC(login, password)),
  })
)(Login);
