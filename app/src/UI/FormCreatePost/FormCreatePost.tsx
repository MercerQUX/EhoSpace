import { Formik, Form, Field } from "formik";
import { ValidCreatePostSchema } from "../validation/validators";
import style from "../forms.module.css";

interface initialValue {
  newPost: string;
}
interface defaultProps {
  addPost: (values: string) => void;
}
interface formikProps {
  errors: { newPost?: string };
  touched: { newPost?: boolean };
}

export const FormCreatePost = ({ addPost }: defaultProps) => {
  const startValue: initialValue = { newPost: "" };
  return (
    <Formik
      initialValues={startValue}
      onSubmit={(values, action) => {
        addPost(values.newPost);
        action.resetForm({
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

const Fields = ({ errors, touched }: formikProps) => {
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
