import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import TrackVisibility from 'react-on-screen';

const AboutFour = () => {
    return (
        <div className="section section-padding case-study-featured-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-3">
                        <div className="case-study-featured-thumb text-start">
                            <img src={process.env.PUBLIC_URL + "/images/others/aboutbanner.png"} alt="travel" style={{ borderRadius: '30px' }} />
                        </div>
                    </div>

                    <div className="col-xl-8 col-lg-9">
                        <div className="case-study-featured">
                            <div className="section-heading heading-left">
                                <span className="subtitle">Who we are</span>
                                <h2 className="title">Our Identity and Commitment to Construction Solutions</h2>
                                <p>Whether it's residential, commercial, or industrial construction</p>
                                <p>We have the knowledge, skills, and resources to tackle projects of any size and complexity</p>
                                <Link to="#" className="axil-btn btn-fill-primary btn-large">Read More</Link>
                            </div>
                            <div className="case-study-counterup">
                                {/* <div className="single-counterup">
                                    {/* <TrackVisibility once>
                                        {({isVisible}) => (
                                            <div className="counter-item">
                                                {isVisible && (
                                                    <>
                                                        <h2 className="count-number">
                                                            <CountUp end={10} duration={1} />
                                                            <span className="symbol">+</span>
                                                        </h2>
                                                        
                                                        <span className="counter-title">Years of Experience on the Market</span>
                                                    </>
                                                )}
                                            </div>
                                        )}
                                    </TrackVisibility>s
                                </div> */}
                                {/* <div className="single-counterup">
                                    <TrackVisibility once>
                                        {({isVisible}) => (
                                            <div className="counter-item">
                                                {isVisible && (
                                                    <>
                                                        <h2 className="count-number">
                                                            <CountUp end={1500} duration={1} />
                                                            <span className="symbol">+</span>
                                                        </h2>
                                                        
                                                        <span className="counter-title">Projects Delivered So Far</span>
                                                    </>
                                                )}
                                            </div>
                                        )}
                                    </TrackVisibility>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutFour;
