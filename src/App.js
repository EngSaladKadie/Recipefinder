
import React from 'react'
import ManinPage from './Commponent/maninPage'
import './index.css'
import './app.css'
import { Route, Router ,Routes } from 'react-router-dom'
import MealInfo from './Commponent/mealInfo'
import SignUpFrom from './SignUpFrom'
import Login from './Login'



function App() {
  return (
    
  <Routes>
   
    <Route path='/' element={<ManinPage/>}/>
    <Route path='/mealid' element={<MealInfo/>}/>
    <Route path='/SignUp' element={<SignUpFrom />}/>
    <Route path='/login' element={<Login />}/>
    
    
    
    


  </Routes>
    
  )
}

export default App