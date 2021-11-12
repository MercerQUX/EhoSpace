import style from "../../CSS/dialogs.module.css";

const SingleMessage = (props:{ body:string }) => {
  return <div className={style.messagesItem}>{props.body}</div>;
};

export default SingleMessage;
