import React from 'react'
import {Navigate} from 'react-router-dom'

import { useAuthContext } from '../context/AuthContext'


const SuperAdminProtection = ({ children }) => {
    let { user } = useAuthContext();
    return(
        user.role != "superadmin" ? <Navigate to="/"/> : <>{children}</>
    )
}

export default SuperAdminProtection