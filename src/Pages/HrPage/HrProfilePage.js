import React from 'react'
import HrNavBar from '../../Components/HrComponent/HrNavBar'
import { Route, Routes } from 'react-router-dom'
import HrHome from '../../Components/HrComponent/HrHome'

const HrProfilePage = () => {
  return (
    <div>
      <HrNavBar/>
      <Routes>
        <Route path="/home" element={<HrHome />} />
      </Routes>
    </div>
    
    
  )
}

export default HrProfilePage
