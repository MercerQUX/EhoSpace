import {
  getDatabase,
  query,
  orderByChild,
  equalTo,
  get,
  ref,
} from "firebase/database";

export const fetchSingleProfile = async (id: number) => {
  const db = getDatabase();
  const fetchProfile = query(ref(db, "users"), orderByChild(`id`), equalTo(id));
  const profile = await (await get(fetchProfile)).exportVal();
  if (profile === null) {
    return new Error("User not found");
  } else {
    return profile;
  }
};
