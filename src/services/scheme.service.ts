import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IScheme } from '@models/scheme.model';

const schemeApi = createApi({
  reducerPath: 'schemeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
  endpoints: (build) => ({
    getConfig: build.query<IScheme, {}>({
      query: () => ({
        url: '/config',
      }),
    }),
  }),
});
