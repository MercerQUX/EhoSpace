import style from "../asset.module.css";
import preloader from "../preloader.svg";
export const Preloader = () => {
  return (
    <div>
      <img className={style.preloader} src={preloader} alt="preloader" />
    </div>
  );
};