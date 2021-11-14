import style from "../dialogs.module.css";

export const SingleMessage = (props: { body: string }) => {
  return <div className={style.messagesItem}>{props.body}</div>;
};
