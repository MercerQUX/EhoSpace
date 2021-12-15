import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-use";
import { dialogsUsers } from "../../../store/reselectors/dialogs-selector";
import { getFollowingID } from "../../../store/reselectors/users-selector";
import style from "../dialogs.module.css";
import { SingleDialog } from "./SingleDialog";
import cn from "classnames";
import { fetchArrayFollowUsers } from "../../../store/thunks/dialogsThunks";

export const DialogsBlock: React.FC<{}> = ({}) => {
  const dispatch = useAppDispatch();
  const followedUsers = useAppSelector(dialogsUsers);
  const friends = useAppSelector(getFollowingID);
  useEffect(() => {
    dispatch(fetchArrayFollowUsers(friends));
    console.log("useEffect");
  }, [friends]);
  let mapDialogsUser = followedUsers.map((u) => {
    return (
      <SingleDialog
        surname={u.surname}
        nickname={u.nickname}
        key={u.id}
        id={u.id}
        avatar={u.avatar}
        name={u.name}
      />
    );
  });

  const [hide_show, set_hide_show] = useState(false);
  let animOne: string | undefined;
  let animTwo: string | undefined;
  let animThree: string | undefined;
  if (hide_show) {
    animOne = cn(style.wrapperContactsDialogs, style.animationHideDialogs);
    animTwo = cn(style.animWrapperActive, style.animShowBtn);
    animThree = cn(style.animWrapperDisabled);
  } else {
    animOne = cn(style.wrapperContactsDialogs, style.animationShowDialogs);
    animTwo = cn(style.animWrapperDisabled, style.animHideBtn);
    animThree = cn(style.animWrapperActive);
  }

  return (
    <div className={animThree}>
      <div className={animTwo}>
        <div
          className={style.showDialogs_btn}
          onClick={() => set_hide_show(false)}
        >
          {">>>>"}
        </div>
      </div>

      <div className={animOne}>
        <div className={style.headerDialogs}>
          <span>Dialogs</span>
          <div
            className={style.showDialogs_btn}
            onClick={() => set_hide_show(true)}
          >
            {"<<<<"}
          </div>
        </div>
        <div className={style.usersDialogs}>
          {followedUsers.length >= 1 ? (
            mapDialogsUser
          ) : (
            <h2 className={style.emptyDialogs}>
              You don't have any active dialogue! Use the "Users" page to
              subscribe!
            </h2>
          )}
        </div>
        <div className={style.footerDialogs}></div>
      </div>
    </div>
  );
};
