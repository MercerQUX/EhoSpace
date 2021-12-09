import style from "../dialogs.module.css";
import { SingleDialog } from "./SingleDialog";
export const DialogsBlock:React.FC<{}> = ({}) => {
  return (
    <div className={style.wrapperContactsDialogs}>
      <div className={style.headerDialogs}>
        <span>Dialogs</span>
        <div className={style.showDialogs_btn}></div>
      </div>
      {/* <div className={style.usersDialogs}>
        {[1,2,3,5,5,5,5,5].map((u)=>{
          return <SingleDialog/>
        })}
      </div> */}
      <div className={style.footerDialogs}></div>
    </div>
  );
};
