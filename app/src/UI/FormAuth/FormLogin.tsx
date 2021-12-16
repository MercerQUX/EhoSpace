import { Field, Form, Formik } from "formik";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-use";
import { getAuthError } from "../../store/reselectors/auth-selector";
import style from "../forms.module.css";
import { ValidLoginFormSchema } from "../../services/validation/validators";
import { signInProfile } from "../../store/thunks/authThunks";
import cn from "classnames";

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
        className={cn(
          style.input,
          touched.login && !errors.login ? style.input__correctly : null
        )}
        autoComplete="on"
      />
      <Field
        type="password"
        name="password"
        placeholder="Password"
        autoComplete="off"
        className={cn(
          style.input,
          touched.password && !errors.password ? style.input__correctly : null
        )}
      />
      <div className={style.link}>
        Forgot your password?
      </div>
      <span className={style.error}>{alternateСallErrors}</span>
      <button type="submit" className={style.btn}>
        Sign In
      </button>
    </Form>
  );
};