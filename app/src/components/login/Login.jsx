import { Field, reduxForm } from "redux-form";
import { FormControl } from "../../UI/form/FormControl";
import { required } from "../../UI/form/validation/validators";
import style from "../CSS/main.module.css";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name={""}
          placeholder={"Login"}
          name={"login"}
          component={FormControl}
          type={"input"}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          type={"input"}
          placeholder={"Password"}
          name={"password"}
          component={FormControl}
          validate={[required]}
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
    console.log(formData);
  };
  return (
    <div className={style.profile}>
      LOGIN
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
