import React, { useState, useEffect } from 'react'
import { AuthContext } from '../../context/Context'

import { redirect } from "react-router-dom"

function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        let usr = localStorage.getItem("USERNAME")
        if (usr) {
            setIsLoggedIn(true)
        }
    }, [])

    return (
        <AuthContext.Provider value={{ isLoggedIn: isLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider