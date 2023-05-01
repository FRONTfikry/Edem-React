import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import ActiveUserContext from "./contexts/ActiveUserContext";
import UsersContext from "./contexts/UsersContext";

import Home from './pages/Home/Home';


function App() {
  let [activeUser, setActiveUser] = useState(JSON.parse(localStorage.getItem('activeUser')) || null);
  let [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || [])

  useEffect(() => localStorage.setItem('activeUser', JSON.stringify(activeUser)), [activeUser])
  useEffect(() => localStorage.setItem('users', JSON.stringify(users)), [users])

  return (
    <ActiveUserContext.Provider value={[activeUser, setActiveUser]}>
        <UsersContext.Provider value={[users, setUsers]}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                </Routes>
            </BrowserRouter>
        </UsersContext.Provider>
    </ActiveUserContext.Provider>
  );
}

export default App;
