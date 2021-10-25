import React, { useState } from "react";
import style from "../../CSS/dialogs.module.css";
import SingleMessage from "./SingleMessage";

const Messages = (props) => {
  let mapMessages = props.state.map((item) => (
    <SingleMessage body={item.body} />
  ));

  return <div className={style.wrapperMessages}>{mapMessages}</div>;
};

export default Messages;
