import { ICommonProfile } from "../../models/ICommonProfile";
import {
  getDatabase,
  query,
  orderByChild,
  equalTo,
  get,
  ref,
} from "firebase/database";
import { transformateInShortProfile } from "../../helpers/DB-helpers/transformateInShortProfile";

export const fetchShortProfileDB = async (arraySubscribeID: number[]) => {
  const db = getDatabase();
  const fetchProfile = query(ref(db, "users"));
  const profiles = await (await get(fetchProfile)).exportVal();
  const allUsers: ICommonProfile[] = Object.values(profiles);
  return transformateInShortProfile({
    arraySubscribeID,
    allUsers,
  });
};

export const fetchSingleProfileDB = async (id: number) => {
  const db = getDatabase();
  const fetchProfile = query(ref(db, "users"), orderByChild(`id`), equalTo(id));
  const profile: ICommonProfile = await (await get(fetchProfile)).exportVal();
  if (profile === null) {
    return new Error("User not found");
  } else {
    return profile;
  }
};
