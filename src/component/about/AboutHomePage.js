import React from 'react';



const AboutHomePage = () => {
    return (
        <section className="section section-padding-equal bg-color-light">
            <div className="container">
                <div className="row align-items-center">
                    <div>
                        <div className="about-us">
                            <div className="section-heading heading-left mb-0">
                                <span className="subtitle">About Us</span>
                                <h2 className="title mb--40">We design, construct &amp; innovate.</h2>
                                <p>Welcome to our website, where we turn your vision into reality. With a comprehensive range of services tailored to meet your every need, we are your trusted partner from project inception to completion and beyond. </p>
                                <p>We specialize in providing top-tier services across the construction spectrum, ensuring that every aspect of your project is meticulously planned, executed, and perfected.  </p>
                            </div>
                        </div>
                    </div>

                    {/* <div id="login" className="col-xl-5 col-lg-6 offset-xl-1">
                        <div className="contact-form-box">
                            <h3 className="title">Login Here</h3>
                           <FormOne />
                        </div>
                    </div> */}
                </div>
            </div>
            <ul className="shape-group-6 list-unstyled">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/bubble-7.png"} alt="Bubble" /></li>
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} alt="line" /></li>
                <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/line-5.png"} alt="line" /></li>
            </ul>
        </section>
    )
}

export default AboutHomePage;