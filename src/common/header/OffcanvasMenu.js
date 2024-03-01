import React from 'react';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas'
import { FaFacebookF, FaLinkedinIn,FaAngleDown, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const OffcanvasMenu = ({offcanvasShow, offcanvasHide}) => {
    return (
        <Offcanvas show={offcanvasShow} onHide={offcanvasHide} placement="end" className="header-offcanvasmenu">
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
                <form action="#" className="side-nav-search-form">
                    <div className="form-group">
                        <input type="text" className="search-field" name="search-field" placeholder="Search..." />
                        <button className="side-nav-search-btn"><i className="fas fa-search"></i></button>
                    </div>
                </form>
                <div className="row ">
                    <div className="col-lg-5 col-xl-6">
                        <ul className="main-navigation list-unstyled">
                            <li><Link to={process.env.PUBLIC_URL + "#"}>Home</Link></li>

                            <li className="main-navigation list-unstyled">
                                <Link to="#">Services</Link>

                                   <ul className="axil-submenu">
                                   <li><Link to={process.env.PUBLIC_URL + "/builders"}>Builders</Link></li>
                                   <li><Link to={process.env.PUBLIC_URL + "/architects"}>Architects</Link></li>
                                  <li><Link to={process.env.PUBLIC_URL + "/interior-designers"}>Interior Designers</Link></li>
                                 </ul>
                            </li>
                            <li><Link to={process.env.PUBLIC_URL + "/signup"}>Signup</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + "/contact-us"}>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-7 col-xl-6">
                        <div className="contact-info-wrap">
                            <div className="contact-inner">
                                <address className="address">
                                    <span className="title">Contact Information</span>
                                    <p>6300 Texas A & M University <br /> Corpus Christi, Texas</p>
                                </address>
                                <address className="address">
                                    <span className="title">Email Us </span>
                                    <a href="email:tmuppalla@islander.tamucc.edu" className="email"><FaEnvelope /> tmuppalla@islander.tamucc.edu</a>
                                    <a href="email:vmadduri@islander.tamucc.edu" className="email"><FaEnvelope/> vmadduri@islander,tamucc.edu</a>
                                </address>
                            </div>
                            <div className="contact-inner">
                                <h5 className="title">Find us here</h5>
                                <div className="contact-social-share">
                                    <ul className="social-share list-unstyled">
                                        <li>
                                            <a href="https://facebook.com/"><FaFacebookF /></a>
                                        </li>

                                        <li>
                                            <a href="https://twitter.com/"><FaXTwitter /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/"><FaLinkedinIn /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default OffcanvasMenu;
