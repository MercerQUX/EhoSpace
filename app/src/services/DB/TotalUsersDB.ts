import { getDatabase, get, ref } from "firebase/database";

export const getSizeProfilesDB = async () => {
  const db = getDatabase();
  const reference = ref(db, "users");
  const getSize = (await get(reference)).size;
  return getSize;
};
