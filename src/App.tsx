import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProfilePage, WorkInProgress } from "./pages/index";
import Navbar from "./components/UI/navbar/Navbar";
import routes from "./router/routes";

function App() {
  return (
    <BrowserRouter>
    <Navbar links={routes}></Navbar>
      <Routes>
        <Route path="/profile/:id" element={<ProfilePage/>}/>
        <Route path="" element={<WorkInProgress />}/>
        <Route path="" element={<WorkInProgress />}/>
        <Route path="" element={<WorkInProgress />}/>
        <Route path="" element={<WorkInProgress />}/>
        <Route path="" element={<WorkInProgress />}/>
        <Route path="" element={<WorkInProgress />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
