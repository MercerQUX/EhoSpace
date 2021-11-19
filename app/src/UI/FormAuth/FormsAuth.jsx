import { useState } from "react";
import { FormLogin } from "./FormLogin";
import { FormRigister } from "./FormRegister";
import style from "../forms.module.css";

export const AuthForms = ({indentifyData,error}) => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <div
      className={`${style.container} ${isToggle && style.right_panel_active}`}
    >
      <div className={`${style.container__form} ${style.container__signup}`}>
        <FormRigister />
      </div>
      <div className={`${style.container__form} ${style.container__signin}`}>
        <FormLogin error={error} indentifyData={indentifyData}/>
      </div>
      <div className={style.container__overlay}>
        <div className={style.overlay}>
          <div className={`${style.overlay__panel} ${style.overlay__left}`}>
            <button
              onClick={() => setIsToggle(false)}
              className={style.btn}
              id="signIn"
            >
              Sign In
            </button>
          </div>
          <div className={`${style.overlay__panel} ${style.overlay__right}`}>
            <button
              onClick={() => setIsToggle(true)}
              className={style.btn}
              id="signUp"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
