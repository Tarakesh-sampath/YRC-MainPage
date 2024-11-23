import React ,{ useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "./Dropdown.css"

function Dropdown( props ) {
  const[click,setClick] = useState(false)
  const handleclick = () => setClick(!click)
  return (
    <div className='dropdown-box'>
      <ul onClick={handleclick} className={click ? "dropdown-a" : "dropdown"}>
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
export default Dropdown
