import { usersType } from "./../redux/types/ReducersTypes";
import axios from "axios";
import { usersAPIActionsType } from "./types/APITypes";

const TOTAL_USERS = "TOTAL_USERS";
const GET_USERS_PART = "GET_USERS_PART";
const REWRITE_USER = "REWRITE_USER";

const constAxios = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:4000",
});

const API = (action: usersAPIActionsType) => {
  switch (action.type) {
    case TOTAL_USERS:
      return constAxios
        .get<Array<any>>("/totalUsers")
        .then((res) => res.data[0]);
    case GET_USERS_PART:
      return constAxios
        .get<Array<usersType>>(
          `/users?_page=${action.page}&_limit=${action.limit}`
        )
        .then((res) => res.data);
    case REWRITE_USER:
      return constAxios.put<usersType>(`/users/${action.id}`, {
        ...action.user,
      });
    default:
      return 0;
  }
};

export const getNumberTotalUsersAPI = () => API({ type: TOTAL_USERS });

export const getPartUsersAPI = (page: number, limit: number) =>
  API({ type: GET_USERS_PART, page: page, limit: limit });

export const rewriteUserAPI = (data:{id: number, user: usersType}) =>
  API({ type: REWRITE_USER, id: data.id, user:data.user });
