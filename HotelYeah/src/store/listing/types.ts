export const CREATE_LISTING = "CREATE_LISTING";
export const DELETE_LISTING = "DELETE_LISTING";

export interface Listing {
    id: number;
    code: string;
    name: string;
    address: string;
    address2: string;
    city: string;
    state: string;
    zipCode: number;
    mainPhoneNumber: string;
    faxNumber: string;
    emailAddress: string;
    websiteAddress: string;
    imagePath: string;
    timestamp: number;
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