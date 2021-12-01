import { IDataAuth } from "./../../models/IDataAuth";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

type dataIdentifyType = {
  id: null | number;
  email: null | string;
  login: null | string;
};
type passwordAuthType = {
  id: number;
  password: string;
};

export const profileAPI = createApi({
  reducerPath: "profileAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
  endpoints: (build) => ({
    fetchLoggedData: build.query<IDataAuth, unknown>({
      query: () => ({
        url: `/authSystem`,
        params: {},
      }),
    }),
    indentifyLogin: build.query<dataIdentifyType, { login: string }>({
      query: ({ login }) => ({
        url: `/authData?q=${login}`,
        params: {},
      }),
      transformResponse: (response: { data: dataIdentifyType }) =>
        response.data,
    }),
    indentifyPassword: build.query<passwordAuthType, { id: number }>({
      query: ({ id }) => ({
        url: `/authPassword/${id}`,
        params: {},
      }),
      transformResponse: (response: { data: passwordAuthType }) =>
        response.data,
    }),
    updateLoggedData: build.mutation<IDataAuth, IDataAuth>({
      query: (data) => ({
        url: `/authSystem`,
        method: "POST",
        body: {
          id: data.id,
          login: data.login,
          email: data.email,
          isAuth: data.isAuth,
        },
      }),
    }),
    resetLoggedData: build.mutation<IDataAuth, unknown>({
      query: () => ({
        url: `/authSystem`,
        method: "POST",
        body: {
          id: 0,
          login: null,
          email: null,
          isAuth: false,
        },
      }),
    }),
  }),
});
