import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import type {RootState} from "../../app/store"
import {User, UserState} from "./user.types";

const initUser = {
    user: {
        email: '',
        avatar: '',
        first_name: '',
        last_name: '',
        roles: [],
        logged_in: false
    }
} as UserState

const slice = createSlice({
    name: "user",
    initialState: initUser,
    reducers: {
        setUser: (
            state,
            {payload: {user}}: PayloadAction<{ user: User }>
        ) => {
            state.user = user
            state.logged_in = true
        },
        clearUser: (state => {
            // @ts-ignore
            state.user = initUser
            state.logged_in = false
        }),
    },
})

export const {setUser, clearUser} = slice.actions
export default slice.reducer
export const getCurrentUser = (state: RootState) => state.user.user
export const getUserLoggedIn = (state: RootState) => state.user.logged_in

