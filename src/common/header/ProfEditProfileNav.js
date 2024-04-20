import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";



const Nav = () => {
    return (
        <nav id="samepagenav" className="mainmenu-nav">
            <ul className="mainmenu">
            <li className="menu-item-has-children">
				<Link to={process.env.PUBLIC_URL+"/professionalhome"}>Home</Link>  </li>

      
               
              
            </ul>
           
        </nav>
    )
}

export default Nav;