import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConnectionPage, PremiumPage, ProfilePage, ReglagesPage, SearchUser, UserFriends, UserMessages, UserTables } from './pages';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ConnectionPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/searchuser' element={<SearchUser/>}/>
        <Route path='/usertables' element={<UserTables/>}/>
        <Route path='/usermessages' element={<UserMessages/>}/>
        <Route path='/userfriends' element={<UserFriends/>}/>
        <Route path='/premium' element={<PremiumPage/>}/>
        <Route path='/reglages' element={<ReglagesPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
