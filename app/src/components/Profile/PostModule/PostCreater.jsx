import style from "../../CSS/profile.module.css";
import Post from "./Post";
import { Field, reduxForm, reset } from "redux-form";
import { required, maxLength430 } from "../../../UI/form/validation/validators";
import { FormControl } from "../../../UI/form/FormControl";

const PostCreater = ({ posts, addPost, profile }) => {
  let map = () => {
    if (profile == null) {
      return <h2 className={style.loading}>Loading...</h2>;
    } else {
      return posts.map((item) => {
        return (
          <Post
            name={profile.name}
            surname={profile.surname}
            img={profile.avatar}
            text={item.body}
          />
        );
      });
    }
  };

  return (
    <div className={style.wrapperCreaterPost}>
      <div>
        <h2>My Post</h2>
        <PostCreaterReduxForm
          onSubmit={(values) => {
            addPost(values);
            reset();
          }}
        />
      </div>
      {<div className={style.posts}>{map()}</div>}
    </div>
  );
};

const afterSubmit = (res, dispatch) => {
  dispatch(reset("postCreator"));
};

const PostCreaterReduxForm = reduxForm({
  form: "postCreator",
  onSubmitSuccess: afterSubmit,
})((props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={FormControl}
        name={"newPost"}
        placeholder={"Your a new post..."}
        validate={[required, maxLength430]}
        dataType={"textarea"}
      />
      <button className={style.btn_post} type="submit">
        Posting Post
      </button>
    </form>
  );
});

export default PostCreater;
