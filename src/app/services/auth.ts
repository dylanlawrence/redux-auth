import {RootState} from "../store";
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export interface User {
    first_name: string
    last_name: string
}

export interface UserResponse {
    user: User
    token: string
}

export interface LoginRequest {
    username: string
    password: string
}

export const api = createApi({
    reducerPath: "auth",
    baseQuery: fetchBaseQuery({
        baseUrl: '/',
        prepareHeaders: (headers, { getState }) => {
            console.log('base');
            // By default, if we have a token in the store, let's use that for authenticated requests
            const token = (getState() as RootState).auth.token
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    endpoints: (builder) => ({
        login: builder.mutation<UserResponse, LoginRequest>({
            query: (credentials) => {
                console.log(credentials);
                return {
                url: 'login',
                method: 'POST',
                body: credentials,
            }},
        }),
        protected: builder.mutation({query: () => "protected"})
    })
});

export const {useLoginMutation, useProtectedMutation} = api;

