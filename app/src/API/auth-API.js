import * as axios from "axios";
const LOGGED_DATA = "LOGGED_DATA";
const DELETE_LOGGED_DATA = "DELETE_LOGGED_DATA";
const SEND_LOGGED_DATA = "SEND_LOGGED_DATA";
const INDENTIFY_LOGIN = "INDENTIFY_LOGIN";
const INDENTIFY_PASSWORD = "INDENTIFY_PASSWORD";

const constAxios = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:4000",
});

const APIAuth = (action) => {
  switch (action.type) {
    case LOGGED_DATA:
      return constAxios.get("/authSystem").then((res) => {
        if (res.data.isAuth) {
          return res.data;
        }
      });
    case DELETE_LOGGED_DATA:
      return constAxios.post("/authSystem", {
        id: 0,
        login: null,
        email: null,
        isAuth: false,
      });
    case SEND_LOGGED_DATA:
      return constAxios.post("/authSystem", {
        id: action.data.id,
        login: action.data.login,
        email: action.data.email,
        isAuth: action.data.isAuth,
      });
    case INDENTIFY_PASSWORD:
      return constAxios.get(`/authPassword/${action.id}`).then((res) => {
        return res.data.password === action.password;
      });
    case INDENTIFY_LOGIN:
      return constAxios.get(`/authData?q=${action.login}`).then((res) => {
        if (res.data.length != 0) {
          let filterData = res.data.filter((i) => action.login == i.login)[0];
          return filterData ? filterData : 0;
        } else {
          return 0;
        }
      });
    default:
      return 0;
  }
};

export const getLoggedDataAPI = () => APIAuth({ type: LOGGED_DATA });
export const deleteLoggedDataAPI = () => APIAuth({ type: DELETE_LOGGED_DATA });
export const sendLoggedDataAPI = (data) =>
  APIAuth({ type: SEND_LOGGED_DATA, data });
export const indentifyLoginAPI = (login) =>
  APIAuth({ type: INDENTIFY_LOGIN, login });
export const indentifyPasswordAPI = (id, password) =>
  APIAuth({ type: INDENTIFY_PASSWORD, id, password });
