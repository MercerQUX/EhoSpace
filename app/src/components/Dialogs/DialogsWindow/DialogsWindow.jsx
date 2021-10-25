import React, { useState } from "react";
import SingleDialog from "./singleDialog";
import style from "../../CSS/dialogs.module.css";

const DialogWindow = (props) => {
  let mapUserDialogs = props.state.map((item) => (
    <SingleDialog name={item.name} id={item.id} />
  ));

  return <div className={style.wrapperDialogWindow}>{mapUserDialogs}</div>;
};

export default DialogWindow;
