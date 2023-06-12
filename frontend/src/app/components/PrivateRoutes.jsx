import React, { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'

import { AuthContext } from '../../context/Context'

export default function PrivateRoutes() {
    const { isLoggedIn } = useContext(AuthContext)
    console.log(isLoggedIn);
    return (
        isLoggedIn ? <Outlet /> : <Navigate to="/auth/login" />
    )
}
