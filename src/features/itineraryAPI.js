import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import api_url from './api'

export const itineraryAPI = createApi({

    reducerPath: "itineraryAPI",


    baseQuery: fetchBaseQuery({
        baseUrl: api_url
    }),

    tagTypes: ['patch'],

    endpoints: (builder) => ({
        tinerariesById: builder.query({
            query: (idTinerary) =>({
                url: `/myItineraries/search/${idTinerary}`,
                method: 'GET'
            }) 
        }),
        // getAllItinerary: builder.query({
        //     query: (id) => `/myItineraries/?city=${id}`
        // }),
        getItineraryLIKE: builder.mutation({
            query: (id) => ({
                url: `/myItineraries/?city=${id}`,
                method: 'GET'
            })
        }),
        getTineraries: builder.query({
            query: (userID) => `/myItineraries/?user=${userID}`
        }),
        deleteTineraries: builder.mutation({
            query: (itineraryID) => ({
                url: `/myItineraries/${itineraryID}`,
                method: 'DELETE',
            })
        }),
        createItinerary: builder.mutation({
            query: (itinerary) => ({
                url: 'myItineraries/itineraries',
                method: 'POST',
                body: itinerary,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
        }),
        patchItinerary: builder.mutation({
            query: ({id, ...myNewTinerary}) => ({
                url: `/myItineraries/${id}`,
                method: 'PATCH',
                body: myNewTinerary
            })
        }),
        likeTineraries: builder.mutation({
            query: (itineraryIDLike) => ({
                url: `/myItineraries/likes/${itineraryIDLike}`,
                method: 'PATCH',
                headers: {
                    Authorization: "Bearer " + JSON.parse(localStorage.getItem("token"))
                }
            })
        }),
        allTinerariesAdmin: builder.query({
            query: () => ({
                url: `/myItineraries/alltineraries`,
                method: 'GET',
                headers: {
                    Authorization: "Bearer " + JSON.parse(localStorage.getItem("token"))
                }
            })
        }),

        invalidatesTags: ['patch']
    })
})

export default itineraryAPI
export const { useGetAllItineraryQuery,
    useGetTinerariesQuery,
    useDeleteTinerariesMutation,
    useCreateItineraryMutation,
    useLikeTinerariesMutation,
    usePatchItineraryMutation,
    useTinerariesByIdQuery,
    useAllTinerariesAdminQuery,
    useGetItineraryLIKEMutation
     } = itineraryAPI
