import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import FoyerPage from './views/FoyerPage';
import UserPage from './views/UserPage';
import ProjectPage from './views/ProjectPage';
import EditLogPage from './views/EditLogPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserProvider>
            <Routes>
              <Route element={<Navigate to='/foyer' />} path='/' />
              <Route element={<FoyerPage />} path='/foyer' />
              <Route element={<UserPage />} path='/dashboard' />
              <Route element={<ProjectPage />} path='/project-details/:projectID' />
              <Route element={<EditLogPage />} path='/logEntry/edit/:projectID/:logID' />
            </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;
