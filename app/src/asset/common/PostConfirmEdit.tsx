import { useAppSelector } from "../../hooks/redux-use";
import { stateProfileSelectedPost } from "../../store/reselectors/profile-selector";
import { FormEditPost } from "../../UI/FormCreatePost/FormEditPost";
import style from "../asset.module.sass";

interface IDefaultProps {
  switchDisplay: (display: boolean) => void;
  switchDisplayOnDelete: (display: boolean) => void;
}

export const PostConfirmEdit = ({
  switchDisplay,
  switchDisplayOnDelete,
}: IDefaultProps) => {
  const selectedPost = useAppSelector(stateProfileSelectedPost);
  console.log(selectedPost);
  return (
    <div className={style.postConfirmEdit}>
      <div className={style.confirm_block_edit}>
        <div className={style.header_block_edit}>
          <span className={style.header_title}>Post Editor Window</span>
          <span
            onClick={() => switchDisplay(false)}
            className={style.header_close}
          >
            X
          </span>
        </div>
        <FormEditPost body={selectedPost.body} switchDisplay={switchDisplay} />
        <div className={style.footer_block_edit}>
          <button
            onClick={() => switchDisplay(false)}
            className={style.cancel_btn}
          >
            Cancel
          </button>
          <button
            onClick={() => {
              switchDisplay(false);
              switchDisplayOnDelete(true);
            }}
            className={style.delete_btn}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
