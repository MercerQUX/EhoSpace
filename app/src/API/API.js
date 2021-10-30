import * as axios from "axios";

const USERS_TYPE = "USERS_TYPE";
const PROFILE_TYPE = "PROFILE_TYPE";
const AUTH_TYPE = "AUTH_TYPE";

const TOTAL_USERS = "TOTAL_USERS";
const GET_USERS_PART = "GET_USERS_PART";
const GET_SINGLE_USER = "GET_SINGLE_USER";

const constAxios = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:4000",
});

const API = (action) => {
  switch (action.typeA) {
    case USERS_TYPE:
      switch (action.typeB) {
        case TOTAL_USERS:
          return constAxios.get("/totalUsers").then((res) => res.data[0]);
        case GET_USERS_PART:
          return constAxios
            .get(`/users?_page=${action.page}&_limit=${action.limit}`)
            .then((res) => res.data);
      }
    case PROFILE_TYPE:
      switch (action.typeB) {
        case GET_SINGLE_USER:
          return constAxios
            .get(`/users/${action.selected}`)
            .then((res) => res.data);
        default:
          return 0;
      }
    case AUTH_TYPE:
      switch (action.typeB) {
        default:
          return 0;
      }
    default:
      return 0;
  }
};

export const getNumberTotalUsersAPI = () =>
  API({ typeA: USERS_TYPE, typeB: TOTAL_USERS });

export const getPartUsersAPI = (page, limit) =>
  API({ typeA: USERS_TYPE, typeB: GET_USERS_PART, page: page, limit: limit });

export const getSingleUserAPI = (selected) =>
  API({ typeA: PROFILE_TYPE, typeB: GET_SINGLE_USER, selected: selected });

export default API;
