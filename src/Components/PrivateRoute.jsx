import React, { useContext } from 'react'
import { mycontext } from '../Context/AuthContext'
import { Navigate } from 'react-router-dom';

function PrivateRoute({children}) {
    let {isAuth} = useContext(mycontext);


    
    return isAuth ? children : <Navigate to = {"/account"} />;
}
export default PrivateRoute