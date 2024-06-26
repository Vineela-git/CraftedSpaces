import React from 'react';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Tilty from 'react-tilty';


const BannerFour = () => {
    return (
        <div className="banner banner-style-5" style={{backgroundImage:`url(${process.env.PUBLIC_URL + "/images/banner/banner-new7.jpeg"})`}}>
        
            <div className="container">
                <div className="banner-content">    
                    <h1 className="title">Crafting Dreams<br/>into Concrete Reality</h1>
                    <h3 style={{ color: 'white' }}> Your Trusted Partners in Construction.</h3>
                    
                </div>
                
                <div className="banner-thumbnail">
                    <div className="large-thumb">

                       
                    </div>
                </div>
               
            </div>
            <ul className="list-unstyled shape-group-19">
                {/* <li className="shape shape-1">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-29.png"} alt="Bubble" />
                </li> */}
                <li className="shape shape-2">
                    <img src={process.env.PUBLIC_URL + "/images/others/line-7.png"} alt="Bubble" />
                </li>
            </ul>
        </div>
    )
}

export default BannerFour;
