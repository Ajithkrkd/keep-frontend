import React from 'react'
import ArchivedNotes from '../Components/Notes/ArchivedNotes'
import CreateArea from '../Components/CreateArea/CreateArea'
import SideBar from '../Components/SideBarFolder/SideBar'
import Header from '../Components/Header/Header'

function ArchivedPage() {
  return (
        <div>
            <Header/>
            <SideBar/>
            <CreateArea/>
            <ArchivedNotes/>
        </div>
  )
}

export default ArchivedPage