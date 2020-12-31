export const UPDATE_SESSION = "UPDATE_SESSION"

export interface AuthState {
    loggedIn: boolean,
    session: string,
    id: number,
    userName: string, 
    lastName: string,
    address: string,
    address2: string,
    city: string,
    state: string,
    zipCode: number,
    country: string,
    homePhoneNumber: string,
    cellPhoneNumber: string,
    emailAddress: string
}

interface UpdateSessionAction {
    type: typeof UPDATE_SESSION
    payload: AuthState
}

export type AuthActionTypes = UpdateSessionAction