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