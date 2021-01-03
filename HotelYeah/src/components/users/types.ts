export interface User {
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

export interface UserState {
    users: User[];
}