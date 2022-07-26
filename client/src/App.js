import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import CreateItemForm from './components/CreateItemForm';
import Dashboard from './components/Dashboard';
import Requests from './components/RequestPage';
import MyItemsDisplay from './components/MyItemsDisplay';
import LoginReg from './components/LoginReg';

import './styles/App.css';
import UpdateMyItems from './components/UpdateMyItems';


function App() {
  const [user, setUser] = useState({});

  useEffect(()=>{
    axios.get("http://localhost:8000/api/users",
    {
      withCredentials: true
    })
    .then((res)=>{
      console.log(res.data);
      setUser(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard user={user} setUser={setUser} />} default />
          <Route path="/loginreg" element={<LoginReg user={user} setUser={setUser}  />} />
          <Route path="/requests" element={<Requests user={user} setUser={setUser}  />}  />
          <Route path="/create" element={<CreateItemForm user={user} setUser={setUser}  />}  />
          <Route path="/myitems/:username" element={<MyItemsDisplay user={user} setUser={setUser}  />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
