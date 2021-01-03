import React from 'react'
import { RoomTypeState } from './types'
import { DataGrid, ColDef } from '@material-ui/data-grid';

const RoomTypeContainer = ({ roomTypeList }: RoomTypeState) => {

    const columns: ColDef[] = [
        {field: 'id', headerName: 'ID', width: 70},
        {field: 'code', headerName: 'Code', width: 110},
        {field: 'description', headerName: 'Description', width: 230}
    ]

    return (
        <div className="room-type-table">
            <h1 className='center'>Room Types</h1>
            <DataGrid rows={roomTypeList} columns={columns} pageSize={10} checkboxSelection />
        </div>
    )
}

export default RoomTypeContainer
