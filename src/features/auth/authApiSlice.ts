import {apiSlice} from '../../services/apiSlice';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: params => ({
        url: '/oauth/token',
        method: 'POST',
        params: {...params},
      }),
    }),
  }),
});

export const {useLoginMutation}: any = authApiSlice;
