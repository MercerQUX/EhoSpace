import React from "react";
import { NavLink } from "react-router-dom";
import style from "../../CSS/dialogs.module.css"

const SingleDialog = (props) =>{
    return (
    <div className={style.dialogsWindowItem}>
        <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
    )
}

export default SingleDialog;