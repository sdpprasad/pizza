

import React from 'react';
import Brands from "./brands"
import Cards from "./cards"
import Prefer from "./prefer"
import Form from "./login"
import Location from './location';

import Last from './last';

import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    
    
    <div className='row' style={{backgroundImage:`url('https://images4.alphacoders.com/276/276908.jpg')`, height:'100vh' ,backgroundSize:'cover'}}>
      <div className='container'>
    <div className="navbar">
      <div className="logo">
        {/* <img src="repair.png" alt="Logo" /> */}
        <h6>Pizza Hut</h6>
      </div>
      <ul className="nav-links">
        {/* <li><Link to="#">Home</Link></li> */}
        <li><Link to="/register">signup</Link></li>
        <li><Link to="/login">login</Link></li>
        <li><Link to="/Shop">Shop</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>

        {/* <li><a href="#SERVICES">Services</a></li> */}
        {/* <li><a href="#ABOUT">About</a></li> */}
        {/* <li><a href="#CONTACT">Contact</a></li> */}
      </ul>
      
    </div>
      <div className='col-md-12' >
        {/* <img src='https://i.pinimg.com/564x/f1/1c/05/f11c057b6f3b15ab9a35339f034879a3.jpg' style={{borderRadius:"4rem",}}  alt=''/> */}
      </div>
    </div>
     {/* <Prefer/> */}
   
    {/* <Cards/> */}
    {/* <Form/> */}
    {/* <Brands/>  */}
    <br/>
    
  {/* <Location/> */}
    {/* <Last/> */}
    </div>
  );
}

export default Navbar;