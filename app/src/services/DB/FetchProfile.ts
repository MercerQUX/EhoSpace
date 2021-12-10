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

export const fetchShortProfile = async (array: number[]) => {
  const db = getDatabase();
  const fetchProfile = query(ref(db, "users"));
  const profiles = await (await get(fetchProfile)).exportVal();
  const allUsers = Object.values(profiles);
  const sortUsers = array.map((u: any) => {
    const followUser: any = allUsers.filter((i: any) => {
      return i.id === u;
    })[0];
    const shortUser = {
      id:followUser.id,
      avatar: followUser.avatar,
      name: followUser.name,
      surname: followUser.surname,
      nickname: followUser.nickname,
    };
    return shortUser;
  });
  return sortUsers;
};
