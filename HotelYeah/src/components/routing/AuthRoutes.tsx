import React from 'react'
import { Route } from 'react-router-dom';
import AddUser from '../users/AddUser';
import AddListing from '../listings/AddListing';
import EditUser from '../users/EditUser';
import EditListing from '../listings/EditListing';
import RoomTypeComponent from '../roomType/RoomTypeComponent'

const AuthRoutes = () => {
    return (
        <div>
            {/* <h1>Hello, I am the AuthRoutes Component</h1> */}
            <Route path="/addGuest" component={AddUser} />
            <Route path="/editGuest/:id" component={EditUser} />
            <Route path="/addListing" component={AddListing} />
            <Route path="/editListing/:id" component={EditListing} />
            <Route path="/roomType" component={RoomTypeComponent} />
        </div>
    )
}

export default AuthRoutes
