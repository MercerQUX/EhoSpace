import React from "react";
import style from "../../CSS/profile.module.css"

const PostCreater = (props) =>{
    return ( 
        <div className={style.wrapperCreaterPost}>
            <h2>My Post</h2>
            <div>
                <textarea></textarea>
            </div>
            <div className={style.wrapperButPost}>
                <button>Posting Post</button>
                <button>Remove Post</button>
            </div>
        </div>
    )
}

export default PostCreater;