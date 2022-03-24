export type UserState = {
    user?: User
    logged_in: Boolean
}

export interface User {
    email?: string
    roles?: []
    avatar?: string
    profile?: UserProfile
}

export interface UserProfile {
    name?: string
    phone?: string
    dob?: Date,
    address?: string
    about?: string
    company?: string
}
