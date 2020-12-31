import { AuthState, AuthActionTypes, UPDATE_SESSION } from './types'

const initialState: AuthState = {
    loggedIn: false,
    session: "",
    id: 0,
    userName: "",
    lastName: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    zipCode: 0,
    country: "",
    homePhoneNumber: "",
    cellPhoneNumber: "",
    emailAddress: ""
}

export function authReducer (
    state = initialState,
    action: AuthActionTypes
): AuthState {
    switch (action.type) {
        case UPDATE_SESSION: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state
    }
}