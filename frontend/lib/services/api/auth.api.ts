import { api } from "./base.api";
import { API, HttpMethods } from "@/lib/constants/api";

const authApiWithtag = api.enhanceEndpoints({});

export const authApi = authApiWithtag.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (data) => ({
        url: API.LOGIN,
        method: HttpMethods.POST,
        data,
      }),
    }),
    signup: build.mutation({
      query: (data) => ({
        url: API.SIGNUP,
        method: HttpMethods.POST,
        data,
      }),
    }),
  }),
});

export const {
    useLoginMutation,
    useSignupMutation
} = authApi;