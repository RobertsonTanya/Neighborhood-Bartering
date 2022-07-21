import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Requests from './components/RequestPage';

import './styles/App.css';


function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} default />
            <Route path="/requests" element={<Requests />} default />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
