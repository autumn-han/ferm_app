import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import FoyerPage from './views/FoyerPage';
import UserPage from './views/UserPage';
// import ProjectPage from './components/ProjectPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserProvider>
            <Routes>
              <Route element={<Navigate to='/foyer' />} path='/' />
              <Route element={<FoyerPage />} path='/foyer' />
              <Route element={<UserPage />} path='/dashboard' />
            </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;
