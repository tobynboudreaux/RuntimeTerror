import {
    ListingState,
    ListingActionTypes,
    CREATE_LISTING,
    DELETE_LISTING
} from "./types"

const initialState: ListingState = {
    listings: []
}

export function listingReducer (
    state = initialState,
    action: ListingActionTypes
): ListingState {
    switch (action.type) {
        case CREATE_LISTING:
            return {
                listings: [...state.listings, action.payload]
            }
        case DELETE_LISTING:
            return {
                listings: state.listings.filter(
                    listing => listing.timestamp !== action.meta.timestamp
                )
            }
        default:
            return state
    }
}