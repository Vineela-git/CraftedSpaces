import React from 'react';
import UserLoginHeader from '../common/header/UserLoginHeader';
import Footer from '../common/footer/Footer';
import SEO from '../common/SEO';
import AboutHomePage from '../component/about/AboutHomePage.js';
import BannerHome from '../component/banner/BannerHome';
import CtaLayoutHome from '../component/cta/CtaLayoutHome';
import ProjectHome from '../component/project/ProjectHome';
import ServiceLogin from '../component/service/ServiceLogin';
import SectionTitle from '../elements/section-title/SectionTitle';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';


const UserLoginHome = () => {

    return (
        <>
        <SEO title="Crafted Spaces"/>
        
         <ColorSwitcher/>
        <main className="main-wrapper">
            <UserLoginHeader />
            <BannerHome/>
            <div className="section section-padding-2 bg-color-dark">
                <div className="container">
                    <SectionTitle 
                        subtitle="What We Can Do For You"
                        title="Services we offer"
                        description="Transforming dreams into reality, Crafted Spaces offer end-to-end construction solutions. "
                        textAlignment="heading-light-left"
                        textColor=""
                    />
                    <div className='row'>
                        <ServiceLogin colSize="col-xl-4 col-md-6" serviceStyle="" itemShow="6" />
                    </div>
                </div>
                <ul className="list-unstyled shape-group-10">
                    <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/line-9.png"} alt="Circle" /></li>
                    <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-42.png"} alt="Circle" /></li>
                    <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-43.png"} alt="Circle" /></li>
                </ul>
            </div>
            <AboutHomePage />
            <ProjectHome />
           
            <CtaLayoutHome /> 
        <Footer parentClass="" />
        </main>
        </>
    )
}

export default UserLoginHome;

