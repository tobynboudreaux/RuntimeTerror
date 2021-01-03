import React from 'react'
import { Route } from 'react-router-dom'
import Landing from '../layout/Landing'
import ListingComponent from '../listings/ListingComponent'
import ListingContainer from '../listings/ListingContainer'
import Login from '../login/Login'
import SignUp from '../login/SignUp'
import UserContainer from '../users/UserContainer'
import User from '../users/User'
import BookingContainer from '../booking/BookingContainer'
import AddBooking from '../booking/AddBooking'
import EditBooking from '../booking/EditBooking'

const Routes = () => {
    return (
        <>
            {/* <h1>Hello, I'm the Routes Component</h1> */}
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/users" component={UserContainer} />
            {/* need to add id to param url */}
            <Route path="/user" component={User} />
            <Route path="/listings" component={ListingContainer} />
            {/* need to add id to param url */}
            <Route path="/listing" component={ListingComponent} />
            <Route path="/booking" component={BookingContainer} />
            <Route path="/addbooking" component={AddBooking} />
            <Route path="/editbooking/:id" component={EditBooking} />
        </>
    )
}

export default Routes
