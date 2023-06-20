import React from 'react'
import {Navigate} from 'react-router-dom'

import { useAuthContext } from '../context/AuthContext'


const AdminProtection = ({ children }) => {
    let { user } = useAuthContext();
    return(
        user.role == "customer" ? <Navigate to="/"/> : <>{children}</>
    )
}

export default AdminProtection