import {User} from "../user/user.types";

export interface LoginRequest {
    username: string
    password: string
}
export interface LoginResponse {
    user: User
    token: string
}

export interface LogoutRequest {
    session_id?: string
}

export interface LogoutResponse {
    msg: string
}





