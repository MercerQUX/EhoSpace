import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  addDoc,
  getFirestore,
  limit,
  orderBy,
  startAt,
} from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import {
  get,
  getDatabase,
  onValue,
  ref,
  query,
  orderByChild,
  limitToFirst,
  orderByKey,
  equalTo,
  limitToLast,
  startAfter,
  set,
} from "firebase/database";
import { userInfo } from "os";
import { handleLoginDB } from "./SignInDB";

export const Test: React.FC = ({}) => {
  const auth = getAuth();
  const handleRegister = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(
      auth,
      "MitchellRobinson@gmail.com",
      "testing1337"
    ).then((res) => {
      updateProfile(res.user, { displayName: "MitchellRob" });
    });
  };
  const rdbGet = async (id: number) => {
    const db = getDatabase();
    const fetchProfile = query(
      ref(db, "users"),
      orderByChild(`id`),
      equalTo(1031)
    );
    const profile = get(fetchProfile).then((res) => res.exportVal()[1]);
    if (profile === null) {
      return new Error("User not found");
    } else {
      return profile;
    }
  };
  const getUsers = async ({ limit, startFrom }: any) => {
    const openDB = getDatabase();
    const ss = query(
      ref(openDB, "users"),
      orderByKey(),
      limitToFirst(limit),
      startAfter(String(startFrom))
    );
    let array = await get(ss).then((res) => {
      return res.exportVal();
    });
    return array;
  };
  const fetchSingleProfile = async (ids: number) => {
    const db = getDatabase();
    const fetchProfile = query(
      ref(db, "users"),
      orderByChild(`id`),
      equalTo(ids)
    );
    const profile = await (await get(fetchProfile)).exportVal();
    if (profile === null) {
      return new Error("User not found");
    } else {
      return profile;
    }
  };
  const posts = async () => {
    const db = getDatabase();
    const fetchPosts = query(
      ref(db, "posts"),
      orderByChild(`userID`),
      equalTo(1034)
    );
    const post = await (await get(fetchPosts)).exportVal();
    let res: any = Object.values(post)[0];
    return res.posts;
  };
  const postsRe = async (id:number) => {
    const db = getDatabase();
    const clearID = id-1030;
    const reference = ref(db, `posts/${clearID}/posts`)
    set(reference, [{ id: 1, body: "421dsadsa" }]);
  };
  postsRe(1033);
  return <div>Test</div>;
};
