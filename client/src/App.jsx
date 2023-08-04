import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import UserPage from './components/UserPage';
import ProjectPage from './components/ProjectPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Navigate to='/login' />} path='/' />
          <Route element={<Login />} path='/login' />
          <Route element={<UserPage />} path='/user-dashboard' />
          <Route element={<ProjectPage />} path='/project-dashboard' />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
