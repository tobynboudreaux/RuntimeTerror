import React, { useState, useEffect } from 'react'
import AddUser from './AddUser'
import API from "../util/API"
import User from './User';

const UserContainer = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        let mounted = true;
        API().getGuest()
        .then(resp => resp.data)
        .then(data => {
            if (mounted) {
                setUsers(data.content)
            }
        })
    }, [])

    return (
        <div>
            <h1>User Container Component</h1>
            {users ? users.map((user: any) => (
                <User user={user} />
            )) : null }

            <AddUser />
        </div>
    )
}

export default UserContainer
