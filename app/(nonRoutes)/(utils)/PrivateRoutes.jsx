import { Outlet, Navigate} from 'react-router-dom'
import { useContext } from 'react'
import { useAuthContext } from '../context/AuthContext'


const PrivateRoutes = () => {
    
    let { user } = useAuthContext();
    return(
        !user ? <Navigate to="/login"/> : <Outlet/>
    )
}

export default PrivateRoutes;