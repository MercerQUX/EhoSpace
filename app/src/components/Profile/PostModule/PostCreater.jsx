import style from "../../CSS/profile.module.css";
import Post from "./Post";
import { Field, reduxForm, reset } from "redux-form";
import { required, maxLength150 } from "../../../UI/form/validation/validators";
import { FormControl } from "../../../UI/form/FormControl";

const PostCreater = ({ posts, addPost }) => {
  let mapPost = posts.map((item) => <Post text={item.body} />);

  return (
    <div className={style.wrapperCreaterPost}>
      <h2>My Post</h2>
      <PostCreaterReduxForm
        onSubmit={(values) => {
          addPost(values);
        }}
      />
      <div>{mapPost}</div>
    </div>
  );
};

const PostCreatorForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={FormControl}
          name={"newPost"}
          placeholder={"Your a new post..."}
          validate={[required, maxLength150]}
          dataType={"textarea"}
        />
      </div>
      <div className={style.wrapperButPost}>
        <button type="submit">Posting Post</button>
        <button type="reset" onClick={() => props.reset()}>
          Remove Post
        </button>
      </div>
    </form>
  );
};

//const afterSubmit = (dispatch) => {dispatch(reset("postCreator"));

const PostCreaterReduxForm = reduxForm({
  form: "postCreator",
  //onSubmitSuccess: afterSubmit,
})(PostCreatorForm);

export default PostCreater;
