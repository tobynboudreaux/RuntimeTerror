import React from "react";
import { ListingState } from "./types";
import { DataGrid, ColDef } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";

const ListingContainer = ({ listings }: ListingState) => {

  //add state for selected listing
  //on button clicks, edit/delete listing by ID
  
  const columns: ColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "code", headerName: "Code", width: 110 },
    { field: "name", headerName: "Name", width: 130 },
    { field: "address", headerName: "Address", width: 150 },
    { field: "address2", headerName: "Alternate Address", width: 130 },
    { field: "city", headerName: "City", width: 110 },
    { field: "state", headerName: "State", width: 90 },
    { field: "zipCode", headerName: "Zipcode", width: 110 },
    { field: "mainPhoneNumber", headerName: "Phone", width: 120 },
    { field: "faxNumber", headerName: "Fax number", width: 130 },
    { field: "emailAddress", headerName: "Email address", width: 220 },
    { field: "websiteAddress", headerName: "Website address", width: 160 },
    { field: "imagePath", headerName: "Image URL", width: 170 },

    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params: ValueGetterParams) =>
    //     `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
    // },
  ];

  return (
    <>
      <div className="listing-table">
        <h1 className="center">Hotel Listings</h1>
        <DataGrid rows={listings} columns={columns} pageSize={8} />
      </div>
      <div className="buttons-below-table">
        <Button variant="contained" color="primary">Edit Listing</Button>
        <Button variant="contained" color="primary">Remove Listing</Button>
      </div>
    </>
  );
};

export default ListingContainer;
