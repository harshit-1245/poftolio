import React from 'react'
import Navbar from "../navbar/Navbar"
import { Outlet } from 'react-router-dom'
 
const MainHeader = () => {
  return (
    <div>
     
      
      <Outlet/>
     
    </div>
  )
}

export default MainHeader
