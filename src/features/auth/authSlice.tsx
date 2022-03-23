import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../../app/store"
import {User} from "../user/user.types";

type AuthState = {
    user?: User | null
    token?: string | null
}

const slice = createSlice({
    name: "auth",
    initialState: { user: null, token: null } as AuthState,
    reducers: {
        setCredentials: (
            state,
            { payload: { user, token } }: PayloadAction<{ user: User; token: string }>
        ) => {
            state.user = user
            state.token = token
        },
        clearAuth: (state) => {
            delete state.user
            delete state.token
        },
    },
})

export const { setCredentials, clearAuth } = slice.actions
export default slice.reducer
export const getCurrentAuth = (state: RootState) => state.auth.user
