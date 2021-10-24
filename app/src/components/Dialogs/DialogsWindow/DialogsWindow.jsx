import React, { useState } from "react";
import SingleDialog from "./singleDialog";
import style from "../../CSS/dialogs.module.css";

const DialogWindow = (props) => {
  let [test, setTest] = useState([
    { id: 1, name: "Lux" },
    { id: 2, name: "Lili" },
    { id: 3, name: "Frank" },
    { id: 4, name: "Mazer" },
    { id: 5, name: "Vincent" },
  ]);

  let mapUserDialogs = test.map((item) => (
    <SingleDialog name={item.name} id={item.id} />
  ));

  return <div className={style.wrapperDialogWindow}>{mapUserDialogs}</div>;
};

export default DialogWindow;
