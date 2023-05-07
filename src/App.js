import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import ActiveUserContext from "./contexts/ActiveUserContext";
import UsersContext from "./contexts/UsersContext";

import Home from './pages/Home/Home';

import GuardedRoutes from "./components/GuardedRoutes";

import useLocalStorage from "./hooks/useLocalStorage";


function App() {
  let [activeUser, setActiveUser] = useLocalStorage('activeUser', {
    cart: [
      {
        id: "1",
        // name: "Dambulini",
        // priceNew: 9999,
        // priceOld: 10999,
        amount: 3
      },
    ]
  });

  let [users, setUsers] = useLocalStorage('users', [])

  return (
    <ActiveUserContext.Provider value={[activeUser, setActiveUser]}>
        <UsersContext.Provider value={[users, setUsers]}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/auth" element={<h1>Hello</h1>}/>

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
