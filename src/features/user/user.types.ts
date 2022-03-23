export type UserState = {
    user?: User | null
    logged_in: Boolean
}

export interface User {
    email?: string
    roles?: []
    avatar?: string
    profile?: {
        name?: string
        company?: string
        dob?: Date,
        address?: string
        about?: string
        phone?: string
    }
}
