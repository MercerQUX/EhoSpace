import style from "./saidbar.module.css";
import { NavLink } from "react-router-dom";
import { dataListSaidbar } from "./saidbar-list";

const Saidbar = () => {
  return (
    <div className={style.saidbar}>
      <ul>
        {dataListSaidbar.map((link) => {
          return (
            <li>
              <NavLink
                to={link.path}
                className={({ isActive }) => (isActive ? style.activeLink : "")}
              >
                {link.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Saidbar;
