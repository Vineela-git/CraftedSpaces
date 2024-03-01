import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';


const BannerInteriorDesigner = () => {
    return (
        <div className="banner banner-style-2">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="banner-content">
                        <h1 className="title">Transforming Spaces, Inspiring Lives</h1>
                        <h3>Your Interior Design Destination.</h3>
                            <Link to={process.env.PUBLIC_URL + "/project-grid-one"} className="axil-btn btn-fill-white btn-large">View Showcase</Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default BannerInteriorDesigner;