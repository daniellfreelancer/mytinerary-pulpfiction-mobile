import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import api_url from './api'

export const citiesAPI = createApi({

    reducerPath: "citiesAPI",


    baseQuery: fetchBaseQuery({
        baseUrl: api_url
    }),

    tagTypes: ['Post'],


    endpoints: (builder) => ({
        getAllCities: builder.query({
            query: (search) => `/cities/?city=${search}`
        }),
        getCityById: builder.query({
            query: (id) => `/cities/${id}`
        }),
        getCarousel: builder.query({
            query: () => '/cities'
        }),
        createCity: builder.mutation({
            query: (city) => ({
                url: '/cities',
                method: 'POST',
                body: city,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
        }),
        updateCity: builder.mutation({
            query: ({ id, ...mycity }) => ({
              url: `/cities/${id}`,
              method: "PATCH",
              body: mycity
            })
          }),
          deleteCity: builder.mutation({
            query: (idDelete) => ({
              url: `/cities/${idDelete}`,
              method: "DELETE",
            })
          }),

        invalidatesTags: ['Post']

    })
})

export default citiesAPI
export const { useGetAllCitiesQuery, useGetCityByIdQuery, useGetCarouselQuery, useCreateCityMutation, useUpdateCityMutation, useDeleteCityMutation } = citiesAPI
