import { Button, TextField } from "@material-ui/core";
import { AddCircleRounded } from "@material-ui/icons";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import API from "../util/API";
import "./ListingStyles.css";

const AddListing = () => {
  const [listing, setListing] = useState({
    code: "",
    name: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    zipCode: 0,
    mainPhoneNumber: "",
    faxNumber: "",
    emailAddress: "",
    websiteAddress: "",
    imagePath: "",
  });

  const history = useHistory();

  const handleChange = (e: any) => {
    setListing({ ...listing, [e.target.name]: e.target.value });
  };
  const onSubmit = async () => {
    const resp = await API().postHotel(listing);
    console.log(resp);
    history.push("/listing");
  }

  return (
    <form className="add-listing-form" noValidate autoComplete="off">
      <label>
          <AddCircleRounded></AddCircleRounded>
        <h2>
          Add a new listing:
        </h2>
      </label>
      {/* {addFieldLabels.map((e) => addField(e))} */}
      <TextField
        label="Code"
        id="outlined-size-small" size="small"
        fullWidth
        name="code"
        value={listing.code}
        onChange={handleChange}
      />
      <TextField
        label="Name"
        id="outlined-size-small" size="small"
        fullWidth
        name="name"
        value={listing.name}
        onChange={handleChange}
      />
      <TextField
        label="Address"
        id="outlined-size-small" size="small"
        fullWidth
        name="address"
        value={listing.address}
        onChange={handleChange}
      />
      <TextField
        label="Alternate Address"
        id="outlined-size-small" size="small"
        fullWidth
        name="address2"
        value={listing.address2}
        onChange={handleChange}
      />
      <TextField
        label="City"
        id="outlined-size-small" size="small"
        fullWidth
        name="city"
        value={listing.city}
        onChange={handleChange}
      />
      <TextField
        label="State"
        id="outlined-size-small" size="small"
        fullWidth
        name="state"
        value={listing.state}
        onChange={handleChange}
      />
      <TextField
        label="Zipcode"
        id="outlined-size-small" size="small"
        fullWidth
        name="zipCode"
        value={listing.zipCode}
        onChange={handleChange}
      />
      <TextField
        label="Main phone"
        id="outlined-size-small" size="small"
        fullWidth
        name="mainPhoneNumber"
        value={listing.mainPhoneNumber}
        onChange={handleChange}
      />
      <TextField
        label="Fax"
        id="outlined-size-small" size="small"
        fullWidth
        name="faxNumber"
        value={listing.faxNumber}
        onChange={handleChange}
      />
      <TextField
        label="Email"
        id="outlined-size-small" size="small"
        fullWidth
        name="emailAddress"
        value={listing.emailAddress}
        onChange={handleChange}
      />
      <TextField
        label="Website"
        id="outlined-size-small" size="small"
        fullWidth
        name="websiteAddress"
        value={listing.websiteAddress}
        onChange={handleChange}
      />
      <TextField
        label="Image URL"
        id="outlined-size-small" size="small"
        fullWidth
        name="imagePath"
        value={listing.imagePath}
        onChange={handleChange}
      />
      <br></br><br></br>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        onClick={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        Add Listing
      </Button>
    </form>
  );
};

export default AddListing;
