import { Field, Form, Formik } from "formik";
import style from "../forms.module.css";
import { profileType } from "../../redux/types/ReducersTypes";
import { ValidStatusSchema } from "../validation/validators";

interface initValueType {
  editStatus: string;
}

interface defaultProps {
  profile: profileType;
  setIsEditStatus: (set: boolean) => void;
  changeStatus: (newStatus: string) => void;
  saveStatus: (userID: number, data: profileType) => void;
}

interface formikProps {
  handleSubmit: () => void;
  touched: { editStatus?: boolean };
  errors: { editStatus?: string };
}

export const FormEditStatus = ({
  setIsEditStatus,
  changeStatus,
  saveStatus,
  profile,
}: defaultProps) => {
  const startValue: initValueType = { editStatus: profile.status };
  return (
    <Formik
      initialValues={startValue}
      onSubmit={(values: initValueType) => {
        changeStatus(values.editStatus);
        saveStatus(profile.id, { ...profile, status: values.editStatus });
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

const Fields = ({ handleSubmit, touched, errors }: formikProps) => {
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