import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfilePage from './pages/profile/ProfilePage';


function App() {
  return (
      <BrowserRouter>
            <Routes>
              <Route path='/profile/:id' element={<ProfilePage/>}></Route>
            </Routes>
      </BrowserRouter>
  );
}

export default App;
