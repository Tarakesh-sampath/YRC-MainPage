import React from 'react';
import "../style/Navbar.css"
function Navbar() {
  return (
    <div className='navbar'>
      <img src={require("../images/vec_logo.svg").default} className="vec-logo" alt="logo" height={100} />
      <h1>YOUTH RED CROSS</h1>
      <img src={require("../images/yrc_logo.svg").default} className="yrc-logo" alt="logo" height={100} />
    </div>
  )
}

export default Navbar
