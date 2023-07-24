import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/";
import Login from "./pages/Login/index.jsx";

import './App.css';


export default () => {

  return (

    <div className="page">
      {/* 
      <Router>
      <ul>
      <li>
      <Link to="/">Home</Link>
      </li>
      </ul>
      
    </Router> */}

      <Router>

        <Routes>





          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />


          {/* <Route exact path="/login" element={<Login />} /> */}

        </Routes>

      </Router>

    </div>
  )
}
