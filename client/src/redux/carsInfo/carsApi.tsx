import { createApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const carsApi = createApi({
  reducerPath: 'cars',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api/cars',
  }),
  keepUnusedDataFor: 90,
  refetchOnFocus: false,
  refetchOnReconnect: true,
  endpoints: (build) => ({
    getCars: build.query({
      query: (query) => `${query}`,
    }),
    getCar: build.mutation({
      query: (carID) => ({
        method: 'GET',
        url: `/car/${carID}`,
      }),
    }),
    deleteCar: build.mutation({
      query: (carID) => ({
        method: 'DELETE',
        url: `/car/${carID}`,
      }),
    }),
    postCar: build.mutation({
      query: (body): string | FetchArgs => ({
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        url: '/',
        body,
      }),
    }),
  }),
});

export const {
  useGetCarsQuery,
  useGetCarMutation,
  usePostCarMutation,
  useDeleteCarMutation,
} = carsApi;
