import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {RootState} from '../store';
// import {setCredentials, unsetCredentials} from '../features/auth/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.intra.42.fr',
  credentials: 'include',
  prepareHeaders: (headers, {getState}: any) => {
    const token = (getState() as RootState).auth.access_token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

// const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
//   const result = await baseQuery(args, api, extraOptions);

//   console.log('status =>', result);
//   //   if (result?.error?.originalStatus === 403)
// };

export const apiSlice = createApi({
  baseQuery: baseQuery,
  endpoints: builder => ({}),
});
