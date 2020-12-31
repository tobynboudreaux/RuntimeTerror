import { Listing, CREATE_LISTING, DELETE_LISTING, ListingActionTypes } from './types';

export function createListing(newListing: Listing): ListingActionTypes {
    return {
        type: CREATE_LISTING,
        payload: newListing
    }
}

export function deleteListing(timestamp: number): ListingActionTypes {
    return {
        type: DELETE_LISTING,
        meta: {
            timestamp
        }
    }
}