import React from 'react';
import { Link } from 'react-router-dom';


const BannerArchitects = () => {
    return (
        <div className="banner banner-style-5" style={{backgroundImage:`url(${process.env.PUBLIC_URL + "/images/banner/banner-new3.jpeg"})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-xl-7">
                        <div className="banner-content">
                            <h1 className="title">Designing Tomorrow, Building Today
                               </h1>
                               <h3 style={{ color: 'white' }}>Your Architectural Visionaries</h3>
                            <div>
                                <Link to={process.env.PUBLIC_URL + "/project-grid-one"} className="axil-btn btn-fill-white btn-large">View Showcase</Link>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default BannerArchitects;