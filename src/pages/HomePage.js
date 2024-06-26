import React from 'react';
import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';
import SEO from '../common/SEO';
import AboutHomePage from '../component/about/AboutHomePage.js';
import BannerHome from '../component/banner/BannerHome';

import ProjectHome from '../component/project/ProjectHome';
import ServiceHomePage from './ServiceHomePage.js';

import ColorSwitcher from '../elements/switcher/ColorSwitcher';


const HomePage = () => {

    return (
        <>
        <SEO title="Crafted Spaces"/>
        
         <ColorSwitcher/>
        <main className="main-wrapper">
            <Header />
            <BannerHome />
            <AboutHomePage />
                    <ServiceHomePage/>
            {/* <div className="section section-padding-2 bg-color-dark">
                <div className="container">
                    <SectionTitle 
                        subtitle="What We Can Do For You"
                        title="Services we offer"
                        description="Transforming dreams into reality, Crafted Spaces offer end-to-end construction solutions. "
                        textAlignment="heading-light-left"
                        textColor=""
                    />
                   
                     <div className='row'>
                        <ServiceHome colSize="col-xl-4 col-md-6" serviceStyle="" itemShow="6" />
                    </div>
                </div>
                <ul className="list-unstyled shape-group-10">
                    <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/line-9.png"} alt="Circle" /></li>
                    <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-42.png"} alt="Circle" /></li>
                    <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-43.png"} alt="Circle" /></li>
                </ul>
            </div> */}
            
            <ProjectHome />
           
          
        <Footer parentClass="" />
        </main>
        </>
    )
}

export default HomePage;

