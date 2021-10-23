import React from "react";
import style from "../CSS/main.module.css";

const Saidbar = (props) =>{
    return (
        <div className={style.saidbar}>
            <ul>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Message</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Music</a></li><br/>
                <li><a href="#">Setting</a></li>
            </ul>
        </div>
    )
}

export default Saidbar;