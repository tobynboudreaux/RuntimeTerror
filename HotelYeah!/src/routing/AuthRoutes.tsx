import React from 'react'
import { Route } from 'react-router-dom';
import AddUser from '../users/AddUser';
import AddListing from '../listings/AddListing';
import EditUser from '../users/EditUser';
import EditListing from '../listings/EditListing';

const AuthRoutes = () => {
    return (
        <div>
            <h1>Hello, I am the AuthRoutes Component</h1>
            <Route path="/addUser" component={AddUser} />
            <Route path="/editUser" component={EditUser} />
            <Route path="/addListing" component={AddListing} />
            <Route path="/editListing" component={EditListing} />
        </div>
    )
}

export default AuthRoutes
