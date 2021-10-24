import React, { useState } from "react";
import SingleDialog from "./singleDialog";
import style from "../../CSS/dialogs.module.css";

const DialogWindow = (props) => {
    let [test,setTest] = useState([
        {id:1,name:'Lux'},
        {id:2,name:'Lili'},
        {id:3,name:'Frank'},
        {id:4,name:'Mazer'},
        {id:5,name:'Vincent'},
    ])
  return (
    <div className={style.wrapperDialogWindow}>
      <SingleDialog name={test[0].name} id={test[0].id}/>
      <SingleDialog name={test[1].name} id={test[1].id}/>
      <SingleDialog name={test[2].name} id={test[2].id}/>
      <SingleDialog name={test[3].name} id={test[3].id}/>
      <SingleDialog name={test[4].name} id={test[4].id}/>
    </div>
  );
};

export default DialogWindow;
