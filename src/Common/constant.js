export const ROUTES = {
    LOGIN: "/login",
    REGISTER: "/register",
    LOGOUT: "/logout",
    DASHBOARD: "/",
    CLIENT: "/client",
    PROFILE: "/profile",
    RECRUITER: "/recruiter",
}

export const TOKEN = "TOKEN"
export const ROLE = "ROLE"

export const ROLES = {
    ADMIN: "ADMIN",
    CLIENT: "CLIENT",
    RECRUITER: "RECRUITER"
}

export const CLIENT_CRUD_PAGE = ["ADMIN"]
export const RECRUITER_CRUD_PAGE = ["ADMIN"]
export const TABLE_LIMIT = 2

export const ROLE_TYPE = [
    { value: 'CLIENT', label: 'Client', key: 'CLIENT' },
    { value: 'RECRUITER', label: 'Recruiter', key: 'RECRUITER' },
];