import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import FoyerPage from './views/FoyerPage';
// import UserPage from './components/UserPage';
// import ProjectPage from './components/ProjectPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Navigate to='/foyer' />} path='/' />
          <Route element={<FoyerPage />} path='/foyer' />
          {/* <Route element={<UserPage />} path='/user-dashboard' />
          <Route element={<ProjectPage />} path='/project-dashboard' /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
