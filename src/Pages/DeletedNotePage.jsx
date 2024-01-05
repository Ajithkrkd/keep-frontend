import React from 'react'
import DeletedNotes from '../Components/Notes/DeletedNotes'
import CreateArea from '../Components/CreateArea/CreateArea'
import SideBar from '../Components/SideBarFolder/SideBar'
import Header from '../Components/Header/Header'

function DeletedNotePage() {
  return (
    <div>
        <Header/>
        <SideBar/>
        <CreateArea/>
        <DeletedNotes/>
    </div>
  )
}

export default DeletedNotePage