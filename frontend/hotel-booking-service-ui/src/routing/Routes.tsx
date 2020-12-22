import React from 'react'
import { Route } from 'react-router-dom'
import Landing from '../layout/Landing'
import Listing from '../listings/Listing'
import ListingContainer from '../listings/ListingContainer'
import Login from '../login/Login'
import SignUp from '../login/SignUp'
import UserContainer from '../users/UserContainer'
import User from '../users/User'

const Routes = () => {
    return (
        <div>
            <h1>Hello, I'm the Routes Component</h1>
            <Route path="/home" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/users" component={UserContainer} />
            {/* need to add id to param url */}
            <Route path="/user" component={User} />
            <Route path="/listings" component={ListingContainer} />
            {/* need to add id to param url */}
            <Route path="/listing" component={Listing} />
        </div>
    )
}

export default Routes
