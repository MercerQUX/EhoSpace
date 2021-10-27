import React from "react";
import DialogWindow from "./DialogsWindow/DialogsWindow";
import Messages from "./Messages/Message";
import style from "../CSS/main.module.css";
import styleD from "../CSS/dialogs.module.css";
import MessageContainer from "./Messages/MessageContainer";

const Dialogs = (props) => {
  return (
    <div className={`${style.profile} ${styleD.wrapperDialog}`}>
      <DialogWindow state={props.store.getState().pageDialogs} />
      <MessageContainer store={props.store} />
    </div>
  );
};
export default Dialogs;
