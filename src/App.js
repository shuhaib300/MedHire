// src/App.js or index.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/UserPage/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import LoginPage from './Pages/UserPage/LoginPage';
import RegisterPage from './Pages/UserPage/RegisterPage';
import Userprofile from './Pages/UserPage/Userprofile';
import AdminLoginPage from './Pages/AdminPage/AdminLoginPage';
import AdminProfilePage from './Pages/AdminPage/AdminProfilePage';
import HrLogin from './Components/HrComponent/HrLogin';
import HrProfilePage from './Pages/HrPage/HrProfilePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/Register" element={<RegisterPage/>} />
          <Route path="/user-profile/*" element={<Userprofile />} />
          <Route path="/admin" element={<AdminLoginPage/>}/>
          <Route path="/admin-profile/*" element={<AdminProfilePage/>}/>
          <Route path="/hr/" element={<HrLogin/>}/>
          <Route path="/hr-profile/*" element={<HrProfilePage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
