import { useState } from "react";
import { FormLogin } from "./FormLogin";
import { FormRigister } from "./FormRegister";
import style from "../forms.module.css";
import cn from "classnames"

export const AuthForms = () => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <div
      className={cn(style.container, isToggle&&style.right_panel_active)}
    >
      <div className={cn(style.container__form ,style.container__signup)}>
        <FormRigister />
      </div>
      <div className={cn(style.container__form, style.container__signin)}>
        <FormLogin/>
      </div>
      <div className={style.container__overlay}>
        <div className={style.overlay}>
          <div className={cn(style.overlay__panel,style.overlay__left)}>
            <button
              onClick={() => setIsToggle(false)}
              className={style.btn}
              id="signIn"
            >
              Sign In
            </button>
          </div>
          <div className={cn(style.overlay__panel,style.overlay__right)}>
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
