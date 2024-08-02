import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'

export const Login = () => {

    const[username, setUsername] = useState(null)
    const[password, setPassword] = useState(null)


    const{setUser} = useContext(UserContext)

    const handlesubmit = (e) => {

        e.preventDefault();

        setUser({username, password})


    }
    return (


        <div>
            <h2>login</h2>
            <input type="text" placeholder='username' value={username} onChange={(e)=>{setUsername(e.target.value)}} />
            <input type="text" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
            <button onClick={handlesubmit}>submit</button>
        </div>
    )
}
