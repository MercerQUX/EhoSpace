import axios from "axios";
import { profileAPIActionsType } from "./types/APITypes";
const GET_SINGLE_USER = "GET_SINGLE_USER";

const constAxios = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:4000",
});

const APIProfile = (action: profileAPIActionsType) => {
  switch (action.type) {
    case GET_SINGLE_USER:
      return constAxios
        .get(`/users/${action.selected}`)
        .then((res) => res.data);
    default:
      return 0;
  }
};

export const getSingleUserAPI = (selected: number) =>
  APIProfile({ type: GET_SINGLE_USER, selected: selected });
