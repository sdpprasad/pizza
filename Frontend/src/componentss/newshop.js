import './shop.css';
import axios from 'axios';

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Newshop() {
 
  
  const [searchTerm, setSearchTerm] = useState('');
  const [ cartItems,setCartItems] = useState([]);
  const [ data,setData] = useState([]);

 
  useEffect(()=>{
    axios.get('http://localhost:4500/getallproduts')
    .then(response => {
      setData(response.data)
    })
  },[])
 

  // const filteredData = data.filter((item) =>
  //   item.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  const handleButtonClick = (itemName) => {
    const selectedItem = filteredData.find((item) => item.title === itemName)
    // You can add custom logic here when a button is clicked
    console.log(`Button clicked for ${itemName}`);
   
    // Add the selected item to the cartItems state
    setCartItems((prevCartItems) => [...prevCartItems, selectedItem]);
    axios.post('http://localhost:4500/addToCart', selectedItem)
    .then(response => {
      console.log('Success:', response.data);
      alert("Added to Cart Successfully")
      // You can handle success response from the server
    })
    .catch(error => {
      console.error('Error:', error);
      // You can handle errors here
    });
  };

  return (
    
      
  
    <div className='container' style={{ border: '0px' }} id='SHOP' >
      {/* Search Bar */}
      <input
        type='text'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
       <Link to="/shoplist"><i class="fa-solid fa-cart-plus fa-2x" style={{color: "black",marginLeft:"2rem"}}></i></Link>

      <div className='row'>
        {data.map((item, index) => (
          <div key={index} className='col-md-2'>
            <img src={`http://localhost:4500/images/${item.productpic}`} alt='' style={{ height: '300px', width: '200px' }} />
            <p>{item.title}</p>
            <i className='fa-solid fa-star' style={{ color: 'green' }}></i>
            <i className='fa-solid fa-star' style={{ color: 'green' }}></i>
            <i className='fa-solid fa-star' style={{ color: 'green' }}></i>
            <i className='fa-solid fa-star' style={{ color: 'green' }}></i>

            <h6 style={{ color: 'green' }}>{item.discount} off</h6>
            <p>
              {/* <del>{item.originalPrice}</del> {item.price} */}
              {item.price}
            </p>
             <h4 onClick={() => handleButtonClick(item.title)} style={{color:"red",cursor:"pointer"}}>Add to Cart<i class="fa-solid fa-cart-plus" style={{color: "red",cursor:"pointer"}}></i></h4>
          </div>
        ))} 
      </div>
    </div>
    
  );
}

export default Newshop;


