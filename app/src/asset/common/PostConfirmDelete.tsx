import { useAppDispatch } from "../../hooks/redux-use";
import { deletePosts } from "../../store/thunks/profile-thunk";
import style from "../asset.module.sass";

interface IDefaultProps {
  switchDisplay: (display: boolean) => void;
}

export const PostConfirmDelete = ({ switchDisplay }: IDefaultProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className={style.postConfirmDelete}>
      <div className={style.confirm_block_delete}>
        <span onClick={() => switchDisplay(false)}>X</span>
        <p>
          The post you selected can be deleted permanently, are you sure want to
          do it?
        </p>
        <div>
          <button
            onClick={() => {
              dispatch(deletePosts());
              switchDisplay(false);
            }}
          >
            Accept
          </button>
          <button onClick={() => switchDisplay(false)}>Closed</button>
        </div>
      </div>
    </div>
  );
};
