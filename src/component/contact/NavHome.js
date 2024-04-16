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
				<Link to={process.env.PUBLIC_URL+"/about-us"}>About Us</Link>  </li>
                

                <li className="menu-item-has-children">
                    <Link to="#">Services <FaAngleDown /></Link>

                    <ul className="axil-submenu">
                        <li><Link to={process.env.PUBLIC_URL + "#"}>Builders</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "#"}>Architects</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "#"}>Interior Designers</Link></li>
                    </ul>
                </li>
               

                <li><Link to={process.env.PUBLIC_URL + "/contact-us"}>Contact Us</Link></li>

                <li className="menu-item-has-children">
                <Link to={process.env.PUBLIC_URL+"/signup"}>Signup</Link></li>
            </ul>
           
        </nav>
    )
}

export default Nav;