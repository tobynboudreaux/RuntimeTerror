import React from 'react'
import { Route } from 'react-router-dom'
import Landing from '../layout/Landing'
import Listing from '../listings/Listing'
import ListingContainer from '../listings/ListingContainer'
import Login from '../login/Login'
import SignUp from '../login/SignUp'
import User from '../users/User'
import UserCard from '../users/UserCard'

const Routes = () => {
    return (
        <div>
            <h1>Hello, I'm the Routes Component</h1>
            <Route path="/" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/users" component={User} />
            {/* need to add id to param url */}
            <Route path="userCard" component={UserCard} />
            <Route path="/listings" component={ListingContainer} />
            {/* need to add id to param url */}
            <Route path="/listing" component={Listing} />
        </div>
    )
}

export default Routes
