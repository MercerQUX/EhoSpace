import { updateAuthProfile } from "../store/thunks/profileThunks";
import { AppDispatch } from "../store/store";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { authAction } from "../store/reducers/authSlice";
import { get, getDatabase, ref } from "firebase/database";
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
  onAuthStateChanged(auth, async (user) => {
    if (user !== null) {
      let getUserID = await get(
        ref(openDB, `innerData/${user.displayName}`)
      ).then((res) => res.val().id);
      dispatch(
        initializeAuthProfile({
          isAuth: true,
          login: user.displayName,
          id: getUserID,
        })
      );
    } else {
      dispatch(initializeAuthProfile({ isAuth: false, login: "", id: 0 }));
    }
  });
};
