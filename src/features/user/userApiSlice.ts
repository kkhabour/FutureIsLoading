import {apiSlice} from '../../services/apiSlice';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getMe: builder.query({
      query: () => '/v2/me',
    }),
  }),
});

export const {useGetMeQuery}: any = userApiSlice;
