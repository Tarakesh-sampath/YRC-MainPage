import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Dropdown from "./Dropdown.js";
<<<<<<< HEAD
import "../style/Navbar.css";

function Navbar() {
  const[click,setClick] = useState(false)
  const[dropdown,setDropdown] = useState(false)
  const handleclick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  const onMouseEnter = () =>{
    if (window.innerWidth<960){
      setDropdown(false)
    } else{
      setDropdown(true)
    }
  };
  const onMouseLeave = () =>{
    if (window.innerWidth<960){
      setDropdown(false)
    } else{
      setDropdown(false)
    }
      
  };

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
            <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <Link to="/" className='nav-links' onClick={closeMobileMenu}>Our Services</Link>
              {dropdown && <Dropdown/>}
            </li>
            <li className='nav-item'>
              <Link to="/" className='nav-links' onClick={closeMobileMenu}>Contact us</Link>
            </li>
          </ul>
        <img src={require("../images/yrc_logo.svg").default} className="yrc-logo" alt="logo" height={80} />
      </div>
    </header>
  )
=======
import "./Navbar.css";

function Navbar() {
  const OurService = [
        {
            title:"action - 1",
            path:"/",
            cName:"Dropdown-link"
        },
        {
            title:"action - 2",
            path:"/Home",
            cName:"Dropdown-link"
        }
    ]
    const[click,setClick] = useState(false)
    const[dropdown,setDropdown] = useState(false)
    const handleclick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    const onMouseEnter = () =>{
        if (window.innerWidth<960){
          setDropdown(false)
        } else{
          setDropdown(true)
        }
      };
      const onMouseLeave = () =>{
        if (window.innerWidth<960){
          setDropdown(false)
        } else{
          setDropdown(false)
        }
          
      };
    return (
        <>
        <header>
            <div className='navbar'>
            <img 
              src={require("../images/vec_logo_bg.svg").default}
              style={{ borderRadius: '50%', padding: "5px 5px"}} 
              className="vec-logo" 
              alt="logo" 
              height={65} 
            />
            <div className='navbar-body'>
                <div className='menu-icon' onClick={handleclick}>
                    <ion-icon Name={click ? "close-outline": "menu-sharp"}/>
                </div>
                <ul className={click ? "nav-menu-a" : "nav-menu"}>
                    <li className='nav-item'>
                      <Link to="/Home" className='nav-links' onClick={closeMobileMenu}>
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
                      onMouseLeave={onMouseLeave}
                    >
                      <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                        Our Services
                      </Link>
                      {dropdown && <Dropdown list={OurService}/>}
                    </li>
                    <li className='nav-item'>
                    <Link to="/" className='nav-links' onClick={closeMobileMenu}>Contact us</Link>
                    </li>
                </ul>
            </div>
            <img 
              src={require("../images/yrc_logo.svg").default}
              className="yrc-logo" 
              alt="logo" 
              height={80} 
            />
            </div>
        </header>
        </>
    )
>>>>>>> e0ed2a3abcc5c1d6a5f991d34176aa472b841f73
}

export default Navbar
