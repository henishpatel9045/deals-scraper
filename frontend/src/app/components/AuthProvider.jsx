import React, { useState, useEffect } from 'react'
import { AuthContext } from '../../context/Context'

function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [jwt, setJwt] = useState("")
    const [user, setUser] = useState({})

    useEffect(() => {
        let usr = localStorage.getItem("USER")
        if (usr) {
            setIsLoggedIn(true)
            setUser(JSON.parse(usr))
            setJwt(localStorage.getItem("JWT"))
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            isLoggedIn: isLoggedIn,
            jwt: jwt,
            user: user,
            setIsLoggedIn: setIsLoggedIn,
            setJwt: setJwt,
            setUser: setUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider