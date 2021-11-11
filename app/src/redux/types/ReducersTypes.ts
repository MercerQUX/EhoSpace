//AUTH-REDUCER
export type dataLoggedType = {
  id: null | number;
  email: null | string;
  login: null | string;
  isAuth: boolean;
  error: null | string;
};
//PROFILE-REDUCER
export type postsType = {
  id: number;
  body: string;
};
export type profileType = null | {
  id: number;
  followed: boolean;
  name: string;
  surname: string;
  nickname: string;
  status: string;
  country: string;
  city: string;
  avatar: string;
};
//DIALOGS-REDUCER
export type dialogsUsersType = {
  id: number;
  name: string;
};
export type dialogsMessagesType = {
  id: number;
  body: string;
  other: boolean;
};
//USERS-REDUCER
export type usersType = {
  id: number;
  followed: boolean;
  name: string;
  surname: string;
  nickname: string;
  status: string;
  country: string;
  city: string;
  avatar: string;
};
