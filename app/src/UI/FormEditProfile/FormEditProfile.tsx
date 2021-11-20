import { Formik, Form, Field } from "formik";
import style from "../forms.module.css";
import { profileType } from "../../redux/types/ReducersTypes";
import { ValidEditProfileSchema } from "../validation/validators";
import cn from "classnames";

interface IDefaultProps {
  profile: profileType;
  setIsEditProfile: (toggle: boolean) => void;
  rewriteProfile: (data: profileType) => void;
  sendNewProfile: (userID: number, data: profileType) => void;
}

interface IPropertyValues<T> {
  profileName?: T;
  profileSurname?: T;
  profileNick?: T;
  profileStatus?: T;
  profileCountry?: T;
  profileCity?: T;
  profileAvatar?: T;
}

interface IFieldProps {
  setIsEditProfile: (toggle: boolean) => void;
  errors: IPropertyValues<string>;
  touched: IPropertyValues<boolean>;
}

export const FormEditProfile = ({
  profile,
  setIsEditProfile,
  rewriteProfile,
  sendNewProfile,
}: IDefaultProps) => {
  const startValue = {
    profileName: profile.name,
    profileSurname: profile.surname,
    profileNick: profile.nickname,
    profileStatus: profile.status,
    profileCountry: profile.country,
    profileCity: profile.city,
    profileAvatar: "",
  };

  return (
    <Formik
      initialValues={startValue}
      onSubmit={(values: typeof startValue) => {
        const newData = {
          ...profile,
          name: values.profileName,
          surname: values.profileSurname,
          nickname: values.profileNick || "",
          status: values.profileStatus || "",
          country: values.profileCountry,
          city: values.profileCity || "Not indicated",
          avatar: values.profileAvatar || profile.avatar,
        };
        rewriteProfile(newData);
        sendNewProfile(profile.id, newData);
        setIsEditProfile(false);
      }}
      validationSchema={ValidEditProfileSchema}
    >
      {({ ...formikProps }) => {
        return <Fields {...formikProps} setIsEditProfile={setIsEditProfile} />;
      }}
    </Formik>
  );
};

const Fields = ({ setIsEditProfile, errors, touched }: IFieldProps) => {
  const alternateСallErrors =
    errors.profileName ||
    errors.profileSurname ||
    errors.profileNick ||
    errors.profileStatus ||
    errors.profileCountry ||
    errors.profileCity ||
    errors.profileAvatar;
  return (
    <Form>
      <div className={style.allForms}>
        <span className={style.spanEditProfile}>Name*:</span>
        <Field
          className={`${style.inputsEditProfile} ${
            errors.profileName && style.errorField
          }`}
          type={"input"}
          name={"profileName"}
          placeholder={"New Name"}
        />
      </div>
      <div className={style.allForms}>
        <span className={style.spanEditProfile}>Surname*:</span>
        <Field
          className={cn(
            style.inputsEditProfile,
            errors.profileSurname && style.errorField
          )}
          type={"input"}
          name={"profileSurname"}
          placeholder={"New Surname"}
        />
      </div>
      <div className={style.allForms}>
        <span className={style.spanEditProfile}>Nickname:</span>
        <Field
          className={cn(
            style.inputsEditProfile,
            errors.profileNick && style.errorField
          )}
          type={"input"}
          name={"profileNick"}
          placeholder={"New Nickname"}
        />
      </div>
      <div className={style.allForms}>
        <span className={style.spanEditProfile}>Status:</span>
        <Field
          className={cn(
            style.inputsEditProfile,
            errors.profileStatus && style.errorField
          )}
          type={"input"}
          name={"profileStatus"}
          placeholder={"New Status"}
        />
      </div>
      <div className={style.allForms}>
        <span className={`${style.spanEditProfile}`}>Coutry*:</span>
        <Field
          className={cn(
            style.inputsEditProfile,
            errors.profileCountry && style.errorField
          )}
          type={"input"}
          name={"profileCountry"}
          placeholder={"New Country"}
        />
      </div>
      <div className={style.allForms}>
        <span className={style.spanEditProfile}>City:</span>
        <Field
          className={cn(
            style.inputsEditProfile,
            errors.profileCity && style.errorField
          )}
          type={"input"}
          name={"profileCity"}
          placeholder={"New City"}
        />
      </div>
      <div className={style.uploadAvatar}>
        <span className={style.spanEditProfile}>Loading Avatar from link:</span>
        <br />
        <Field
          className={cn(
            style.inputsAvatar,
            errors.profileAvatar && style.errorField
          )}
          type={"input"}
          name={"profileAvatar"}
          placeholder={"URL new photo for avatar"}
        />
      </div>
      {alternateСallErrors && (
        <span className={style.errorEditProfile}>{alternateСallErrors}</span>
      )}
      <br />
      <button
        type="submit"
        className={cn(style.btn_editProfile, style.btn_apply)}
      >
        Apply
      </button>
      <button
        type="reset"
        onClick={() => setIsEditProfile(false)}
        className={cn(style.btn_editProfile, style.btn_cancel)}
      >
        Cancel
      </button>
    </Form>
  );
};
