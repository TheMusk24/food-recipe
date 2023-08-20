import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


export default function Login() {
   const navigate=useNavigate()
   const [allUser,setAllUser]=useState([])
   const [record,setRecord]=useState({
    email:"",
    password:""
  })
  useEffect(()=>{
    async function getUser(){
      const result= await axios.get(`http://localhost:3005/users`)
      setAllUser(result.data)
      console.log(result.data)
    }
    getUser()
  },[])

  const onChange=(e)=>{
    setRecord({ ...record, [e.target.name]: e.target.value });
  }
  const onSubmit=(event)=>{
    event.preventDefault();
    const userData = allUser.find((users) => users.email === record.email);
    console.log(userData)
    if (userData) {
         
      if (userData.password !== record.password) {
        window.alert("Invalid password")
      } else {
        
        navigate("/homepage")
      }
    } else {
    
      window.alert("Invalid username")
    }
    
  }
  

  return (
    <div className="Login">
      <h2>Login</h2>
      <Form onSubmit={e =>onSubmit(e)}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            name="email"
            onChange={(e)=>onChange(e)}
            required
           
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={(e)=>onChange(e)}

            required
          
          />
        </Form.Group>
        <Button block size="lg" type="submit">
          Login
        </Button>
      </Form>
      <footer>
                <p>New User? <Link to="/registrationform">Register New Account</Link>.</p>
               
            </footer>
      <Link to="/" />
    </div>
  );
  }