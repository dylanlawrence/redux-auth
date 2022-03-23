
export type UserState = {
    user?: User | null
    logged_in: Boolean
}

export interface User {
    roles: any
    email: string
    avatar?: string
    first_name: string
    last_name: string
}
