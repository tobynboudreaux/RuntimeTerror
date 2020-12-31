import { combineReducers } from '@reduxjs/toolkit'
import { authReducer } from './auth/reducers'
import { listingReducer } from './listing/reducers'

const rootReducer = combineReducers({
    auth: authReducer,
    listing: listingReducer,
})

export type RootState = ReturnType<typeof rootReducer>