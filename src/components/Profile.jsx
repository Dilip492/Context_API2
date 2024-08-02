import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

export const Profile = () => {
    const { user } = useContext(UserContext);


    if(!user) return <div> please Login</div>

    return (
        <div>
            <h1>welcome to {user.username}</h1>
            <p>welcome to {user.password}</p>
        </div>
    )
}
