import style from "../dialogs.module.css";
interface defaultProps {
  name: string;
  surname: string;
  nickname: string;
  avatar: string;
}
export const SingleDialog: React.FC<any> = ({
  name,
  surname,
  nickname,
  avatar,
}) => {
  return (
    <div className={style.wrapperSingleDialog}>
      <div className={style.infoDialog}>
        <span className={style.infoName}>Name</span>
        <span className={style.infoStatus}>offline</span>
      </div>
      <div className={style.avatar}></div>
    </div>
  );
};
