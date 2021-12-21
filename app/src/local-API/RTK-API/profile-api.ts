import { ICommonProfile } from "../../models/ICommonProfile";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const profileAPI = createApi({
  reducerPath: "profileAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
  endpoints: (build) => ({
    fetchSingleProfile: build.query<ICommonProfile, number>({
      query: (selectedID: number) => ({
        url: `/users/${selectedID}`,
        params: {},
      }),
    }),
  }),
});
