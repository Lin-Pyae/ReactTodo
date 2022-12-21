import React from 'react'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import PrivateRoute from './PrivateRoute'

const App = () => {

  return (
   <Routes>
    <Route path='/' element={<Login/>}/>
    
    {/* <Route path='/home' element={<Home/>}/> */}
    <Route path='/home' element={<PrivateRoute><Home/></PrivateRoute>}/>
   </Routes>
    
   
   
  )
}

export default App