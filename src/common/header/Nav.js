import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";


const Nav = () => {
    return (
        <nav className="mainmenu-nav">
            <ul className="mainmenu">
                <li className="menu-item-has-children">
                    <Link to="/">Home </Link>
                </li>

                <li className="menu-item-has-children">
                    <Link to={process.env.PUBLIC_URL+"/about-us"}>About Us</Link>
                </li>

                <li className="menu-item-has-children">
                    <Link to="#">Services <FaAngleDown /></Link>

                    <ul className="axil-submenu">
                        <li><Link to={process.env.PUBLIC_URL + "/builders"}>Builders</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/architects"}>Architects</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/interior-designers"}>Interior Designers</Link></li>
                    </ul>
                </li>
               
                <li className="menu-item-has-children">
                    <Link to='#'>Login/Signup<FaAngleDown/></Link>
                    <ul className="axil-submenu">
                        <li><Link to={process.env.PUBLIC_URL+"/login"}>Login</Link></li>
                        <li><Link to={process.env.PUBLIC_URL+"/signup"}>Signup</Link></li>
                        
  
                 </ul>
    
                </li>

                <li className="menu-item-has-children">
                    <Link to={process.env.PUBLIC_URL+"/search"}>Search</Link>
                  
                </li>
                <li><Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;