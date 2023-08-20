import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/login";
import RegistrationForm from "./components/Registration";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Home";

function App() {
  
  return (
       
    <div className="App">
      <Routes>
      <Route exact path="/"
      element={<Login />}/>
      <Route path="/registrationform"
      element={<RegistrationForm/>} />
      <Route path="/login"
      element={<Login/>} /> 
      <Route path="/homepage"
      element={<Homepage />} />  
      </Routes> 
    </div>      
  ); 
}

export default App;
