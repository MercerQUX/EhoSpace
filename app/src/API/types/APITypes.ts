import { ICommonProfile } from './../../models/ICommonProfile';
import { IDataAuth } from "./../../models/IDataAuth";
//AUTH-API-TYPES
const LOGGED_DATA = "LOGGED_DATA";
const DELETE_LOGGED_DATA = "DELETE_LOGGED_DATA";
const SEND_LOGGED_DATA = "SEND_LOGGED_DATA";
const INDENTIFY_LOGIN = "INDENTIFY_LOGIN";
const INDENTIFY_PASSWORD = "INDENTIFY_PASSWORD";

export type authAPIActionsType =
  | getLoggedDataAPIType
  | deleteLoggedDataAPIType
  | sendLoggedDataAPIAPIType
  | indentifyLoginAPIAPIType
  | indentifyPasswordAPIAPIType;

type getLoggedDataAPIType = { type: typeof LOGGED_DATA };
type deleteLoggedDataAPIType = { type: typeof DELETE_LOGGED_DATA };
type sendLoggedDataAPIAPIType = {
  type: typeof SEND_LOGGED_DATA;
  data: IDataAuth;
};
type indentifyLoginAPIAPIType = { type: typeof INDENTIFY_LOGIN; login: string };
type indentifyPasswordAPIAPIType = {
  type: typeof INDENTIFY_PASSWORD;
  id: null | number;
  password: string;
};

export type dataAuthType = {
  isAuth: boolean;
};
export type dataIdentifyType = {
  id: null | number;
  email: null | string;
  login: null | string;
};
export type passwordAuthType = {
  id: number;
  password: string;
};

//PROFILE-API-TYPES
const GET_SINGLE_USER = "GET_SINGLE_USER";

export type profileAPIActionsType = getSingleUserAPIType;

type getSingleUserAPIType = {
  type: typeof GET_SINGLE_USER;
  selected: number | undefined;
};
//USERS-API-TYPES
const TOTAL_USERS = "TOTAL_USERS";
const GET_USERS_PART = "GET_USERS_PART";
const REWRITE_USER = "REWRITE_USER";

export type usersAPIActionsType =
  | getNumberTotalUsersAPIType
  | getPartUsersAPIType
  | rewriteUserAPIType;

type getNumberTotalUsersAPIType = { type: typeof TOTAL_USERS };
type getPartUsersAPIType = {
  type: typeof GET_USERS_PART;
  page: number;
  limit: number;
};
type rewriteUserAPIType = {
  type: typeof REWRITE_USER;
  id: number;
  user: ICommonProfile;
};
