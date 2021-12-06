import { updateAuthProfile } from "../store/thunks/profileThunks";
import { AppDispatch } from "../store/store";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { authAction } from "../store/reducers/authSlice";
import { get, getDatabase, ref } from "firebase/database";
import { userAction } from "../store/reducers/userSlice";
export const initlizationProfile = async (
  selectUser: string | undefined,
  idLoggedUser: number,
  auth: boolean,
  dispatch: AppDispatch
) => {
  const updateProfileData = updateAuthProfile;

  await dispatch(
    updateProfileData({
      selectUserID: Number(selectUser),
      loggedID: idLoggedUser,
      isAuth: auth,
    })
  );
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

      dispatch(
        initializeAuthProfile({
          isAuth: true,
          login: user.displayName,
          id: getUserInfo.id,
        })
      );
      dispatch(setFriends(getUserInfo.following));
    } else {
      dispatch(initializeAuthProfile({ isAuth: false, login: "", id: 0 }));
    }
  });
};
