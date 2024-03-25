import React from "react";
import { Link } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const DropDownProfile = () => {
  return(

   
    <ul className="mainmenu">
        <li className="menu-item-has-children">
            <Link to="#">Profile <FaAngleDown /><FontAwesomeIcon icon={faUser} /></Link>

            <ul className="axil-submenu">
                        <li><Link to={process.env.PUBLIC_URL + "#"}>Chat</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "#"}>Edit Profile</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "#"}>Settings</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "#"}>Logout</Link></li>
                    </ul>
        </li>
       
    </ul>
    

  )


}

export default DropDownProfile;