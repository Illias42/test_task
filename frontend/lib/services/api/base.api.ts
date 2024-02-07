import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApiQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3000/api",
  prepareHeaders: (headers) => {
    return headers;
  },
});

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseApiQuery,
  endpoints: () => ({}),
});
