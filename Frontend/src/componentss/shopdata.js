

import { useState,useEffect  } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './shopdata.css'




const Shoplist = () => {
  const [shopdata,setShopdata] = useState([]);

  useEffect(() => {
    // Make a GET request to fetch data from the backend
    axios.get('http://localhost:4500/getshopdata') // Update the URL to match your backend
      .then((response) => {
        console.log(response.data.shopdata); // Optional: Log the response data
        setShopdata(response.data.shopdata);
      })
      .catch((error) => {
        console.error(error); 
        // Handle errors
      });
  }, [])
  ;
  const deletesho=(id)=>{
    
    axios.delete('http://localhost:4500/deleteshopdata/'+id)
    .then(res=>{console.log(res)
      alert("deleted successfully")

   
    window.location.reload()

    })
     
  }

  return (
    <div className="container" style={{backgroundColor:'chartreuse'}}>
        <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', borderRadius:"2rem",}}>
          <div id="adity">
            <Link to="/" style={{color:"black",textDecorationLine:"none",fontWeight:"bold", color:'red'}}  >Home</Link>
           </div>
        </div>
        </div>
        

    <div style={{marginTop:"1.5rem"}}>
      
      <table  cellPadding={1} cellSpacing={1}style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
            <tr>
            <th>SL.NO</th>
            <th>Name</th>
            <th>Prize</th>
            </tr>
        </thead>
        <tbody>
            {shopdata &&shopdata.map((shopdata, index) => (
            <tr key={index}> {/* Each student data should be wrapped in a separate <tr> */}
                <td>{index + 1}</td>
                <td>{shopdata.name}</td>
               <td>{shopdata.Prize}</td>
                <td><button onClick={()=>deletesho(shopdata._id) } style={{backgroundColor:"red",height:"50px",width:"50%",}}>Remove</button></td>
                </tr>
            ))}
            
        </tbody>
        </table>

    </div>
    </div>
  );
};

export default Shoplist;