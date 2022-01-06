import { useAppDispatch } from "../../hooks/redux-use";
import { deletePosts } from "../../store/thunks/profile-thunk";
import style from "../asset.module.sass";

export const PostConfirm = ({ display, switchDisplay, idPost }) => {
  const dispatch = useAppDispatch();

  return (
    <div style={display} className={style.postConfirm}>
      <div className={style.confirm_block}>
        <span onClick={() => switchDisplay({ display: "none" })}>X</span>
        <p>
          The post you selected can be deleted permanently, are you sure want to
          do it?
        </p>
        <div>
          <button
            onClick={() => {
              dispatch(deletePosts(idPost));
              switchDisplay({ display: "none" });
            }}
          >
            Accept
          </button>
          <button onClick={() => switchDisplay({ display: "none" })}>
            Closed
          </button>
        </div>
      </div>
    </div>
  );
};
