import { Formik, Form, Field } from "formik";
import style from "../forms.module.sass";
import { useAppDispatch } from "../../hooks/redux-use";
import { handleClickKey } from "../../helpers/handleClickKey";
import { editPosts } from "../../store/thunks/profile-thunk";

interface IDefaultProps {
  body: string;
  switchDisplay: (display: boolean) => void;
}
interface IFieldProps {
  handleSubmit: () => void;
}

export const FormEditPost = ({ body, switchDisplay }: IDefaultProps) => {
  const dispatch = useAppDispatch();
  const startValue = { editPost: body };
  return (
    <Formik
      initialValues={startValue}
      onSubmit={async (values: typeof startValue, { resetForm }) => {
        await dispatch(editPosts(values.editPost));
        switchDisplay(false);
        resetForm({
          values: {
            editPost: "",
          },
        });
      }}
    >
      {({ ...formProps }) => <Fields {...formProps} />}
    </Formik>
  );
};

const Fields = ({ handleSubmit }: IFieldProps) => {
  return (
    <Form className={style.middle_block_edit}>
      <Field
        className={style.textarea_edit_post}
        id="editPost"
        name="editPost"
        placeholder={"Your a edit post..."}
        as="textarea"
        onKeyPress={(e) => handleClickKey(e, handleSubmit)}
      />
      <button type="submit" className={style.confirm_btn_edit_post}>
        Confirm Change
      </button>
    </Form>
  );
};
