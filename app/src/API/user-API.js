import * as axios from "axios";

const TOTAL_USERS = "TOTAL_USERS";
const GET_USERS_PART = "GET_USERS_PART";
const REWRITE_USER = "REWRITE_USER";

const constAxios = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:4000",
});

const API = (action) => {
  switch (action.type) {
    case TOTAL_USERS:
      return constAxios.get("/totalUsers").then((res) => res.data[0]);
    case GET_USERS_PART:
      return constAxios
        .get(`/users?_page=${action.page}&_limit=${action.limit}`)
        .then((res) => res.data);
    case REWRITE_USER:
      return constAxios.put(`/users/${action.id}`, {
        ...action.status,
      });
    default:
      return 0;
  }
};

export const getNumberTotalUsersAPI = () => API({ type: TOTAL_USERS });

export const getPartUsersAPI = (page, limit) =>
  API({ type: GET_USERS_PART, page: page, limit: limit });

export const rewriteUserAPI = (userID, status) =>
  API({ type: REWRITE_USER, id: userID, status: status });
