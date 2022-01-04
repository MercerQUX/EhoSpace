import style from "../asset.module.sass";
import preloader from "../chat-preloader.svg";
export const ChatPreloader = () => {
  return (
    <div className={style.wrapperProfile}>
      <img className={style.preloader_chat} src={preloader} alt="preloader" />
    </div>
  );
};
