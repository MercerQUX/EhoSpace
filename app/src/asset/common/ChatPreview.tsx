import style from "../asset.module.sass";
import animation from "../chat-preview.svg";
export const ChatPreview = () => {
  return (
    <div>
      <img className={style.chatPreview} src={animation} alt="" />
    </div>
  );
};
