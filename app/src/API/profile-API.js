import * as axios from "axios";
const GET_SINGLE_USER = "GET_SINGLE_USER";

const constAxios = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:4000",
});

const APIProfile = (action) => {
  switch (action.type) {
    case GET_SINGLE_USER:
      return constAxios
        .get(`/users/${action.selected}`)
        .then((res) => res.data);
    default:
      return 0;
  }
};

export const getSingleUserAPI = (selected) =>
  APIProfile({ type: GET_SINGLE_USER, selected: selected });
