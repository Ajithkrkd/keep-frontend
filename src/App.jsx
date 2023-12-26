import React from "react";
import LoginPage from "./Pages/loginPage";
import HomePage from "./Pages/HomePage";
import{BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import SignUpPage from "./Pages/SignUpPage";
function App() {
  return (
   
     <div>
      <Router>
       <Routes>
       <Route path="/login"Component={LoginPage}/>
        <Route path="/" Component={HomePage}/>
        <Route path="/register" Component={SignUpPage}/>
       </Routes>
      </Router>   
     </div>
  );
}

export default App;
