// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery(
    { 
        baseUrl: 'https://dummyjson.com' 
    }
),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products?limit=5',
    }),
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsQuery,useGetProductByIdQuery } = productApi