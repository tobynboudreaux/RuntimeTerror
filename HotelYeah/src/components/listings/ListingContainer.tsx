import React from "react";
import { Listing, ListingState } from "../../store/listing/types";

const ListingContainer = ({ listings }: ListingState) => {
  const insertData = (listing: Listing) => {
    return (
      <tr key={listing.id}>
        <td>{listing.id}</td>
        <td>{listing.code}</td>
        <td>{listing.name}</td>
        <td>{listing.address}</td>
        <td>{listing.address2}</td>
        <td>{listing.city}</td>
        <td>{listing.state}</td>
        <td>{listing.zipCode}</td>
        <td>{listing.mainPhoneNumber}</td>
        <td>{listing.faxNumber}</td>
        <td>{listing.emailAddress}</td>
        <td>{listing.websiteAddress}</td>
        <td>{listing.imagePath}</td>
      </tr>
    );
  };

  return (
    <div>
      <h1>This is the ListingContainer component</h1>
      <table className="listing-table">
        <thead>
          <tr>
            <td>ID</td>
            <td>Code</td>
            <td>Name</td>
            <td>Address</td>
            <td>Address 2</td>
            <td>City</td>
            <td>State</td>
            <td>Zipcode</td>
            <td>Main Phone Number</td>
            <td>Fax</td>
            <td>Email</td>
            <td>Website</td>
            <td>Image Path</td>
          </tr>
        </thead>
        <tbody>{listings.map((listing: Listing) => insertData(listing))}</tbody>
      </table>
    </div>
  );
};

export default ListingContainer;
