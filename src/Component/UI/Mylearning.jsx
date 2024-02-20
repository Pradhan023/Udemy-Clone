import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../StyleComp/learning.css"

const Mylearning = () => {
  const[data,setData] = useState();
  const email = localStorage.getItem("email");
  useEffect(()=>{
    axios.get("https://udemyclone-api.onrender.com/api/getlearningdata").
    then((res)=> setData(res.data)).catch(err=>console.log("My learning" ,err))
  },[])
  const newCart = items?.filter(i=> i.proID == email)
  return (
    <div className="learningsection">
      <h1>My Learning</h1>
      <div className='learningsection1'>
      
      {
        newCart && newCart.map((item,index)=>{
          return(
            <div key={index} className='learningcard'>
              <img src={item.img} />
                <div>
                <h2>{item.heading}</h2>
                <p className=''>{item.des}</p>
                <p className='learnauthor'>{item.author}</p>
                <h3>{`${item.rating} ⭐⭐⭐⭐⭐`}</h3>
                <h2>{"₹"+item.price}</h2>
                </div>
            </div>
          )
        })
      }
    </div>
    </div>
  )
}

export default Mylearning