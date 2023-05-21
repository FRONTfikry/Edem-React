import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ActiveUserContext from "./contexts/ActiveUserContext";
import UsersContext from "./contexts/UsersContext";

import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import Catalog from './pages/Catalog/Catalog';
import Profile from './pages/Profile/Profile';

import GuardedRoutes from "./components/GuardedRoutes";

import useLocalStorage from "./hooks/useLocalStorage";


function App() {

  let [users, setUsers] = useLocalStorage('users', {})
  let [activeUser, setActiveUser] = useLocalStorage('activeUser', null);

  return (
    <ActiveUserContext.Provider value={[activeUser, setActiveUser]}>
        <UsersContext.Provider value={[users, setUsers]}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/auth" element={<Auth/>}/>
                    <Route path="/catalog" element={<Catalog/>} />

                    {/* Guarded Routes */}
                    <Route element={<GuardedRoutes/>}>
                      <Route path="/cart" />
                      <Route path="/profile" element={<Profile/>}/>
                    </Route>

                </Routes>
            </BrowserRouter>
        </UsersContext.Provider>
    </ActiveUserContext.Provider>
  );
}

export default App;
