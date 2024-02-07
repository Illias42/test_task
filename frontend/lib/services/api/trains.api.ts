import { api } from "./base.api";
import { API, HttpMethods } from "@/lib/constants/api";

const trainsApiWithtag = api.enhanceEndpoints({
  addTagTypes: ["Train"],
});

export const trainsApi = trainsApiWithtag.injectEndpoints({
  endpoints: (build) => ({
    getAllTrains: build.query({
      query: () => API.TRAINS,
      providesTags: ["Train"],
    }),
    getTrains: build.query({
      query: (params) => ({
        url: API.TRAINS_ROUTE,
        params,
      }),
    }),
    editTrain: build.mutation({
      query: (data) => ({
        url: API.TRAINS,
        method: HttpMethods.PATCH,
        data,
      }),
    }),
    createTrain: build.mutation({
      query: (data) => ({
        url: API.TRAINS,
        method: HttpMethods.POST,
        data,
      }),
    }),
    deleteTrain: build.mutation({
      query: (id) => ({
        url: `${API.TRAINS}/${id}`,
        method: HttpMethods.DELETE,
      }),
      invalidatesTags: ["Train"],
    }),
  }),
});

export const {
  useLazyGetAllTrainsQuery,
  //   useGetAllTrainsQuery,
  useLazyGetTrainsQuery,
  useEditTrainMutation,
  useCreateTrainMutation,
  useDeleteTrainMutation,
} = trainsApi;
