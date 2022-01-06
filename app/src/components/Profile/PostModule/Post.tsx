import { useAppDispatch } from "../../../hooks/redux-use";
import { profileAction } from "../../../store/reducers/profileSlice";
import { deletePosts } from "../../../store/thunks/profile-thunk";
import style from "../profile.module.sass";

type defaultProps = {
  idPost: number;
  name: string;
  surname: string;
  img: string;
  text: string;
  time: string;
  isOwner: boolean;
  openConfirmDelete: (display:boolean) => void;
  openConfirmEdit: (display:boolean) => void;
};
export const Post: React.FC<defaultProps> = ({
  name,
  surname,
  img,
  idPost,
  text,
  time,
  isOwner,
  openConfirmDelete,
  openConfirmEdit,
}) => {
  const dispatch = useAppDispatch();
  const {installSelectPost} = profileAction;

  return (
    <div className={style.wrapperPost}>
      <div style={{ display: "flex" }}>
        <img src={img} alt="aaa" />
        <div className={style.container_content}>
          <span className={style.post_fullname}>{`${name} ${surname}`}</span>
          <br />
          <span className={style.postTime}>{time}</span>
          <p>{text}</p>
        </div>
      </div>
      <div>
        {isOwner && (
          <span
            className={style.btn_close}
            onClick={() => {
              dispatch(installSelectPost(idPost))
              openConfirmEdit(true);
            }}
          >
            Edit
          </span>
        )}
        {isOwner && (
          <span
            className={style.btn_close}
            onClick={() => {
              dispatch(installSelectPost(idPost));
              openConfirmDelete(true);
            }}
          >
            Delete
          </span>
        )}
      </div>
    </div>
  );
};
