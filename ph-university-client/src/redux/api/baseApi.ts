/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  DefinitionType,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout, setUser } from "../features/auth/authSlice";

// pass token for every request to server
const baseQuery = fetchBaseQuery({
  baseUrl: "https://ph-univesity-server.vercel.app/api/v1",
  credentials: "include",

  // we can sent accessToken per request to backend
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth?.token;

    if (token) {
      headers.set("authorization", `${token}`);
    }

    return headers;
  },
});

// create custom baseQuery for generate new token by refreshToken
const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (arg, api, extraOptions): Promise<any> => {
  let result = await baseQuery(arg, api, extraOptions);

  console.log("result fo custom base query", result);

  // if token is expired then we got an error
  if (result.error?.status === 401) {
    // try to get new token req for new Token
    const res = await fetch(
      "https://ph-univesity-server.vercel.app/api/v1/auth/refresh-token",
      {
        method: "POST",
        credentials: "include",
      }
    );

    // get new token
    const data = await res.json();

    if (data?.data?.accessToken) {
      const user = (api.getState() as RootState).auth.user;

      // set new access Token in state
      api.dispatch(
        setUser({
          user,
          token: data.data.accessToken,
        })
      );

      result = await baseQuery(arg, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};

// base api
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});
