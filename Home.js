import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import './Home.css';

function Home() {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Lets Live"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    };
    
    const typed = new Typed(typedElement.current, options);

    // Cleanup on unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="home1">
      <div className="typing-text1">
        <span ref={typedElement}></span>
      </div>
      <div className="container1">
        <h2>Love Ethics</h2>
        <Link to="/love"><button className="service-button">Read Now </button></Link>
      </div>
      <br></br>
      <div className="container1">
        <h2>Just a Bussiness</h2>
        <Link to="/bussiness"><button className="service-button">Read Now</button></Link>
      </div>
        <br></br>
      <div className="container1">
        <h2>Everything is Fair in Corporate Job</h2>
        <Link to="/corporate"><button className="service-button">Read Now</button></Link>
      </div>
    </div>
  );
}

export default Home;
