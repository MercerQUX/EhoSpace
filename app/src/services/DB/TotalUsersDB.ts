import { getDatabase, get, ref } from "firebase/database";

export const getSizeProfilesDB = async () =>
  (await get(ref(getDatabase(), "users"))).size;
