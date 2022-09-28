import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import api_url from './api'

export const userAPI = createApi({

    reducerPath: "userAPI",
    

    baseQuery: fetchBaseQuery({
        baseUrl: api_url
    }),


    endpoints: (builder) => ({
        signUpUser: builder.mutation({
            query: (user) => ({
                url: '/auth/signup',
                method: 'POST',
                body: user,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
        }),
        signInUser: builder.mutation({
            query: (user) => ({
                url: '/auth/signin',
                method: 'POST',
                body: user,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
        }),
        signInToken: builder.mutation({
            query: () => ({
                url: '/auth/token',
                method: 'GET',
                headers: { Authorization: "Bearer " + JSON.parse(localStorage.getItem("token"))}
                })
        }),
        signOutUser: builder.mutation({
            query: (mail) => ({
                url: '/auth/signout',
                method: 'POST',
                body: mail,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
        }),
        editMyProfile: builder.mutation({
            query: ({ id, ...user }) => ({
                url: `/auth/update/${id}`,
                method: 'PATCH',
                body: user,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
        })

        


    })
})

export default userAPI
export const { useSignUpUserMutation, useSignInUserMutation, useSignOutUserMutation, useSignInTokenMutation, useEditMyProfileMutation } = userAPI