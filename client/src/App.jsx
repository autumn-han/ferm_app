import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Navigate to='/fermentation-journal/login' />} path='/' />
          <Route element={<Login />} path='/fermentation-journal/login' />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
