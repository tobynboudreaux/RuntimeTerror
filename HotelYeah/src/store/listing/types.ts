export const CREATE_LISTING = "CREATE_LISTING";
export const DELETE_LISTING = "DELETE_LISTING";

export interface Listing {
    name: string,
    price: number,
    rooms: number,
    timestamp: number
}

export interface ListingState {
    listings: Listing[]
}

interface CreateListingAction {
    type: typeof CREATE_LISTING
    payload: Listing;
}

interface DeleteListingAction {
    type: typeof DELETE_LISTING
    meta: {
        timestamp: number
    }
}

export type ListingActionTypes = CreateListingAction | DeleteListingAction