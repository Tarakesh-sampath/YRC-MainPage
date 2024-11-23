<<<<<<< HEAD
import React ,{ useState} from 'react';
import MenuItems from "./MenuItems.js";
import { Link } from 'react-router-dom';
import "../style/Dropdown.css"

function Dropdown() {
    const[click,setClick] = useState(false)
    const handleclick = () => setClick(!click)
    return (
        <div>
            <ul onClick={handleclick} classname={click ? "dropdown-a" : "dropdown"}>
                {MenuItems.map((item,index) => {
                    return(
                        <li key={index}>
                            <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>{item.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

=======
import React ,{ useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "./Dropdown.css"

function Dropdown( props ) {
  const[click,setClick] = useState(false)
  const handleclick = () => setClick(!click)
  return (
    <div className='dropdown-box'>
      <ul onClick={handleclick} classname={click ? "dropdown-a" : "dropdown"}>
        {props.list.map((item,index) => {
          return(
              <li key={index}>
                <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>{item.title}</Link>
              </li>
          );
        })}
      </ul>
    </div>
  )
}
// Correct definition of propTypes
Dropdown.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      cName: PropTypes.string.isRequired,
    })
  ).isRequired,
};
>>>>>>> e0ed2a3abcc5c1d6a5f991d34176aa472b841f73
export default Dropdown
