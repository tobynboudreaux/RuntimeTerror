interface IListing {
  id: int;
  code: string;
  name: string;
  address: string;
  address2: string;
  city: string;
  state: string;
  zipCode: int;
  mainPhoneNumber: string;
  faxNumber: string;
  emailAddress: string;
  websiteAddress: string;
  imagePath: string;
}

type listingState = {
  listings: IListing[]
}

type ListingAction = {
  type: string
  listing: IListing
}

//may need to broaden this later
type DispatchType = (args: ListingAction) => ListingAction