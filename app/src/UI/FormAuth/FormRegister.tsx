import { Field, Form, Formik } from "formik";
import style from "../forms.module.css";
import { ValidRegisterFormSchema } from "../../services/validation/validators";
import cn from "classnames";
import { useAppDispatch } from "../../hooks/redux-use";
import { signInProfile, signUpProfile } from "../../store/thunks/auth-thunk";

interface IPropertyValues<T> {
  login?: T;
  email?: T;
  name?: T;
  surname?: T;
  country?: T;
  password?: T;
}

interface IFieldProps {
  errors: IPropertyValues<string>;
  touched: IPropertyValues<boolean>;
}

export const FormRigister = () => {
  const startValue = {
    login: "",
    email: "",
    name: "",
    surname: "",
    country: "",
    password: "",
  };
  const dispatch = useAppDispatch();
  return (
    <Formik
      initialValues={startValue}
      onSubmit={async (values) => {
        const requestSignUp = await dispatch(signUpProfile({ ...values }));
        if (requestSignUp.meta.requestStatus === "fulfilled") {
          await dispatch(
            signInProfile({
              email_login: values.email,
              password: values.password,
            })
          );
        }
      }}
      validationSchema={ValidRegisterFormSchema}
    >
      {({ ...formikProps }) => {
        return <FieldRegister {...formikProps} />;
      }}
    </Formik>
  );
};

const FieldRegister = ({ errors, touched }: IFieldProps) => {
  const alternateСallErrors =
    (touched.login ? errors.login : null) ||
    (touched.email ? errors.email : null) ||
    (touched.name ? errors.name : null) ||
    (touched.surname ? errors.surname : null) ||
    (touched.country ? errors.country : null) ||
    (touched.password ? errors.password : null);
  return (
    <Form autoComplete="off" action="##" className={style.form} id="SignUp">
      <h2 className={style.form__title}>Sign Up</h2>
      <Field
        type="text"
        placeholder="Your Login"
        name="login"
        className={cn(
          style.input,
          touched.login && errors.login ? style.input__error : null,
          touched.login && !errors.login ? style.input__correctly : null
        )}
      />
      <Field
        type="text"
        placeholder="Your Email"
        name="email"
        className={cn(
          style.input,
          touched.email && errors.email ? style.input__error : null,
          touched.email && !errors.email ? style.input__correctly : null
        )}
      />
      <Field
        type="text"
        placeholder="Your Name"
        name="name"
        className={cn(
          style.input,
          touched.name && errors.name ? style.input__error : null,
          touched.name && !errors.name ? style.input__correctly : null
        )}
      />
      <Field
        type="text"
        placeholder="Your Surname"
        name="surname"
        className={cn(
          style.input,
          touched.surname && errors.surname ? style.input__error : null,
          touched.surname && !errors.surname ? style.input__correctly : null
        )}
      />
      <Field
        type="text"
        placeholder="Your Country"
        name="country"
        className={cn(
          style.input,
          touched.country && errors.country ? style.input__error : null,
          touched.country && !errors.country ? style.input__correctly : null
        )}
      />
      <Field
        type="password"
        placeholder="Password"
        name="password"
        autoComplete="off"
        className={cn(
          style.input,
          touched.password && errors.password ? style.input__error : null,
          touched.password && !errors.password ? style.input__correctly : null
        )}
      />
      <span className={style.error}>{alternateСallErrors}</span>
      <button type="submit" className={style.btn}>
        Sign Up
      </button>
    </Form>
  );
};
