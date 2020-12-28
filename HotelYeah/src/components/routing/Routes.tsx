import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Landing from '../layout/Landing'
import Listing from '../listings/Listing'
import ListingContainer from '../listings/ListingContainer'
import Login from '../login/Login'
import SignUp from '../login/SignUp'
import UserContainer from '../users/UserContainer'
import User from '../users/User'
import NotFound from '../layout/NotFound'

const Routes = () => {
    return (
        <div>
            <h1>Hello, I'm the Routes Component</h1>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/signUp" component={SignUp} />
                <Route exact path="/users" component={UserContainer} />
                <Route exact path="/user/:id" component={User} />
                <Route exact path="/listings" component={ListingContainer} />
                <Route exact path="/listing/:id" component={Listing} />
                <Route component={NotFound} />
            </Switch>
        </div>
    )
}

export default Routes
