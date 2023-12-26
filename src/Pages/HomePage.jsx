import React from 'react'
import Header from '../Components/Header/Header'
import Home from '../Components/Home/Home'
import SideBar from '../Components/SideBarFolder/SideBar'
function HomePage() {
  return (
    <div>
        <Header/>
        <SideBar/>
        <Home/>
    </div>
  )
}

export default HomePage