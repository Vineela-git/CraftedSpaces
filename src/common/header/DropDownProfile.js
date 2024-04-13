import React, {useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const DropDownProfile = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Get the navigation function
  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    setUser(null);
    navigate("/login");
  };
  return(

   
    <ul className="mainmenu">
        <li className="menu-item-has-children">
            <Link to="#">Profile <FaAngleDown /><FontAwesomeIcon icon={faUser} /></Link>

            <ul className="axil-submenu">
                        <li><Link to={process.env.PUBLIC_URL + "#"}>Chat</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "#"}>Edit Profile</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "#"}>Settings</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "#"} onClickCapture={handleLogout}>Logout</Link></li>
                    </ul>
        </li>
       
    </ul>
    

  )


}

export default DropDownProfile;