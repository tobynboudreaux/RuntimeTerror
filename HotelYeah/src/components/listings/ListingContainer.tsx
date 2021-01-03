import React, { useState } from "react";
import { ListingState } from "./types";
import { DataGrid, ColDef } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import API from "../util/API";
import { useHistory } from "react-router-dom";

const ListingContainer = ({ listings }: ListingState) => {
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

  const [selection, setSelection] = useState({
    id: -1,
  });

  const history = useHistory();

  const handleSelection = (e: any) => {
    setSelection({ ...selection, id: e.rowIds[0] });
  };

  const handleRemoveClick = async () => {
    if (selection.id === -1) {
      return alert("Click on a listing row before attempting to remove!");
    }
    const answer = window.confirm(
      `You're about to delete the listing of id ${selection.id}. Continue?`
    );
    if (!answer) return;
    const resp = await API().deleteHotel(selection.id);
    console.log(resp);
    window.location.reload();
  };

  const handleEditClick = () => {
    if (selection.id === -1) {
      return alert("Click on a listing row before attempting to edit!");
    }
    history.push(`/editListing/${selection.id}`);
  };

  const handleAddClick = () => {
    history.push(`/addListing`);
  }

  return (
    <>
      <div className="listing-table">
        <h1 className="center">Hotel Listings</h1>
        <DataGrid
          rows={listings}
          columns={columns}
          pageSize={8}
          onSelectionChange={(e) => handleSelection(e)}
        />
      </div>
      <div className="buttons-below-table">
        <Button variant="contained" color="primary" onClick={handleAddClick}>
          Add Listing
        </Button>
        <Button variant="contained" color="primary" onClick={handleEditClick}>
          Edit Listing
        </Button>
        <Button variant="contained" color="primary" onClick={handleRemoveClick}>
          Remove Listing
        </Button>
      </div>
    </>
  );
};

export default ListingContainer;
