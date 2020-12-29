import * as React from "react"

type Props = {
  saveListing: (listing: IListing | any) => void
}

export const AddListing: React.FC<Props> = ({ saveListing }) => {
  const [listing, setListing] = React.useState<IListing | {}>()

  const handleListingData = (e: React.FormEvent<HTMLInputElement>) => {
    setListing({
      ...listing,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const addNewListing = (e: React.FormEvent) => {
    e.preventDefault()
    saveListing(listing)
  }

  return (
    <form onSubmit={addNewListing} className="Add-listing">
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleListingData}
      />
      <input
        type="text"
        id="body"
        placeholder="Description"
        onChange={handleListingData}
      />
      <button disabled={listing === undefined ? true : false}>
        Add listing
      </button>
    </form>
  )
}