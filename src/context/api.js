import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  // Asosiy API URL
  baseUrl: "https://fakestoreapi.com",
  prepareHeaders: (headers) => {
    const laylo = localStorage.getItem("laylo")
    if (laylo) {
      // Har so'rovda mana shu token headersda qo'shib jo'natiladi
      headers.set('authentication', `${laylo}`)
    }
    return headers
  },
})

// Qayta urinish soni
const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 })

export const api = createApi({
  reducerPath: 'mainApi',
  baseQuery: baseQueryWithRetry,
  tagTypes: ["Product", "User"], // O'zgarish bo'lganda qayta fetch qilish uchun Tag Typelar
  endpoints: () => ({}),
})

