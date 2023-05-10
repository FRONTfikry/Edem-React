import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ActiveUserContext from "./contexts/ActiveUserContext";
import UsersContext from "./contexts/UsersContext";

import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth'

import GuardedRoutes from "./components/GuardedRoutes";

import useLocalStorage from "./hooks/useLocalStorage";


function App() {
  let [activeUser, setActiveUser] = useLocalStorage('activeUser', null);

  let [users, setUsers] = useLocalStorage('users', [])

  return (
    <ActiveUserContext.Provider value={[activeUser, setActiveUser]}>
        <UsersContext.Provider value={[users, setUsers]}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/auth" element={<Auth/>}/>

                    {/* Guarded Routes */}
                    <Route element={<GuardedRoutes/>}>
                      <Route path="/cart" />
                      <Route path="/profile" />
                    </Route>

                </Routes>
            </BrowserRouter>
        </UsersContext.Provider>
    </ActiveUserContext.Provider>
  );
}

export default App;
