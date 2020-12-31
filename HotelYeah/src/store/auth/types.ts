export const UPDATE_SESSION = "UPDATE_SESSION"

export interface AuthState {
    loggedIn: boolean,
    session: string,
    userName: string
}

interface UpdateSessionAction {
    type: typeof UPDATE_SESSION
    payload: AuthState
}

export type AuthActionTypes = UpdateSessionAction