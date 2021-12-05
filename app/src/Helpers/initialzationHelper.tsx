import { updateAuthProfile } from "../store/thunks/profileThunks";
import { AppDispatch } from "../store/store";
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
  //const actualLogged = actualLoggedUser;
  //let actaualAuthData = await dispatch(actualLogged());
};
