import { TAcademicSemester } from "../../../types/academicManagement.types";
import { TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

export const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createAcademicSemester: builder.mutation({
      query: (data) => ({
        url: "/academic-semesters/create-academic-semester",
        method: "POST",
        body: data,
      }),
    }),
    getAllSemester: builder.query({
      query: () => ({
        url: "/academic-semesters",
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
        console.log("transformResponse", response);
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
  }),
});
