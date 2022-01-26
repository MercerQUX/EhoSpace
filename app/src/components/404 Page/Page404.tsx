import styleMain from "../../main.module.sass";
import style from "./page404.module.sass";
import cosmoImg from "../../asset/cosmo.png";
import { Navigate, NavLink } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux-use";
import { stateErrorLoading } from "../../store/reselectors/profile-selector";

export const Page404 = () => {
  const { refresh } = { refresh: useAppSelector(stateErrorLoading) };
  return (
    <div className={styleMain.page404}>
      {refresh && <Navigate to={"/profile"} />}
      <div className={style.wrapperCosmo}>
        <img src={cosmoImg} alt="cosmo" className={style.cosmoImg} />
      </div>
      <div className={style.text404}>
        <p className={style.pagenotfound}>
          <span>404</span>
          <br />
          <span>page</span>
          <br /> <span>not found</span>
        </p>
        <NavLink className={style.link_back} to={"/profile"}>
          back to profile page
        </NavLink>
      </div>
    </div>
  );
};
