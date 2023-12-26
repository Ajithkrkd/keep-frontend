import React, { useState } from 'react'
import '../Home/Home.css'
import '../SideBarFolder/SideBar.css'
import SideBar from '../SideBarFolder/SideBar';
function Home() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };
  
  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
    <SideBar toggleSidebar={toggleSidebar} />
    <div className="home">
      <div className="text">Home Page Content</div>
    </div>
  </div>
  )
}

export default Home