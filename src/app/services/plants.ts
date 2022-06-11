import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PlantType } from '../../types';

export const plantsApi = createApi({
  reducerPath: 'plantApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    getPlants: builder.query<PlantType[], void>({
      query: () => `plants`,
    }),
    getPlantById: builder.query<PlantType, string>({
      query: (id) => `plants/${id}`,
    }),
    addPlant: builder.mutation<PlantType, Partial<PlantType[]>>({
      query: (body) => ({
        url: `plants`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useAddPlantMutation, useGetPlantByIdQuery, useGetPlantsQuery } =
  plantsApi;
