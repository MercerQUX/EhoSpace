import React from "react";
import DialogWindow from "./DialogsWindow/DialogsWindow";
import Messages from "./Messages/Message";
import style from "../CSS/main.module.css";
import styleD from "../CSS/dialogs.module.css"

const Dialogs = (props) => {
  return <div className={`${style.profile} ${styleD.wrapperDialog}`}>
    <DialogWindow state={props.state.dialogsUsers}/>
    <Messages state={props.state.dialogsMessages}/>
  </div>;
};
export default Dialogs;
