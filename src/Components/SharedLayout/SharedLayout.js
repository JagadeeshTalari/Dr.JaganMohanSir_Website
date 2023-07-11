import React from 'react'
import { Outlet } from 'react-router-dom'

const SharedLayout = () => {
  return (
    <div>
        
      <img
        src="https://drjaganmohan.files.wordpress.com/2013/12/header2final.jpg"
        alt=""
      />
      <Outlet/>
    </div>
  )
}

export default SharedLayout