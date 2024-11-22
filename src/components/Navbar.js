import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from "./Button.js";
import { Dropdown } from "./Dropdown.js";
import "../style/Navbar.css";

function Navbar() {
  const[click,setClick] = useState(false)
  const handleclick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  return (
    <header>
      <div className='navbar'>
        <img src={require("../images/vec_logo_bg.svg").default} style={{ borderRadius: '50%', padding: "5px 5px"}} className="vec-logo" alt="logo" height={65} />
          <div className='menu-icon' onClick={handleclick}>
            <ion-icon Name={click ? "close-outline": "menu-sharp"}/>
          </div>
          <ul className={click ? "nav-menu-a" : "nav-menu"}>
            <li className='nav-item'>
              <Link to="/Home" className='nav-links' onClick={closeMobileMenu}>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to="/" className='nav-links' onClick={closeMobileMenu}>AboutUs</Link>
            </li>
            <li className='nav-item'>
              <Link to="/" className='nav-links' onClick={closeMobileMenu}>Our Services</Link>
            </li>
          </ul>
        <img src={require("../images/yrc_logo.svg").default} className="yrc-logo" alt="logo" height={80} />
      </div>
    </header>
  )
}

export default Navbar
