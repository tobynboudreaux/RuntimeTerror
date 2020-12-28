import * as React from "react"
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"

type Props = {
  listing: IListing
  removeListing: (listing: IListing) => void
}

export const Listing: React.FC<Props> = ({ listing, removeListing }) => {
  const dispatch: Dispatch<any> = useDispatch()

  const deleteListing = React.useCallback(
    (listing: IListing) => dispatch(removeListing(listing)),
    [dispatch, removeListing]
  )

  return (
    <div className="Listing">
      <div>
        <h1>{listing.title}</h1>
        <p>{listing.body}</p>
      </div>
      <button onClick={() => deleteListing(listing)}>Delete</button>
    </div>
  )
}