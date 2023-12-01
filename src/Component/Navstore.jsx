import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CourseComp from './UI/CourseComp'
import SubroutesComp from './UI/SubroutesComp'
import Home from './UI/Home'
import Tech from './UI/Tech'
import Signup from './Authentication/Signup'
import Login from './Authentication/Login'

const Navstore = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/course/:category' element={<CourseComp/>} />
        <Route path='/course/:category/:subcategory' element={<SubroutesComp/>} />
        <Route path='/techudemy' element={<Tech/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  )
}

export default Navstore