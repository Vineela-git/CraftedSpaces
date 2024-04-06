import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';


const BannerInteriorDesigner = () => {
    return (
        <div className="banner banner-style-5" style={{backgroundImage:`url(${process.env.PUBLIC_URL + "/images/banner/banner-new.png"})`}}>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="banner-content">
                        <h1 className="title">Transforming Spaces, Inspiring Lives</h1>
                        <h3 style={{ color: 'white' }}>Your Interior Design Destination.</h3>
                            <Link to={process.env.PUBLIC_URL + "/project-grid-one"} className="axil-btn btn-fill-white btn-large">View Showcase</Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default BannerInteriorDesigner;