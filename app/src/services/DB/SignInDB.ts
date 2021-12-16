import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { get, getDatabase, query, ref } from "firebase/database";
import { ISignIn } from "../../models/ISigns";

export const handleLoginDB = async ({ email_login, password }: ISignIn) => {
  const pureEmail = await remakeEmailInLogin(email_login);
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, pureEmail, password);
};
const remakeEmailInLogin = async (email_login: string) => {
  const openDB = getDatabase();

  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})/.test(email_login)) {
    return email_login;
  } else {
    const getUserData = query(ref(openDB, `innerData/${email_login}`));
    return await get(getUserData)
      .then((res) => {
        return res.val().email;
      })
      .catch((e) => {
        return new Error("AuthError: not found user-data");
      });
  }
};

export const getByUID = async (login: string | null) => {
  const openDB = getDatabase();
  const getUserData = query(ref(openDB, `innerData/${login}`));
  return await get(getUserData)
    .then((res) => {
      return res.val().id;
    })
    .catch((e) => {
      return 0;
    });
};
