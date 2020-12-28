import * as actionTypes from "./actionTypes"

export function addListing(listing: IListing) {
  const action: ListingAction = {
    type: actionTypes.ADD_LISTING,
    listing,
  }

  return simulateHttpRequest(action)
}

export function removeListing(listing: IListing) {
  const action: ListingAction = {
    type: actionTypes.REMOVE_LISTING,
    listing,
  }
  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: ListingAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}