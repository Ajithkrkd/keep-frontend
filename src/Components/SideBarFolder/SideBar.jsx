import React, { useState } from "react";
import "../SideBarFolder/SideBarScript";
import "../SideBarFolder/SideBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

function SideBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navigate = useNavigate();

  const accessToken = localStorage.getItem("accessToken");

  return (
    <div>
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      ></link>
      <div
        className={`sidebar ${isSidebarOpen ? "open" : ""}`}
        onMouseEnter={() => setIsSidebarOpen(true)}
        onMouseLeave={() => setIsSidebarOpen(false)}
      >
        <ul class="nav-list">
          {accessToken ? (
            <>
              <li>
                <a href="#">
                  <i className="bx bx-bulb btnx"></i>
                  <span class="link_name">Notes</span>
                </a>
                <span class="tooltip">Notes</span>
              </li>
              <li>
                <a href="#">
                  <i class="bx bx-bell btnx " onClick={toggleSideBar}></i>
                  <span class="link_name">Reminders</span>
                </a>
                <span class="tooltip">Reminders</span>
              </li>
              <li>
                <a href="#">
                  <i class="bx bx-label btnx"></i>
                  <span class="link_name">Edit Labels</span>
                </a>
                <span class="tooltip">Edit Labels</span>
              </li>
              <li>
                <a href="#">
                  <i class="bx bx-archive btnx "></i>
                  <span class="link_name ">Archive</span>
                </a>
                <span class="tooltip">Archive</span>
              </li>
              <li>
                <a href="#">
                  <i class="bx bx-trash btnx"></i>
                  <span class="link_name">Bin</span>
                </a>
                <span class="tooltip">Bin</span>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href="#" onClick={()=>navigate('/register')}>
                  <i className="bx bx-notepad btnx"></i>
                  <span class="link_name">Register</span>
                </a>
                <span class="tooltip">Register</span>
              </li>
              <li>
                <a href="#" onClick={()=>navigate('/login')}>
                  <i class="bx bxs-notepad btnx " onClick={toggleSideBar}></i>
                  <span class="link_name">Login</span>
                </a>
                <span class="tooltip">Login</span>
              </li>
              <li>
                <a href="#" onClick={()=>navigate('/')}>
                  <i class="bx bx-edit-alt btnx " onClick={toggleSideBar}></i>
                  <span class="link_name">forgotten password</span>
                </a>
                <span class="tooltip">Forgotten password</span>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
