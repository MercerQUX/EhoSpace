import * as axios from "axios";
const LOGGED_DATA = "LOGGED_DATA";

const constAxios = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:4000",
});

const APIAuth = (action) => {
  switch (action.type) {
    case LOGGED_DATA:
      return constAxios.get("/authSystem?authNow_like").then((res) => {
        if (res.data[0].authNow.isAuth) {
          return res.data[0].authNow;
        }
      });
    default:
      return 0;
  }
};

export const getLoggedDataAPI = () => APIAuth({ type: LOGGED_DATA });
