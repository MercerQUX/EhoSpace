import { Field, Form, Formik } from "formik";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-use";
import {
  getAuthError,
} from "../../store/reselectors/auth-selector";
import style from "../forms.module.css";
import { ValidLoginFormSchema } from "../../services/validation/validators";
import { signInProfile } from "../../store/thunks/authThunks";

interface IPropertyValues<T> {
  login?: T;
  password?: T;
}

interface IFieldProps {
  errors: IPropertyValues<string>;
  touched: IPropertyValues<boolean>;
  error: null | string;
}

export const FormLogin = () => {
  const { error } = {
    error: useAppSelector(getAuthError),
  };
  const dispatch = useAppDispatch();
  return (
    <Formik
      initialValues={{ login: "", password: "" }}
      onSubmit={(values) => {
        dispatch(
          signInProfile({
            email_login: values.login,
            password: values.password,
          })
        );
      }}
      validationSchema={ValidLoginFormSchema}
    >
      {({ ...formikProps }) => {
        return <FieldLogin {...formikProps} error={error} />;
      }}
    </Formik>
  );
};

const FieldLogin = ({ errors, touched, error }: IFieldProps) => {
  const alternateСallErrors =
    (touched.login ? errors.login : null) ||
    (touched.password ? errors.password : null) ||
    error;
  return (
    <Form action="#" className={style.form} id="SignIn">
      <h2 className={style.form__title}>Sign In</h2>
      <Field
        type="text"
        name="login"
        placeholder="Login or email"
        className={style.input}
        autoComplete="on"
      />
      <Field
        type="password"
        name="password"
        placeholder="Password"
        autoComplete="off"
        className={style.input}
      />
      <a href="#" className={style.link}>
        Forgot your password?
      </a>
      <span className={style.error}>{alternateСallErrors}</span>
      <button type="submit" className={style.btn}>
        Sign In
      </button>
    </Form>
  );
};
