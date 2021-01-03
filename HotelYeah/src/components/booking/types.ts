export interface BookingItem {
    id: number
    checkInDate: Date;
    checkOutDate: Date;
    roomCount: number;
    hotel: Hotel;
    guest: Guest;
}

export interface Hotel {
  id: number
  code: string;
  name: string;
  address: string;
  address2: string;
  city: string;
  state: string;
  zipCode: number;
  mainPhoneNumber: string,
  faxNumber: string,
  emailAddress: string,
  websiteAddress: string,
  imagePath: string
}

export interface Guest {
  id: number,
  firstName: string,
  lastName: string,
  address: string,
  address2: string,
  city: string,
  state: string,
  zipCode: number,
  country: string,
  homePhoneNumber: string,
  cellPhoneNumber: string,
  emailAddress: string
}
