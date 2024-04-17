import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import SEO from '../common/SEO';
// import BannerProf from '../component/banner/BannerProf';
import CompanyDetails from './CompanyDetails';
import SectionTitle from '../elements/section-title/SectionTitle';
import ColorSwitcher from '../elements/switcher/ColorSwitcher'

import FooterTwo from '../common/footer/FooterTwo';
// import FormThree from '../component/contact/FormThree';
// import ProjectPortfolio from '../component/project/ProjectPortfolio';
// import ProjectProf from '../component/project/ProjectProf';
// import AboutProf from './AboutDesigners.js/AboutProf';


const professionalpage = () => {

    return (
        <>
        <SEO title="Personal Portfolio"/>
        <ColorSwitcher />
        <main className="main-wrapper">
            <HeaderThree />
            {/* <BannerProf/>
            
            <AboutProf/>

            <ProjectProf/> */}

        
            <div className="section-padding bg-color-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact-address mb--30">
                            <SectionTitle 
                                subtitle="Need a designer?"
                                title="Let’s work together"
                                description=""
                                textAlignment="heading-light-left"
                                textColor=""
                            />
                            <div className="address-list">
                                <div className="address">
                                <h6 className="title">Mail</h6>
                                <p>mail</p>
                                </div>
                                <div className="address">
                                <h6 className="title">Address</h6>
                                <p>address</p>
                                </div>
                                <div className="address">
                                <h6 className="title">Phone</h6>
                                <p>number</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-6">
                            <div className="contact-form-box mb--30">
                                <h3 className="title">Describe your project</h3>
                                <FormThree />
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>


            <FooterTwo />

        </main>
        </>
    )
}

export default professionalpage;

