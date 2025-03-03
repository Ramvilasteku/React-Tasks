import React from 'react'
import Navbar1 from './Forms/Navbar/Navbar'
import Footer from './Forms/Footer/Footer'
import { Route, Router, Routes } from 'react-router-dom'
import Signup from './Forms/Signup/Signup'
import Login from './Forms/Login/Login'

const App = () => {
  return (
    <div>
      <Navbar1 />
      <Routes>

        <Route path='/Signup' element={<Signup />} />
        <Route path='/Login' element={<Login />} />

      </Routes>

      <Footer/>
    </div>
  )
}

export default App
