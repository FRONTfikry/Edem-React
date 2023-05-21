import React, { useContext } from 'react';

import { Outlet, Navigate } from 'react-router-dom';

import ActiveUserContext from '../contexts/ActiveUserContext';

function GuardedRoutes() {
    let [activeUser] = useContext(ActiveUserContext);

    return (
        activeUser ? <Outlet/> : <Navigate to="/auth"/>
    );
}


export default GuardedRoutes;