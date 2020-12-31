import { AuthState, UPDATE_SESSION, AuthActionTypes } from './types'

export function updateSession(newSession: AuthState): AuthActionTypes {
    return {
        type: UPDATE_SESSION,
        payload: newSession
    }
}