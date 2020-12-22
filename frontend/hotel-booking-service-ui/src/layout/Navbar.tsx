import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <h1>Hello, I'm the Navbar Component</h1>
            <nav>
              <ul>
                <li>
                  <Link to="/">Landing</Link>
                </li>
                <li>
                  <Link to="/editUser">Edit User</Link>
                </li>
                <li>
                  <Link to="/editListing">Edit Listing</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signUp">Sign Up/Register</Link>
                </li>
                <li>
                  <Link to="/addUser">Add User</Link>
                </li>
              </ul>
            </nav>
        </div>
    )
}

export default Navbar
