// Userprofile.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Notification from '../../Components/UserComponent/Notification/Notification';
import UserProfile from '../../Components/UserComponent/User-Profile/UserProfile';
import UserNav from '../../Components/UserComponent/UserSideBar/UserNav';
const Userprofile = () => {
  return (
    
      <div className='main-profile'>
      <UserNav />
        <Routes>
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/notification" element={<Notification />} />
        </Routes>
      </div>
   
  );
};

export default Userprofile;
