import React, { useContext } from 'react';

import { Outlet, Navigate } from 'react-router-dom';

import ActiveUserContext from '../contexts/ActiveUserContext';

function GuardedRoutes() {
    let [activeUser] = useContext(ActiveUserContext)

    return (
        Object.is(activeUser, null) ? <Navigate to="/auth"/> : <Outlet/>
    )
}


export default GuardedRoutes;