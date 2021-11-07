import { useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import { FormControl } from "../../../UI/form/FormControl";
import {
  maxLength15,
  maxLength100,
  required,
} from "../../../UI/form/validation/validators";
import style from "../../CSS/profile.module.css";

const EditMode = reduxForm({ form: "editProfile" })(
  ({ handleSubmit, change, value, closeEditProfile, submitSucceeded }) => {
    useEffect(() => {
      change("profileName", value.name);
      change("profileSurname", value.surname);
      change("profileNick", value.nickname);
      change("profileStatus", value.status);
      change("profileCountry", value.country);
      change("profileCity", value.city);
      if (submitSucceeded) {
        closeEditProfile();
      }
    }, [value]);

    return (
      <div>
        <div className={style.wrapperEditMode}>
          <div className={style.wrapperForm}>
            <form onSubmit={handleSubmit}>
              <div>
                <span>Name:</span>
                <Field
                  className={style.inputs}
                  component={FormControl}
                  type={"input"}
                  name={"profileName"}
                  validate={[required, maxLength15]}
                  dataType={"input"}
                  placeholder={"New Name"}
                />
              </div>
              <div>
                <span>Surname:</span>
                <Field
                  className={style.inputs}
                  component={FormControl}
                  type={"input"}
                  name={"profileSurname"}
                  validate={[required, maxLength15]}
                  dataType={"input"}
                  placeholder={"New Surname"}
                />
              </div>
              <div>
                <span>Nickname:</span>
                <Field
                  className={style.inputs}
                  component={FormControl}
                  type={"input"}
                  name={"profileNick"}
                  validate={[maxLength15]}
                  dataType={"input"}
                  placeholder={"New Nickname"}
                />
              </div>
              <div>
                <span>Status:</span>
                <Field
                  className={style.inputs}
                  component={FormControl}
                  type={"input"}
                  name={"profileStatus"}
                  validate={[maxLength100]}
                  dataType={"input"}
                  placeholder={"New Status"}
                />
              </div>
              <div>
                <span>Coutry:</span>
                <Field
                  className={style.inputs}
                  component={FormControl}
                  type={"input"}
                  name={"profileCountry"}
                  validate={[required, maxLength15]}
                  dataType={"input"}
                  placeholder={"New Country"}
                />
              </div>
              <div>
                <span>City:</span>
                <Field
                  className={style.inputs}
                  component={FormControl}
                  type={"input"}
                  name={"profileCity"}
                  validate={[maxLength15]}
                  dataType={"input"}
                  placeholder={"New City"}
                />
              </div>
              <div className={style.uploadAvatar}>
                <span>Loading Avatar from link:</span>
                <Field
                  className={style.inputsAvatar}
                  component={FormControl}
                  type={"input"}
                  name={"profileAvatar"}
                  dataType={"input"}
                  placeholder={"URL new photo for avatar"}
                />
              </div>
              <Field component={FormControl} dataType={"error"} />
              <br />
              <button className={style.btn_apply}>Apply</button>
              <button
                type={"reset"}
                onClick={closeEditProfile}
                className={style.btn_cancel}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
);

export default EditMode;
