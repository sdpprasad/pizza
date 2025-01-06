// Feedback.js
import React, { useState } from 'react';
import axios from 'axios';
 import { Link } from 'react-router-dom';
 import './feedback.css'

function Feedback() {
  const [formdata, setFormdata] = useState({
    'name': '',
    'email': '',
    'comments': ''
  });

  const handle = (e) => {
    e.preventDefault();
    console.log(formdata);
    axios.post('http://localhost:4500/addForm', { formdata })
    .then((res) => console.log(res.data));
    alert("inserted");
  }

  return (
    <footer >
      <div className="footer-content  ">
        <div className="comment-box">
       <center> <h1 style={{color:'black'}}>Feedback</h1>
       <div>
        <ul>
        <li><Link to="/">Home</Link></li>
        </ul>
       </div>
          <form onSubmit={handle}>
            <span>Name :
            <input type="text" name="name" placeholder="Name" id='in' className='inp' onChange={(e) => setFormdata({ ...formdata, name: e.target.value })} /></span>
            <span>Email :
            <input type="email" placeholder="Email" name='email' id='in' className='inp' onChange={(e) => setFormdata({ ...formdata, email: e.target.value })} /></span>
            <span>Comments :
            <textarea placeholder="Your message" name='comments' className='text-area' onChange={(e) => setFormdata({ ...formdata, comments: e.target.value })}></textarea><br /><br /></span>
            <button type="submit" id='submit' className='sub'>Submit</button>
          </form></center>
        </div>
      </div>
    </footer>
    
  );
}

export default  Feedback;
