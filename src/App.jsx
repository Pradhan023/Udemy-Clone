import React from 'react'
import Navbar from './Component/NAvFoot/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Navstore from './Component/Navstore'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Navstore/>
      </BrowserRouter>
    </div>
  )
}

export default App