interface IListing {
    id: number
    title: string
    body: string
  }
  
  type ListingState = {
    listings: IListing[]
  }
  
  type ListingAction = {
    type: string
    listing: IListing
  }
  
  type DispatchType = (args: ListingAction) => ListingAction