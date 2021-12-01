import { actualLoggedUser } from "../../store/thunks/authThunks";
import { updateAuthProfile } from "../../store/thunks/profileThunks";
import { useAppDispatch } from "../../hooks/redux-use";
import { AppDispatch } from "../../store/store";
export const initlizationProfile = async (
  selectUser: number,
  idLoggedUser: number,
  auth: boolean,
  dispatch: AppDispatch
) => {
  const updateProfileData = updateAuthProfile;
  const actualLogged = actualLoggedUser;
  let actaualAuthData = await dispatch(actualLogged());

  let bib = await dispatch(
    updateProfileData({
      selectUserID: undefined,
      loggedID: actaualAuthData.payload.id,
      isAuth: true,
    })
  );
};
