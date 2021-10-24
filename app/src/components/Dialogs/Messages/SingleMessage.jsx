import React from "react";
import style from "../../CSS/dialogs.module.css";

const SingleMessage = (props) => {
  return <div className={style.messagesItem}>{props.body}</div>;
};

export default SingleMessage;