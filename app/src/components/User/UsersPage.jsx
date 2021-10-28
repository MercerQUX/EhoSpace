import style from "../CSS/main.module.css";
import User from "./User";

const UsersPage = (props) => {
  let mapUsers = props.users.map((user) => (
    <User
      id={user.id}
      key={user.id}
      data={user}
      follow={props.follow}
      unfollow={props.unfollow}
    />
  ));
  return <div className={style.profile}>{mapUsers}</div>;
};

export default UsersPage;
