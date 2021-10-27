import React from "react";
import style from "../CSS/main.module.css";
import styleD from "../CSS/dialogs.module.css";
import MessageContainer from "./Messages/MessageContainer";
import DialogsWindowContainer from "./DialogsWindow/DialogsWindowContainer";

const Dialogs = () => {
  return (
    <div className={`${style.profile} ${styleD.wrapperDialog}`}>
      <DialogsWindowContainer />
      <MessageContainer />
    </div>
  );
};
export default Dialogs;
