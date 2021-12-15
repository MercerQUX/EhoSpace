import {
  getDatabase,
  query,
  orderByChild,
  equalTo,
  get,
  set,
  ref,
} from "firebase/database";
import { IPosts } from "../../models/IPost";
type uploadPostsType = { id: number; newPost: Array<IPosts> };


export const fetchPostsDB = async (id: number) => {
  const db = getDatabase();
  const fetchPosts = query(
    ref(db, "posts"),
    orderByChild(`userID`),
    equalTo(id)
  );
  const post = await (await get(fetchPosts)).exportVal();
  let res: any = Object.values(post)[0];
  return Object.values(res.posts);
};

export const uploadPostsDB = async ({ id, newPost }: uploadPostsType) => {
  const db = getDatabase();
  const clearID = id - 1030;
  const referenceFirst = ref(db, `posts/${clearID}/userID`);
  await set(referenceFirst, id);
  const referenceSecond = ref(db, `posts/${clearID}/posts`);
  await set(referenceSecond, newPost);
};



