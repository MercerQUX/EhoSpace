import { Field, Form, Formik } from "formik";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-use";
import {
  getAuthError,
  isAuthInitialization,
} from "../../store/reselectors/auth-selector";
import { indentifyEnteredData } from "../../store/thunks/authThunks";
import style from "../forms.module.css";
import { ValidLoginFormSchema } from "../validation/validators";

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
  const indentifyData = indentifyEnteredData;
  return (
    <Formik
      initialValues={{ login: "", password: "" }}
      onSubmit={(values) => {
        dispatch(
          indentifyData({ login: values.login, password: values.password })
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
        placeholder="Login"
        className={style.input}
      />
      <Field
        type="password"
        name="password"
        placeholder="Password"
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
