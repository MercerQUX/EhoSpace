import React, { useState } from "react";
import style from "../../CSS/dialogs.module.css";
import SingleMessage from "./SingleMessage";

const Messages = (props) => {
  const [test, setTest] = useState([
    { body: "Hello", other: false },
    { body: "How are you?", other: false },
    { body: "I'm fine", other: false },
  ]);

  let mapMessages = test.map((item) => <SingleMessage body={item.body} />);

  return <div className={style.wrapperMessages}>{mapMessages}</div>;
};

export default Messages;
