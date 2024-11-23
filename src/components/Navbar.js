import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const OurService = [
    {
        title:"action - 1",
        path:"/",
        cName:"dropdown-link"
    },
    {
        title:"action - 2",
        path:"/",
        cName:"dropdown-link"
    }
  ]
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <img 
              src={require("../images/vec_logo_bg.svg").default}
              style={{ borderRadius: '50%', padding: "5px 5px"}} 
              className="vec-logo" 
              alt="logo" 
              height={65} 
        />
        <div className='menu-icon' onClick={handleClick}>
          <ion-icon Name={click ? "close-outline": "menu-sharp"}/>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to="/" className='nav-links' onClick={closeMobileMenu}>
              AboutUs
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            //onMouseLeave={onMouseLeave}
          >
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services 
            </Link>
            {dropdown && <Dropdown list={OurService} />}
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <img 
              src={require("../images/yrc_logo.svg").default}
              className="yrc-logo" 
              alt="logo" 
              height={80} 
            />
      </nav>
    </>
  );
}

export default Navbar;