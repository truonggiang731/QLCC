import React from "react";
import {Routes, Route} from "react-router-dom"
import DashboardPage from "../../pages/DashboardPage/DashboardPage";
import Home from "../../pages/Home/Home";
const UserRouter =()=>{
    return(
        <>
        <Routes>
            <Route path="/user/dashboardpage" element={<Home/>}/>
        </Routes>
        </>
    )
}

export default UserRouter