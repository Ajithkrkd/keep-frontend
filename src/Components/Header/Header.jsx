import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../SideBarFolder/SideBarScript";
import "../SideBarFolder/SideBar.css";
import '../Header/Header.css'
function Header() {
  return (
    <div>
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      ></link>
     <div className="d-flex header align-items-center ">
     <div className="" >
        <i className="bx bx-menu btnx" style={{ fontSize: '27px' }}></i>
      </div>
      <img src='/src/assets/brain.png.avif' className="keep-img" rel="keep logo"/>
      <h5 className="keep-text">BrainSync</h5>
      <div className="searchBar">
        <i className="bx bx-search searchIcon"></i>
        <input type="text"  placeholder="search"/>
        <i className="bx bx-x closeIcon"></i>
      </div>
      <div className=" d-flex align-items-center  last-section">
      <i className="bx bx-refresh"></i>
      <i className="bx bx-grid-alt"></i>
      <i className="bx bx-cog"></i>
      <img rel="profile picture" className="profile" src='/src/assets/keep_2020q4_48dp.png' />
     </div>
     </div>
   
     
    </div>
  );
}

export default Header;
