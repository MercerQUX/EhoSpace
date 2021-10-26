import React, { useState } from "react";
import {
  addMessageAction,
  changeInputMessageAction,
} from "../../../redux/dialogs-reducer";
import style from "../../CSS/dialogs.module.css";
import SingleMessage from "./SingleMessage";

const Messages = (props) => {
  let mapMessages = props.state.dialogsMessages.map((item) => (
    <SingleMessage body={item.body} />
  ));

  return (
    <div className={style.wrapperMessages}>
      {mapMessages}
      <div className={style.messageTextArea}>
        <textarea
          value={props.state.newTextMessage}
          onChange={(e) =>
            props.dispatch(changeInputMessageAction(e.target.value))
          }
        ></textarea>
        <button onClick={() => props.dispatch(addMessageAction())}>Send</button>
      </div>
    </div>
  );
};

export default Messages;
