import { ICommonProfile } from "../../models/ICommonProfile";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { ISignUp } from "../../models/ISigns";
import { getSizeProfilesDB } from "./totalUsersDB";

export const handleRegisterDB = async ({
  name,
  surname,
  country,
  email,
  login,
  password,
}: ISignUp) => {
  const auth = getAuth();
  await createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
      updateProfile(res.user, { displayName: login });
    })
    .then(() =>
      createNewUserDB({ name, surname, country, email, login, password })
    );
};

const createNewUserDB = async ({
  name,
  surname,
  country,
  email,
  login,
}: ISignUp) => {
  const openDB = getDatabase();
  const getTotalUsers = await getSizeProfilesDB();
  const newUserDB: ICommonProfile = {
    name: name,
    surname: surname,
    country: country,
    city: "Not indicated",
    nickname: "",
    id: 1030 + getTotalUsers,
    avatar: "",
    status: "",
  };
  await set(ref(openDB, "users/" + getTotalUsers), newUserDB);
  await set(ref(openDB, "innerData/" + login), {
    email: email,
    id: newUserDB.id,
  });
};
