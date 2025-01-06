import React from 'react';
import './App.css';
import Navbar from './componentss/navbar';
import Shop from './componentss/shop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shoplist from './componentss/shopdata';
import Addproduct from './componentss/addproduct';
import Newshop from './componentss/newshop';
import Feedback from './componentss/feedback';
import Register from './componentss/register';
import Login from './componentss/login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/newshop" element={<Newshop />} />
          <Route path="/shoplist" element={<Shoplist />} />
          <Route path="/addproduct" element={<Addproduct />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
