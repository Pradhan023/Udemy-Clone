import React from 'react'
import Navbar from './Component/NAvFoot/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Navstore from './Component/Navstore'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Contextstore from './Component/ContextStore/store'
import Footer from './Component/NAvFoot/Footer'

const App = () => {
  const [apidata,setApidata] = useState([])
  useEffect(()=>{
    axios.get("https://udemyclone-api.onrender.com/api/getdata").
    then((res)=>setApidata(res.data)).catch((err)=>console.log("Get data error", err))
  },[])
  // console.log(apidata);

  const [ContextData] = useState(Contextstore)
  return (
    <div>
      <BrowserRouter>
      <ContextData.Provider value={apidata}>
      <Navbar/>
      <Navstore/>
      </ContextData.Provider>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App