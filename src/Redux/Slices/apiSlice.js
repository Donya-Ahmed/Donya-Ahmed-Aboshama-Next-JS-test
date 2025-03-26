import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl:  process.env.NEXT_PUBLIC_BASE_URL,
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
    }),
    getSingleProducts: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery,useGetSingleProductsQuery } = apiSlice;
