import React, {useState} from 'react';
import './Registration.css'
import axios from 'axios';
import {Link, useNavigate } from 'react-router-dom';



function RegistrationForm() {
    const navigate=useNavigate()
    const[record,setRecord]=useState({
        firstname:"",
        lastname:"",
        email:"",
        password:""
      });
    
    
      const onChange=(e)=>{
        setRecord({...record,[e.target.name]:e.target.value})
      }
    
      const onSubmit =  (event) =>{
        event.preventDefault();
 
        axios.post('http://localhost:3005/users',record).then(resp => {
        console.log(resp.data);
    }).catch(error => {
        console.log(error);
    });
    window.alert("Registered successfully")
    navigate('/login')
      };

    return(
        <form  onSubmit={(e)=>onSubmit(e)}>
        <div className="form">
            <h2>Registration</h2>
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="firstName">First Name </label>
                    <input className="form__input" name="firstname" type="text" required onChange = {(e) => onChange(e)} id="firstName" placeholder="First Name" />
                </div>
                <div className="lastname">
                    <label className="form__label" for="lastName">Last Name </label>
                    <input  type="text" name="lastname" id="lastName"    className="form__input" onChange = {(e) => onChange(e)} placeholder="LastName" required/>
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" name="email" id="email" className="form__input" onChange = {(e) => onChange(e)} placeholder="Email" required/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password" name="password" id="password"  onChange = {(e) => onChange(e)} placeholder="Password" required/>
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">Confirm Password </label>
                    <input className="form__input" type="password" id="confirmPassword"   placeholder="Confirm Password" required/>
                </div>
            </div>
            
            <div className="footer">
                <button type="submit" class="btn">Register</button>
                </div>
                <div><footer>
                <p>Already Registered? <Link to="/login">Login</Link>.</p>
               
            </footer></div>
        </div>
        </form>
       
    )       
    }

export default RegistrationForm