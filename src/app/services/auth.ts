import {RootState} from "../store";
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {LoginRequest, LogoutRequest, LogoutResponse, UserResponse} from "../../features/auth/auth.types";

export const api = createApi({
    reducerPath: "auth",
        baseQuery: fetchBaseQuery({
            baseUrl: '/',
            prepareHeaders: (headers, {getState}) => {
                // By default, if we have a token in the store, let's use that for authenticated requests
                const token = (getState() as RootState).auth.token
                if (token) {
                    headers.set('authorization', `Bearer ${token}`)
                }
                return headers
            },
        }),
    endpoints: (build) => ({
        login: build.mutation<UserResponse, LoginRequest>({
            query: (q) => {
                return {
                    url: 'login',
                    method: 'POST',
                    body: q,
                }
            },
        }),
        logout: build.mutation<LogoutResponse, LogoutRequest>({
            query: (q) => {
                return {
                    url: 'logout',
                    method: 'POST',
                    body: q,
                }
            },
        }),
        protected: build.mutation({query: () => "protected"})
    })
});

export const {useLoginMutation, useLogoutMutation, useProtectedMutation} = api;

