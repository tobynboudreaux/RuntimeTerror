import React, {useState } from 'react'
// UI
import { Button } from "@material-ui/core";
import { ColDef, DataGrid } from "@material-ui/data-grid";
// Imports
import {UserState} from './types'
import API from "../util/API";
import { useHistory } from "react-router-dom";

const User = ({users}: UserState) => {
    const columns: ColDef[] = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "firstName", headerName: "First Name", width: 110 },
        { field: "lastName", headerName: "Last Name", width: 130 },
        { field: "address", headerName: "Address", width: 150 },
        { field: "address2", headerName: "Alternate Address", width: 130 },
        { field: "city", headerName: "City", width: 110 },
        { field: "state", headerName: "State", width: 90 },
        { field: "zipCode", headerName: "Zipcode", width: 110 },
        { field: "country", headerName: "Country", width: 120 },
        { field: "homePhoneNumber", headerName: "Home Phone Number", width: 130 },
        { field: "cellPhoneNumber", headerName: "Cell Phone Number", width: 220 },
        { field: "emailAddress", headerName: "Email Address", width: 160 },
    
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
          return alert("Click on a guest row before attempting to remove!");
        }
        const answer = window.confirm(
          `You're about to delete the guest of id ${selection.id}. Continue?`
        );
        if (!answer) return;
        const resp = await API().deleteGuest(selection.id);
        console.log(resp);
        window.location.reload();
      };
    
      const handleEditClick = () => {
        if (selection.id === -1) {
          return alert("Click on a guest row before attempting to edit!");
        }
        history.push(`/editGuest/${selection.id}`);
      };
    
      const handleAddClick = () => {
        history.push(`/addGuest`);
      }
    
    return (
        <div>
            <div className="listing-table">
                <h1 className="center">Hotel Guests</h1>
                <DataGrid
                rows={users}
                columns={columns}
                pageSize={8}
                onSelectionChange={(e) => handleSelection(e)}
                />
            </div>
            <div className="buttons-below-table">
                <Button variant="contained" color="primary" onClick={handleAddClick}>
                Add Guest
                </Button>
                <Button variant="contained" color="primary" onClick={handleEditClick}>
                Edit Guest
                </Button>
                <Button variant="contained" color="primary" onClick={handleRemoveClick}>
                Remove Guest
                </Button>
            </div>
        </div>
    )
}

export default User
