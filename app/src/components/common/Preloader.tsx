import style from "../CSS/users.module.css";
import preloader from "../../UI/preloader.svg";
const Preloader = () => {
  return (
    <div>
      <img className={style.preloader} src={preloader} alt="preloader" />
    </div>
  );
};

export default Preloader;