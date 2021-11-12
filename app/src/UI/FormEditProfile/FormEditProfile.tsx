import { Formik, Form, Field } from "formik";
import style from "../../components/CSS/profile.module.css";
import { profileType } from "../../redux/types/ReducersTypes";

interface initValueType {
  profileName: string;
  profileSurname: string;
  profileNick?: string;
  profileStatus: string;
  profileCountry: string;
  profileCity?: string;
  profileAvatar?: string;
}

interface defaultProps {
  profile: profileType;
  setIsEditProfile: (toggle: boolean) => void;
  rewriteProfile: (data: profileType) => void;
  sendNewProfile: (userID: number, data: profileType) => void;
}

interface formikProps {
  setIsEditProfile: (toggle: boolean) => void;
}

export const FormEditProfile = ({
  profile,
  setIsEditProfile,
  rewriteProfile,
  sendNewProfile,
}: defaultProps) => {
  const startValue: initValueType = {
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
      onSubmit={(values: initValueType) => {
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
      validationSchema={""}
    >
      {({ ...formikProps }) => {
        return <Fields {...formikProps} setIsEditProfile={setIsEditProfile} />;
      }}
    </Formik>
  );
};

const Fields = ({ setIsEditProfile }: formikProps) => {
  return (
    <Form>
      <div>
        <span>Name:</span>
        <Field
          className={style.inputs}
          type={"input"}
          name={"profileName"}
          placeholder={"New Name"}
        />
      </div>
      <div>
        <span>Surname:</span>
        <Field
          className={style.inputs}
          type={"input"}
          name={"profileSurname"}
          placeholder={"New Surname"}
        />
      </div>
      <div>
        <span>Nickname:</span>
        <Field
          className={style.inputs}
          type={"input"}
          name={"profileNick"}
          placeholder={"New Nickname"}
        />
      </div>
      <div>
        <span>Status:</span>
        <Field
          className={style.inputs}
          type={"input"}
          name={"profileStatus"}
          placeholder={"New Status"}
        />
      </div>
      <div>
        <span>Coutry:</span>
        <Field
          className={style.inputs}
          type={"input"}
          name={"profileCountry"}
          placeholder={"New Country"}
        />
      </div>
      <div>
        <span>City:</span>
        <Field
          className={style.inputs}
          type={"input"}
          name={"profileCity"}
          placeholder={"New City"}
        />
      </div>
      <div className={style.uploadAvatar}>
        <span>Loading Avatar from link:</span>
        <Field
          className={style.inputsAvatar}
          type={"input"}
          name={"profileAvatar"}
          placeholder={"URL new photo for avatar"}
        />
      </div>
      {/* {error} */}
      <br />
      <button type="submit" className={style.btn_apply}>
        Apply
      </button>
      <button
        type="reset"
        onClick={() => setIsEditProfile(false)}
        className={style.btn_cancel}
      >
        Cancel
      </button>
    </Form>
  );
};
