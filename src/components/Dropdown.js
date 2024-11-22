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

export default Dropdown
