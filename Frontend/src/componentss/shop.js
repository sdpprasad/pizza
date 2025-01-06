import './shop.css';
import axios from 'axios';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Card() {
 
  
  const [searchTerm, setSearchTerm] = useState('');
  const [ cartItems,setCartItems] = useState([]);

  const data = [
 
//   { imageurl: 'https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg?w=1060&t=st=1699794067~exp=1699794667~hmac=39653726522af051e3cc229cec86d3ec799fbda21ff1fd76eef4785ec2dabcfb',
    //  name: 'extra cheese', 
    //  Price: '299',
    // },
     { imageurl: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-sliced-into-six-slices_141793-2157.jpg?w=996&t=st=1699794120~exp=1699794720~hmac=28d7985a81485d51092bdb4ff190b3d99f89b977391483ad7b88306feb1f2c3a',
     name: 'single', 
    prize:'299', 
     },
     { imageurl: 'https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg?w=1060&t=st=1699794067~exp=1699794667~hmac=39653726522af051e3cc229cec86d3ec799fbda21ff1fd76eef4785ec2dabcfb',

     name: 'extra cheese', 
    prize:'299', 
     },
     { imageurl: 'https://img.freepik.com/premium-photo/vegan-pizza-with-mushrooms-vegetables-herbs-keto-diet-pegan-diet_84130-3539.jpg?w=996',
     name: 'vegan pizza with mashrooms', 
    prize:'299', 
     },
     { imageurl: 'https://img.freepik.com/premium-photo/homemade-pizza-with-sun-dried-tomatoes-mushrooms-olives-italian-cuisine-food-delivery_187166-3456.jpg?w=1060',
     name: 'Home made pizza', 
    prize:'299', 
     },
     { imageurl: 'https://img.freepik.com/free-photo/pizza_677411-2411.jpg?t=st=1699795612~exp=1699799212~hmac=06147f415078cbaa08498e2875cca155d244ac80181d9d9f752e737a31e257e9&w=740',
     name: 'small too', 
    prize:'199', 
     },
     { imageurl: 'https://img.freepik.com/premium-photo/varied-pizzas-with-sauce-wooden-table_220925-1497.jpg?w=1060',
     name: '5 cambo', 
    prize:'599', 
     },
    //  { imageurl: 'https://5.imimg.com/data5/OL/EW/MY-13635553/19.jpg',
    //  name: 'Nothing Back Panel', 
    // prize:'299', 
    //  },
     { imageurl: 'https://img.freepik.com/free-photo/assortment-milkshake-glasses-with-fruits-chocolate_23-2148707756.jpg?w=1060&t=st=1699796434~exp=1699797034~hmac=8fa301b0f64626c00e4eaa610bfefb18196778a8de1a6c525e2d7e90cb7d5ca1',
     name: 'Special milkshake', 
    prize:'149', 
     },
     { imageurl: 'https://img.freepik.com/premium-photo/collection-colorful-tropical-cocktails_93675-45445.jpg?w=996',
     name: 'special cambo cool', 
    prize:'149', 
     },
     { imageurl: 'https://img.freepik.com/free-photo/hawaiian-pizza_74190-2500.jpg?w=996&t=st=1699796114~exp=1699796714~hmac=d013d34685bac2185c1b2651b71ad6082f1790bfc718fc54ed9886785feb57f4',
     name: 'Chicken pizza', 
    prize:'399', 
     },
     { imageurl: 'https://img.freepik.com/free-photo/colorful-cocktails-with-ice_144627-21746.jpg?w=360&t=st=1699796512~exp=1699797112~hmac=f6111073218056008847e6014e53ac92d3de90696e6f4fb280064824248c5c83',
     name: 'Cool cola', 
    prize:'69', 
     },
     { imageurl: 'https://img.freepik.com/premium-photo/isolated-pizza-with-mushrooms-olives_219193-8149.jpg?w=740',
     name: 'mahsroom with aleves', 
    prize:'299', 
     },
     { imageurl: 'https://img.freepik.com/premium-psd/tasty-cola-drink-glass-isolated-transparent-background_812337-622.jpg?w=360',
     name: 'Diet coke', 
    prize:'199', 
     },
     { imageurl: ' https://img.freepik.com/free-photo/front-view-delicious-cheese-pizza-consists-olives-pepper-tomatoes-dark-surface_179666-34395.jpg?w=996&t=st=1699796296~exp=1699796896~hmac=1a6f4d7a122b58482d399c607aa114464383def9c59fc352f2929206251ffba8',
     name: 'Hot special', 
    prize:'250', 
     },
     { imageurl: 'https://img.freepik.com/premium-photo/ham-pizza_163782-2490.jpg?w=900',
     name: 'Pazta pizza', 
    prize:'299', 
     },
     { imageurl: ' https://img.freepik.com/free-vector/club-cocktails-icons-set_1284-9765.jpg?w=740&t=st=1699796570~exp=1699797170~hmac=cb67b6a9f75e06fd6fc94789b9a308237ac5c39957c0e9680a7d1331ef2a3b98',
     name: 'Special cool', 
    prize:'100', 
     },
  ];
 
  
 

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleButtonClick = (itemName) => {
    const selectedItem = filteredData.find((item) => item.name === itemName)
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
        {filteredData.map((item, index) => (
          <div key={index} className='col-md-2'>
            <img src={item.imageurl} alt='' style={{ height: '300px', width: '300px' , }} />
            <p>{item.name}</p>

            <h6 style={{ color: 'green' }}>{item.prize} </h6>
            {/* <p>
              <del>{item.originalPrice}</del> {item.discountedPrice}
            </p> */}
             <h4 onClick={() => handleButtonClick(item.name)} style={{color:"red",cursor:"pointer"}}><i class="fa-solid fa-cart-plus" style={{color: "red",cursor:"pointer"}}></i></h4>
          </div>
        ))} 
      </div>
    </div>
    
  );
}

export default Card;


