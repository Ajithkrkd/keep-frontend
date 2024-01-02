import React from 'react'
import Header from '../Components/Header/Header'
import SideBar from '../Components/SideBarFolder/SideBar'
import CreateArea from '../Components/CreateArea/CreateArea'
import CreatedNotes from '../Components/Notes/CreatedNotes'
function HomePage() {
  return (
    <div>
        <Header/>
        <SideBar/>
        <CreateArea/>
        <CreatedNotes/>
    </div>
  )
}

export default HomePage