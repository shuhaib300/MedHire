import React from 'react'
import AdminNav from '../../Components/AdminCompnent/AdminNavBar/AdminNav'
import { Route, Routes } from 'react-router-dom'
import AdminHome from '../../Components/AdminCompnent/AdminHome/AdminHome'
import AdminReport from '../../Components/AdminCompnent/AdminReport/AdminReport'

const AdminProfilePage = () => {
  return (
    <div>
      <AdminNav/>
      <Routes>
          <Route path="/home"  element={<AdminHome/>}/>
          <Route path="/report" element={<AdminReport/>} />
        </Routes>
    </div>
  )
}

export default AdminProfilePage
