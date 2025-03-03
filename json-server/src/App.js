import React from 'react'
import Navbar1 from './Components/Navbar/Navbar'
import Recipes from './Components/Recipes/Recipes'
import Home from './Components/Home/Home'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Navbar1/>
      <Routes>

      <Route path='/home' element={<Home/>}/>
      <Route path='/recipes' element={<Recipes/>}/>
      </Routes>
    </div>
  )
}

export default App
