import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Suggest from './Suggest';
import Contact from './Contact';
import Love from './Love';
import Business from './Bussiness';
import Corporate from './Corporate';
import './App.css'; // Include the CSS file

function App() {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/suggest">Suggest</Link></li>
          {/* <li><Link to="/contact">Contact</Link></li> */}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/suggest" element={<Suggest />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/love" element={<Love />} />
        <Route path="/bussiness" element={<Business />} />
        <Route path="/corporate" element={<Corporate />} />
      </Routes>
    </div>
  );
}

export default App;
