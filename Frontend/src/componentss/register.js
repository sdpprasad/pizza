// Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 import './register.css'

function Register() {
  const [formdata, setFormdata] = useState({
    'fname': '',
    'lname': '',
    'username': '',
    'password': '',
    'Cpassword': ''
  });

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(formdata);
    axios.post('http://localhost:4500/signup', { formdata })
      .then((res) => console.log(res.data));
    toast.success("Signin Successfully");
  }

  return (
    <div id='div' style={{marginLeft:'400px'}} >
      <form className='register-form' onSubmit={handleSignup} action='post'style={{maxWidth:'50%'}}>
        <h3 id='head'>Register</h3>
        <span>First Name:
        <input type="text" name="fname" placeholder="Firstname" id='in' onChange={(e) => setFormdata({ ...formdata, fname: e.target.value })} />
        </span>
        <span>Last Name:
        <input type="text" name="lname" placeholder="Lastname" id='in' onChange={(e) => setFormdata({ ...formdata, lname: e.target.value })} />
        </span>
        <span>Username:
        
        <input type="text" name="username" placeholder="Username" id='in' onChange={(e) => setFormdata({ ...formdata, username: e.target.value })} />
        </span>
        <span>Password:
        <input type="password" name="password" placeholder="Password" id='in' onChange={(e) => setFormdata({ ...formdata, password: e.target.value })} />
        </span>
        <span>Confirm Password:
        <input type="password" name="Cpassword" placeholder="Password" id='in' onChange={(e) => setFormdata({ ...formdata, Cpassword: e.target.value })} />
        </span>
        <input type="submit" value="SignUp" id='submit' />
        <ToastContainer />
      </form>
      <br />
    </div>
  );
}

export default Register;
