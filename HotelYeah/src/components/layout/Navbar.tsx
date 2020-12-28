import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const routes = (
        <ul>
            <li>
                <Link to="/home">Landing</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/signUp">Sign Up/Register</Link>
            </li>
            <li>
                <Link to="/users">Users</Link>
            </li>
            <li>
                <Link to="/user">User</Link>
            </li>
            <li>
                <Link to="/listings">Listings</Link>
            </li>
            <li>
                <Link to="/listing">Listing</Link>
            </li>
        </ul>
    )

    const authRoutes = (
        <ul>
            <li>
                <Link to="/addUser">Add User</Link>
            </li>  
            <li>
                <Link to="/editUser">Edit User</Link>
            </li>
            <li>
                <Link to="/addListing">Add Listing</Link>
            </li>
            <li>
                <Link to="/editListing">Edit Listing</Link>
            </li>
        </ul>
    )

    return (
        <div>
            <h1>Hello, I'm the Navbar Component</h1>
            <nav>
                {routes}
                {/* if user is auth */}
                {authRoutes}
            </nav>
        </div>
    )
}

export default Navbar
