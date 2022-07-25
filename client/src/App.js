import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateItemForm from './components/CreateItemForm';
import Dashboard from './components/Dashboard';
import Requests from './components/RequestPage';
import MyItemsDisplay from './components/MyItemsDisplay';

import './styles/App.css';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} default />
          <Route path="/requests" element={<Requests />} default />
          <Route path="/create" element={<CreateItemForm />} default />
          <Route path="/myitems" element={<MyItemsDisplay />} default/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
