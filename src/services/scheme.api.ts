import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IScheme } from '@models/scheme.model';

export const schemeApi = createApi({
  reducerPath: 'schemeReducer',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
  endpoints: (build) => ({
    getConfig: build.query<IScheme, unknown>({
      query: () => ({
        url: '/config',
      }),
    }),
  }),
});
