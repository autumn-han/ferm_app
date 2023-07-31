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
          <Route element={<Navigate to='/fermentation-journal/login' />} path='/' />
          <Route element={<Login />} path='/fermentation-journal/login' />
          <Route element={<UserPage />} path='/fermentation-journal/user/:id' />
          <Route element={<ProjectPage />} path='/fermentation-journal/user/:id/projects' />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
