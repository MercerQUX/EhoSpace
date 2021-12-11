import {
  getDatabase,
  get,
  query,
  orderByChild,
  equalTo,
  ref,
} from "firebase/database";

export const validateLoginDB = async (login: string) => {
  const db = getDatabase();
  const reference = ref(db, "innerData/");
  const valid = (await get(reference)).hasChild(login);
  return valid ? false : true;
};
export const validateEmailDB = async (email: string) => {
  const db = getDatabase();
  const reference = query(
    ref(db, "innerData/"),
    orderByChild("email"),
    equalTo(email)
  );
  const valid = (await get(reference)).size;
  return valid ? false : true;
};
