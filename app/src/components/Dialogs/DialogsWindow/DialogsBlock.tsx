import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-use";
import { dialogsUsers } from "../../../store/reselectors/dialogs-selector";
import { getFollowingID } from "../../../store/reselectors/users-selector";
import { fetchArrayFollowUsers } from "../../../store/thunks/dialogsThunks";
import style from "../dialogs.module.css";
import { SingleDialog } from "./SingleDialog";

export const DialogsBlock: React.FC<{}> = ({}) => {
  const dispatch = useAppDispatch();
  const followedUsers = useAppSelector(dialogsUsers);
  const friends = useAppSelector(getFollowingID);
  useEffect(() => {
    dispatch(fetchArrayFollowUsers(friends))
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
  return (
    <div className={style.wrapperContactsDialogs}>
      <div className={style.headerDialogs}>
        <span>Dialogs</span>
        <div className={style.showDialogs_btn}></div>
      </div>
      <div className={style.usersDialogs}>
        {followedUsers.length >= 1 ? (
          mapDialogsUser
        ) : (
          <h2>
            You don't have any active dialogue! Use the "Users" page to
            subscribe!
          </h2>
        )}
      </div>
      <div className={style.footerDialogs}></div>
    </div>
  );
};
