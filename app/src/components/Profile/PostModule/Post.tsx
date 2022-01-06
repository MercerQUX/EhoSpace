import { useAppDispatch } from "../../../hooks/redux-use";
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
  selectPost: (idPost: number) => void;
  openConfirm: (display: { display: string }) => void;
};
export const Post: React.FC<defaultProps> = ({
  name,
  surname,
  img,
  idPost,
  text,
  time,
  isOwner,
  selectPost,
  openConfirm,
}) => {
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
              selectPost(idPost);
              openConfirm({ display: "flex" });
            }}
          >
            Delete
          </span>
        )}
      </div>
    </div>
  );
};
