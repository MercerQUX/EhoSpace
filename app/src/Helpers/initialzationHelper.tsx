import { fetchPosts, updateAuthProfile } from "../store/thunks/profileThunks";
import { AppDispatch } from "../store/store";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { authAction } from "../store/reducers/authSlice";
import { get, getDatabase, ref } from "firebase/database";
import { userAction } from "../store/reducers/userSlice";
import { fetchArrayFollowUsers } from "../store/thunks/dialogsThunks";
export const initlizationProfile = async (
  selectUser: string | undefined,
  idLoggedUser: number,
  auth: boolean,
  dispatch: AppDispatch
) => {
  const updateProfileData = updateAuthProfile;
  let selectedUser =
    isNaN(Number(selectUser)) && auth ? idLoggedUser : Number(selectUser);
  await dispatch(updateProfileData(selectedUser));
  await dispatch(fetchPosts(selectedUser));
};
export const initialzationApp = async (dispatch: any) => {
  const auth = getAuth();
  const openDB = getDatabase();
  const { initializeAuthProfile } = authAction;
  const { setFriends } = userAction;
  onAuthStateChanged(auth, async (user) => {
    if (user !== null) {
      const reference = ref(openDB, `innerData/${user.displayName}`);
      let getUserInfo = await get(reference).then((res) => res.val());

 await dispatch(
        initializeAuthProfile({
          isAuth: true,
          login: user.displayName,
          id: getUserInfo.id,
        })
      );
    await dispatch(setFriends(getUserInfo.following));
    await dispatch(fetchArrayFollowUsers(getUserInfo.following))
    } else {
      dispatch(initializeAuthProfile({ isAuth: false, login: "", id: 0 }));
    }
  });
};
