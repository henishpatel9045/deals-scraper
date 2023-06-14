import React, { useContext, useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'

import { AuthContext } from '../../context/Context'

export default function PrivateRoutes() {
    const { isLoggedIn } = useContext(AuthContext)

    return (
        <Outlet/>
        // isLoggedIn ? <Outlet /> : <Navigate to="/auth/login" />
    )

}
