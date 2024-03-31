import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";



const Nav = () => {
    return (
        <nav id="samepagenav" className="mainmenu-nav">
            <ul className="mainmenu">
                <li className="nav-item">
                 <a className="nav-link" href="#accountsettings">Account Settings</a>
                </li>

                <li className="menu-item-has-children">
                <a className="nav-link" href="#about-me">About Me</a>
			    </li>

                <li className="menu-item-has-children">
                <a className="nav-link" href="#edit-a-project">Edit a Project</a>
			    </li>

                <li className="menu-item-has-children">
                <a className="nav-link" href="#add-a-project">Add a Project</a>
			    </li>

               
              
            </ul>
           
        </nav>
    )
}

export default Nav;