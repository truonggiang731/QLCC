
import {  Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login'
import AdminRouter from './components/route/AdminRouter';
import UserRouter from './components/route/UserRouter';
const App  = ()=> {
  return (  
    <> 
    <Routes>
     <Route path='/' exact element={<Login/>}/>
    </Routes>
    <AdminRouter/>
    <UserRouter/> 
  </>
   );
}

export default App;

