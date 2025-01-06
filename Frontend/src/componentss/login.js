// import React, { useState} from "react";
// import axios  from "axios";
// import "./login.css"



// function Form() {
//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };
//   const[form,setForm]=useState({
//     'Name':"",'Email':"",'PhoneNumber':"",'Address':"",'Pizza_type':""
  
//   })
//   const handleSubmit=(e)=>{
//     e.preventDefault();
//      axios.post("http://localhost:4500/addlogin",{form })
//      .then((res)=>console.log(res.data))
  

//     closeModal();

//   }
//   return(
    
//     <div className="container-fluid" id="CONTACT" style={{marginTop:"2rem"}}>
//       <div className="row">
//         <div className="col-md-12">
//           <button  onClick={openModal} type="submit" className="btn2 mb-5"style={{marginTop:"350px"}} >
//             online booking
//           </button>
//           {isOpen&&(
//             <div className="modal">
//               <div className="modal-content">
               
//                 <span className="close" onClick={closeModal} style={{color:"red"}}>X</span>
                
//                 <form onClick={handleSubmit} style={{textAlign:"right", width:'450px'}}>
//                   <h4 >Customer Details</h4>
//                   <span>Name:
//                   <input type="text" name="Name" onChange={(e)=>setForm({...form,Name:e.target.value})}onClick={(e) => e.stopPropagation()} />
//                   </span>
//                   <span>Email:
//                   <input type="email" name="Email" onChange={(e)=>setForm({...form,Email:e.target.value})} onClick={(e) => e.stopPropagation()} />
//                   </span>
//                   <span>PhoneNumber:
//                   <input type="number" name="PhoneNumber" onChange={(e)=>setForm({...form,PhoneNumber:e.target.value})} onClick={(e) => e.stopPropagation()} />
//                   </span>
//                   <span>Address:
//                   <input type="text" name="Address" onChange={(e)=>setForm({...form,Address:e.target.value})} onClick={(e) => e.stopPropagation()} />
//                   </span>
//                   <span>Pizza_type:
//                   <input type="text" name="Pizza_type" onChange={(e)=>setForm({...form,Problem:e.target.value})} onClick={(e) => e.stopPropagation()} />
//                   </span>
//                   <input type="submit" value="submit" className=""/>


//                 </form>
//               </div>

//             </div>
//           )}
//         </div>

//       </div>
//     </div>

//   )
// }
// export default Form;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import './login.css'

function Login() {
  let navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);

    // Assuming your login endpoint is '/getsignindata', adjust it as needed
    axios.post('http://localhost:4500/signin', formdata)
      .then((res) => {
        console.log(res.data);

        toast.success("Login Successful");
        navigate('/');
      })
      .catch((error) => {
        console.error('Error:', error.message);
        toast.error("Login Failed");
      });
  };

  return (
    <div id='login-container'>
      <form className='login-form'>
        <h3 id='login-heading'>Login</h3>
        <span>Username:
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formdata.username}
          onChange={handleChange}
        /></span>
        
        <span>Password:
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formdata.password}
          onChange={handleChange}
        />
        </span>
        <input type="submit" id='login-submit' value='Sign In' onClick={handleSubmit} />
        <ToastContainer />
        <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
      </form>
    </div>
  );
}

export default Login;

