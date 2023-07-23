// components/UserPage.js
import React from 'react';
import './UserPage.css';
import { Routes, Route } from 'react-router-dom';
import SideBar from '../UserSideBar/SideBar';


const UserPage = () => {
  return (
    <>
      <div>
        <SideBar />
      </div>
      <div className="user-content">
        <Routes>
          <Route path="/user-profile/personal-info" />
        </Routes>
      </div>
    </>
  );
};

export default UserPage;
