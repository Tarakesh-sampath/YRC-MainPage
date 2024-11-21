import React from 'react';
import "../style/Navbar.css";
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <header>
      <div className='navbar'>
        <img src={require("../images/vec_logo_bg.svg").default} style={{ borderRadius: '50%', padding: "5px 5px"}} className="vec-logo" alt="logo" height={65} />
        <nav>
          <ul>
            <li><Link to="/">AboutUs</Link></li>
          </ul>
        </nav>
        <img src={require("../images/yrc_logo.svg").default} className="yrc-logo" alt="logo" height={80} />
      </div>
    </header>
  )
}

export default Navbar
