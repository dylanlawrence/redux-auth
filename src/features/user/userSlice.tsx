import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import type {RootState} from "../../app/store"
import {User, UserState} from "./user.types";


export const defaultUserState = {
    user: {
        email: '',
        avatar: '',
        profile: {
            name: '',
            phone: '',
            address: '',
            about: '',
            company: '',
        },
        roles: []
    },
    logged_in: false
} as UserState

const slice = createSlice({
    name: "user",
    initialState: defaultUserState,
    reducers: {
        setUser: (
            state,
            {payload: {user}}: PayloadAction<{ user: User }>
        ) => {
            state.user = user
            state.logged_in = true
        },
        clearUser: (state => {
            state.user = defaultUserState.user
            state.logged_in = defaultUserState.logged_in
        }),
    },
})



export const {setUser, clearUser} = slice.actions
export default slice.reducer
export const getCurrentUser = (state: RootState) => state.user.user
export const getUserLoggedIn = (state: RootState) => state.user.logged_in

