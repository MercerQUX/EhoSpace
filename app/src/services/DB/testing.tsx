import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
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
} from "firebase/database";
import { userInfo } from "os";
import { handleLoginDB } from "./SignInDB";

export const Test: React.FC = ({}) => {
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
  const rdbGet = async () => {
    const db = getDatabase();
    const ss = query(ref(db, "users"), limitToFirst(4));
    onValue(ss, (snapshot) => {
      const data = snapshot.val();
      console.log(data, "first");
    });
  };
  return <div>Test</div>;
};
