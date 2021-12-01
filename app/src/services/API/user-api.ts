
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ICommonProfile } from "../../models/ICommonProfile";

interface IArgumentFetchPartUsers {
  page: number;
  limit: number;
}
interface IArgumentMutationUser {
  id: number;
  modifiedUser: ICommonProfile;
}
export const userAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
  endpoints: (build) => ({
    fetchTotalUsers: build.query<Array<number>, unknown>({
      query: () => ({
        url: `/totalUsers`,
      }),
    }),
    fetchPartUsers: build.query<Array<ICommonProfile>, IArgumentFetchPartUsers>(
      {
        query: ({ page, limit }) => ({
          url: `/users?_page=${page}&_limit=${limit}`,
        }),
      }
    ),
    rewriteUser: build.mutation<IArgumentMutationUser, IArgumentMutationUser>({
      query: ({ id, modifiedUser }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: { ...modifiedUser },
      }),
    }),
  }),
});
