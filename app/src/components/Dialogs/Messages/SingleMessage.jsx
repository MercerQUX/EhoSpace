import React from "react";
import style from "../../CSS/dialogs.module.css";

const SingleMessage = ({ body }) => {
  return <div className={style.messagesItem}>{body}</div>;
};

export default SingleMessage;
