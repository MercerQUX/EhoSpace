import React, { useState } from "react";
import style from "../../CSS/dialogs.module.css"
import SingleMessage from "./SingleMessage";

const Messages = (props) => {
  const [test,setTest] = useState([
    {body:"Hello", other:false},
    {body:"How are you?", other:false},
    {body:"I'm fine", other:false},
  ])
  return <div className={style.wrapperMessages}>
    <SingleMessage body={test[0].body}/>
    <SingleMessage body={test[1].body}/>
    <SingleMessage body={test[2].body}/>
  </div>;
};

export default Messages;