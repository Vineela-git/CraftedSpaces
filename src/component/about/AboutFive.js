import React from 'react';
import { Link } from 'react-router-dom';


const AboutFive = () => {
    return (
      <div className="section-padding-equal">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-7">
                    <div className="about-team">
                    <div className="thumbnail">
                        <img src={process.env.PUBLIC_URL + "/images/about/about-2.png"} alt="thumbnail" />
                    </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="about-team">
                    <div className="section-heading heading-left">
                        <span className="subtitle">Our Team</span>
                        <h2>Alone we can do so little; together we can do so much.</h2>  
                        <p>we believe in the power of teamwork to achieve extraordinary results. Our team is the heart and soul of our organization, and we take pride in bringing together a group of talented individuals who share a common passion for excellence in the construction industry.</p>
                        <Link to="#" className="axil-btn btn-large btn-fill-primary">Our Team</Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AboutFive;