import React from 'react'
import { Routes,Route} from 'react-router-dom' 
import HomePage from './Pages/HomePage'
import Signup from './Pages/SignupPage'
import Login from './Pages/LoginPage'
import Admin from './Pages/AdminPage'
import DriverLogin from './component/DriverLogin'
import DriverFormPage from './Pages/DriverSignup'
import PickAndDropPage from './Pages/PickAndDropPage'
import OrderDetails from './Pages/OrderDetailPage'
import CarWashPage from './Pages/CarWashPage'
import CarwashBook from './component/carwashBook'
 function App() {
  return (
   <div>

  <Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path ='/signup' element={<Signup/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/adminLogin' element={<Admin/>}/>
  <Route path='/Driversignup' element={<DriverFormPage/>}/>   
<Route path ='/DriverLogin' element={<DriverLogin/>}/>      
<Route path='/pickAndDrop' element={<PickAndDropPage/>}/>
<Route path='/orderDetail' element={<OrderDetails/>}/>
<Route path='/CarWash' element={<CarWashPage/>}/>
<Route path ='/carwashBook' element={<CarwashBook/>}/>
  </Routes>
        </div>
  )
}
export default App