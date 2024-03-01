import React from 'react';
import Footer from '../common/footer/Footer';
import HeaderInteriorDesigner from '../common/header/HeaderInteriorDesigner';
import SEO from '../common/SEO';
import BannerInteriorDesigner from '../component/banner/BannerInteriorDesigner';
import CtaLayoutHome from '../component/cta/CtaLayoutHome';
import ProjectHome from '../component/project/ProjectHome';
import ServiceArchitects from '../component/service/ServiceArchitects';
import SectionTitle from '../elements/section-title/SectionTitle';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';


const InteriorDesigner = () => {

    return (
        <>
        <SEO title="Creative Agency"/>
        <ColorSwitcher />
        <main className="main-wrapper">
            <HeaderInteriorDesigner />
            <BannerInteriorDesigner />
            <div className="section section-padding">
                <div className="container">
                <SectionTitle 
                    subtitle="What We Can Do For You"
                    title="Services we can <br> help you with"
                    description=""
                    textAlignment="heading-left mb--20 mb_md--70"
                    textColor=""
                />
                    <div className="row">
                        <ServiceArchitects colSize="col-lg-4" serviceStyle="service-style-2" itemShow="3" marginTop="yes"/>
                    </div>
                </div>
                <ul className="shape-group-7 list-unstyled">
                    <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/circle-2.png"} alt="circle" /></li>
                    <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-2.png"} alt="Line" /></li>
                    <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"} alt="Line" /></li>
                </ul>

            </div>
            <ProjectHome parentClass="bg-color-light"/>
          
           
            <CtaLayoutHome />
            <Footer parentClass="" />
        </main>
        </>
    )
}

export default InteriorDesigner;

