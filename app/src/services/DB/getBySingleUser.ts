import { getDatabase, query, get, ref } from "firebase/database";

export const getByUserLoginDB = async (userLogin: string) => {
  const openDB = getDatabase();
  const getUserData = query(ref(openDB, `innerData/${userLogin}`));
  return await get(getUserData)
    .then((res) => {
      return res.val().email;
    })
    .catch((e) => {
      return new Error("AuthError: not found user-data");
    });
};

export const getByUserIdDB = async (login: string | null) => {
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
