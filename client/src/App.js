import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateItemForm from './components/CreateItemForm';
import Dashboard from './components/Dashboard';
import Requests from './components/RequestPage';
import MyItemsDisplay from './components/MyItemsDisplay';
import LoginReg from './components/LoginReg';

import './styles/App.css';
import UpdateMyItems from './components/UpdateMyItems';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} default />
          <Route path="/loginreg" element={<LoginReg />} />
          <Route path="/requests" element={<Requests />}  />
          <Route path="/create" element={<CreateItemForm />}  />
          <Route path="/myitems" element={<MyItemsDisplay />} />
          <Route path=":id/Update" element={<UpdateMyItems />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
