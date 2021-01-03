import React from 'react'
import EditUser from './EditUser'
import {UserState} from './types'

const User = ({user}: UserState) => {
    
    return (
        <div>
            <h1>{user.firstName}</h1>
            <EditUser />
        </div>
    )
}

export default User
