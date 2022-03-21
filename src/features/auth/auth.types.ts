export interface LoginRequest {
    username: string
    password: string
}

export interface UserResponse {
    user: User
    token: string
}

export interface LogoutRequest {
    session_id?: string
}

export interface LogoutResponse {
    msg: string
}

export interface User {
    first_name: string
    last_name: string
}



