import style from "../asset.module.css";
import preloader from "../preloader.svg";
const Preloader = () => {
  return (
    <div>
      <img className={style.preloader} src={preloader} alt="preloader" />
    </div>
  );
};

export default Preloader;
