import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar_white({ menuItems }) {

  const [scroll, setScroll] = useState(false);
  const [click, setClick] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScroll(false);
    } else {
      setScroll(false);
    }
  };

  const onMouseEnter = (index) => {
    if (window.innerWidth >= 960) {
      setActiveDropdown(index);
    }
  };
  
  const onMouseLeave = () => {
    if (window.innerWidth >= 960) {
      setActiveDropdown(null);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scroll ? '' : 'scrolled'}`}>
        <img 
              src={require("../../images/vec_logo_bg.svg").default}
              style={{ borderRadius: '50%', padding: "5px 5px"}} 
              className="vec-logo" 
              alt="logo" 
              height={65} 
        />
        <div className='menu-icon' onClick={handleClick}>
          <ion-icon Name={click ? "close-outline": "menu-sharp"}/>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="nav-item"
              onMouseEnter={() => onMouseEnter(index)}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to={item.path}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {item.title}
                {item.drop && (
                  <><ion-icon name="chevron-down-outline" class="down-arrow"></ion-icon> </>
                )}
              </Link>
              { activeDropdown === index && item.drop && <Dropdown list={item.drop} />}
            </li>
          ))}
        </ul>
        <img 
              src={require("../../images/yrc_logo.svg").default}
              className="yrc-logo" 
              alt="logo" 
              height={80} 
            />
      </nav>
    </>
  );
}
Navbar_white.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      cName: PropTypes.string,
      drop: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          path: PropTypes.string.isRequired,
          cName: PropTypes.string,
        })
      ),
    })
  ).isRequired,
};

export default Navbar_white;