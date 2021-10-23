import './Navbar.css';
import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
  return(
    <div className="navbar" >
    
    <div className="wrapper">
      <span>S</span>
      <span>H</span>
      <span>O</span>
      <span>P</span>
    </div>
    
    <div class="search">
      <input type="text" class="searchTerm" id="input_text" value="Otsi veebipoest..."></input>
      <button type="submit" class="searchButton">GO<i class="fa fa-search"></i>
      </button>
    </div>



      <Link to="/">
        <img className="logo" src="webshio.png" alt=""/>
      </Link>
      <Link to="cart">
        <img className="cart" src="cart.svg" alt=""/>
      </Link>
    </div>
    
  );
}


// alumine tehke ise
export default Navbar;