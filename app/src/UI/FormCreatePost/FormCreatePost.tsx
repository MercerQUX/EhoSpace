import { Formik, Form, Field } from "formik";
import { ValidCreatePostSchema } from "../../services/validation/validators";
import style from "../forms.module.css";
import { useAppDispatch } from "../../hooks/redux-use";

interface IDefaultProps {
  addPost: (values: string) => any;
}
interface IPropertyValues<T> {
  newPost?: T;
}
interface IFieldProps {
  errors: IPropertyValues<string>;
  touched: IPropertyValues<boolean>;
}

export const FormCreatePost = ({ addPost }: IDefaultProps) => {
  const dispatch = useAppDispatch();
  const startValue = { newPost: "" };
  return (
    <Formik
      initialValues={startValue}
      onSubmit={(values: typeof startValue, { resetForm }) => {
        dispatch(addPost(values.newPost));
        resetForm({
          values: {
            newPost: "",
          },
        });
      }}
      validationSchema={ValidCreatePostSchema}
    >
      {({ ...formProps }) => <Fields {...formProps} />}
    </Formik>
  );
};

const Fields = ({ errors, touched }: IFieldProps) => {
  console.log("return", errors, touched);
  return (
    <Form>
      <Field
        className={style.formCreatePost}
        id="newPost"
        name="newPost"
        placeholder={"Your a new post..."}
        as="textarea"
      />
      {errors.newPost && touched.newPost ? (
        <span className={style.errorCreatePost}>{errors.newPost}</span>
      ) : null}

      <button className={style.btn_post} type="submit">
        Posting Post
      </button>
    </Form>
  );
};
