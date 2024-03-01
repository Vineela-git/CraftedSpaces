import React from 'react';
import { Link } from 'react-router-dom';


const CtaLayoutHome = () => {

    return (

        <div className="section call-to-action-area">
            <div className="container">
                <div className="call-to-action">
                    <div className="section-heading heading-light">
                        <span className="subtitle">Let's build Together</span>
                        <h2 className="title">Need a successful project?</h2>
                        <Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-large btn-fill-white">
                            Estimate Project
                        </Link>
                    </div>
                    <div className="thumbnail">
                        <div className="larg-thumb" data-sal="zoom-in" data-sal-duration="600" data-sal-delay="100">
                            <img className="paralax-image" src={process.env.PUBLIC_URL + "/images/others/chat-group.png"} alt="Chat" />
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
    )

}

export default CtaLayoutHome;