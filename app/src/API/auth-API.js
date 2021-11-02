import * as axios from "axios";
const LOGGED_DATA = "LOGGED_DATA";

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
    default:
      return 0;
  }
};

export const getLoggedDataAPI = () => APIAuth({ type: LOGGED_DATA });
