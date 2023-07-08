import React from 'react'
import { Route, Routes } from 'react-router-dom';
import DashboardPage from '../../pages/DashboardPage/DashboardPage';
import Home from '../../pages/Home/Home';
import CURD from '../../pages/CRUD/CURD';
const AdminRouter= () => {
  console.log("abs")
  return    ( 
    <>
    <Routes>
      <Route path='/admin/dashboardpage' element={<DashboardPage/>} />
      <Route path='/admin/Home' element={<Home/>}/>
      <Route path='/admin/CURD' element={<CURD/>}/>
    </Routes> 
    </>
      
  )
}

export default AdminRouter 



