import React, { useState, useEffect } from 'react'
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
            <User users={users} />
        </div>
    )
}

export default UserContainer
