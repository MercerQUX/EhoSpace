import { Formik, Form, Field } from "formik";
import { ValidCreatePostSchema } from "../../services/validation/validators";
import style from "../forms.module.sass";
import { useAppDispatch } from "../../hooks/redux-use";
import { uploadPosts } from "../../store/thunks/profile-thunk";
import { handleClickKey } from "../../helpers/handleClickKey";

interface IDefaultProps {
  addPost: (values: string) => any;
}
interface IPropertyValues<T> {
  newPost?: T;
}
interface IFieldProps {
  errors: IPropertyValues<string>;
  touched: IPropertyValues<boolean>;
  handleSubmit: () => void;
}

export const FormCreatePost = ({ addPost }: IDefaultProps) => {
  const dispatch = useAppDispatch();
  const startValue = { newPost: "" };
  return (
    <Formik
      initialValues={startValue}
      onSubmit={(values: typeof startValue, { resetForm }) => {
        dispatch(uploadPosts(values.newPost));
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

const Fields = ({ errors, touched, handleSubmit }: IFieldProps) => {
  return (
    <Form>
      <Field
        className={style.post_textarea}
        id="newPost"
        name="newPost"
        placeholder={"Your a new post..."}
        as="textarea"
        onKeyPress={(e) => handleClickKey(e,handleSubmit)}
      />
      {errors.newPost && touched.newPost ? (
        <span className={style.errorCreatePost}>{errors.newPost}</span>
      ) : null}
      <button type="submit" className={style.post_button}>Posting Post</button>
    </Form>
  );
};
