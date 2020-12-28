import * as actionTypes from "./actionTypes"

const initialState: ListingState = {
  listings: [
    {
      id: 1,
      title: "post 1",
      body:
        "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
    },
    {
      id: 2,
      title: "post 2",
      body:
        "Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint",
    },
  ],
}

const reducer = (
    state: ListingState = initialState,
    action: ListingAction
  ): ListingState => {
    switch (action.type) {
      case actionTypes.ADD_LISTING:
        const newListing: IListing = {
          id: Math.random(), // not really unique
          title: action.listing.title,
          body: action.listing.body,
        }
        return {
          ...state,
          listings: state.listings.concat(newListing),
        }
      case actionTypes.REMOVE_LISTING:
        const updatedListings: IListing[] = state.listings.filter(
          listing => listing.id !== action.listing.id
        )
        return {
          ...state,
          listings: updatedListings,
        }
    }
    return state
  }
  
  export default reducer