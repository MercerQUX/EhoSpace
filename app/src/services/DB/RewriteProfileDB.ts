import { getDatabase, ref, set } from "firebase/database";
import { ICommonProfile } from "../../models/ICommonProfile";
export const rewriteProfile = async (
  id: number,
  newProfile: ICommonProfile
) => {
  const openDB = getDatabase();
  const idArrayUsers = id - 1030;
  await set(ref(openDB, "users/" + idArrayUsers), newProfile);
};


