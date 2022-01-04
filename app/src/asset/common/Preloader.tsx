import style from "../asset.module.sass";
import preloader from "../preloader.svg";
export const Preloader = () => {
  return (
    <div>
      <img className={style.preloader} src={preloader} alt="preloader" />
    </div>
  );
};