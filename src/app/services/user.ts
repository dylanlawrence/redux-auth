import {RootState} from "../store";
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {User} from "../../features/user/user.types";

export const api = createApi({
    reducerPath: "user",
    baseQuery: fetchBaseQuery({
        baseUrl: '/',
        prepareHeaders: (headers, {getState}) => {
            const token = (getState() as RootState).auth.token
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    endpoints: (build) => ({
        getUser: build.query<User, string>({
            query: (id) => ({ url: `user/${id}` }),
        })
    })
});


export const {useGetUserQuery, reducerPath, reducer, middleware} = api;

