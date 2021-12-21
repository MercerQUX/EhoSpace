import { fetchPosts, updateAuthProfile } from "../store/thunks/profile-thunk";
import { AppDispatch } from "../store/store";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { authAction } from "../store/reducers/authSlice";
import { get, getDatabase, ref } from "firebase/database";
import { userAction } from "../store/reducers/userSlice";
import { profileAction } from "../store/reducers/profileSlice";
import { fetchArrayFollowUsers } from "../store/thunks/dialogs-thunk";

export const initlizationProfile = async (
  selectUser: string | undefined,
  idLoggedUser: number,
  auth: boolean,
  dispatch: AppDispatch
) => {
  const updateProfileData = updateAuthProfile;
  const { defineOwnerProfile } = profileAction;
  let selectedUser =
    isNaN(Number(selectUser)) && auth ? idLoggedUser : Number(selectUser);
  await dispatch(updateProfileData(selectedUser));
  await dispatch(defineOwnerProfile(idLoggedUser));
  await dispatch(fetchPosts(selectedUser));
};
export const initialzationApp = async (dispatch: any) => {
  const auth = getAuth();
  const openDB = getDatabase();
  const { initializeAuthProfile } = authAction;
  const { setFriends } = userAction;
  onAuthStateChanged(auth, async (user) => {
    if (user === null) {
      await dispatch(
        initializeAuthProfile({ isAuth: false, login: "", id: 0 })
      );
    } else {
      const reference = ref(openDB, `innerData/${user.displayName}`);
      const getInfo = await (await get(reference)).exportVal();

      if (getInfo === null) {
        await dispatch(
          initializeAuthProfile({ isAuth: false, login: "", id: 0 })
        );
      } else {
        await dispatch(fetchArrayFollowUsers(getInfo.following));
        await dispatch(setFriends(getInfo.following));
        dispatch(
          initializeAuthProfile({
            isAuth: true,
            login: user.displayName,
            id: getInfo.id,
          })
        );
      }
    }
  });
};
