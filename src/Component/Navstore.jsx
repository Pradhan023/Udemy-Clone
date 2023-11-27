import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CourseComp from './UI/CourseComp'
import SubroutesComp from './UI/SubroutesComp'
import Home from './UI/Home'

const Navstore = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/course/:category' element={<CourseComp/>} />
        <Route path='/course/:category/:subcategory' element={<SubroutesComp/>} />
      </Routes>
    </div>
  )
}

export default Navstore