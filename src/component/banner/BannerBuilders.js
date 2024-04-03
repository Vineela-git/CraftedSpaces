import React from 'react';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Tilty from 'react-tilty';


const BannerFour = () => {
    return (
        <div className="banner banner-style-4" style={{backgroundImage:`url(${process.env.PUBLIC_URL + "/images/banner/banner-thumb-7.png"})`}}>
        
            <div className="container">
                        <div className="banner-content">    
                            <h1 className="title">Crafting Dreams into Concrete Reality</h1>
                            <p>Your Trusted Partners in Construction.</p>
                          
                        </div>
                    
                <div className="banner-thumbnail">
                    <div className="large-thumb">

                       
                    </div>
                </div>
                <div className="banner-social">
                <   div className="border-line" />
                    <ul className="list-unstyled social-icon">
                        <li><a href="https://facebook.com/"><FaFacebookF /> Facebook</a></li>
                        <li><a href="https://twitter.com/"><FaXTwitter /> twitter</a></li>
                        <li><a href="https://www.linkedin.com/"><FaLinkedinIn /> Linkedin</a></li>
                    </ul>
                </div>
            </div>
            <ul className="list-unstyled shape-group-19">
                <li className="shape shape-1">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-29.png"} alt="Bubble" />
                </li>
                <li className="shape shape-2">
                    <img src={process.env.PUBLIC_URL + "/images/others/line-7.png"} alt="Bubble" />
                </li>
            </ul>
        </div>
    )
}

export default BannerFour;