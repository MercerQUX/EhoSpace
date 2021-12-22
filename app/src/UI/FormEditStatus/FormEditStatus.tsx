import { Field, Form, Formik } from "formik";
import style from "../forms.module.sass";
import { ValidStatusSchema } from "../../services/validation/validators";
import { IThunkRewriteProfile } from "../../store/thunks/profile-thunk";
import { useAppDispatch } from "../../hooks/redux-use";
import { ICommonProfile } from "../../models/ICommonProfile";

interface IDefaultProps {
  profile: ICommonProfile;
  setIsEditStatus: (set: boolean) => any;
  changeStatus: (newStatus: string) => any;
  saveStatus: ({ id, updateProfile }: IThunkRewriteProfile) => any;
}

interface IPropertyValues<T> {
  editStatus?: T;
}

interface IFieldProps {
  handleSubmit: () => void;
  errors: IPropertyValues<string>;
  touched: IPropertyValues<boolean>;
}

export const FormEditStatus = ({
  setIsEditStatus,
  changeStatus,
  saveStatus,
  profile,
}: IDefaultProps) => {
  const dispatch = useAppDispatch();
  const startValue = { editStatus: profile.status };
  return (
    <Formik
      initialValues={startValue}
      onSubmit={(values) => {
        dispatch(changeStatus(values.editStatus));
        dispatch(
          saveStatus({
            id: profile.id,
            updateProfile: { ...profile, status: values.editStatus },
          })
        );
        setIsEditStatus(true);
      }}
      validationSchema={ValidStatusSchema}
    >
      {({ ...formikProps }) => {
        return <Fields {...formikProps} />;
      }}
    </Formik>
  );
};

const Fields = ({ handleSubmit, touched, errors }: IFieldProps) => {
  return (
    <Form>
      <Field
        className={style.editStatusInput}
        autoFocus={true}
        as="textarea"
        id="editStatus"
        name="editStatus"
        placeholder="Your a new status"
        onBlur={handleSubmit}
      />
      <br />
      {touched.editStatus && errors.editStatus ? (
        <span className={style.errorEditStatus}>{errors.editStatus}</span>
      ) : null}
    </Form>
  );
};
