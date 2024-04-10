import React from 'react';
import Footer from '../common/footer/Footer';
import HeaderInteriorDesigner from '../common/header/HeaderInteriorDesigner';
import SEO from '../common/SEO';
import BannerInteriorDesigner from '../component/banner/BannerInteriorDesigner';
import CtaLayoutHome from '../component/cta/CtaLayoutHome';
import SectionTitle from '../elements/section-title/SectionTitle';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import ServiceDesigners from '../pages/ServiceDesigners';
import ProjectDesigners from '../component/project/ProjectDesigners';



const InteriorDesigner = () => {

    return (
        <>
        <SEO title="Creative Agency"/>
        <ColorSwitcher />
        <main className="main-wrapper">
            <HeaderInteriorDesigner />
            <BannerInteriorDesigner />
            <ServiceDesigners/>
            <ProjectDesigners/>
            <div className="section section-padding">
                <div className="container">
                
                    
                </div>
                
            </div>
            
          
           
            <CtaLayoutHome />
            <Footer parentClass="" />
        </main>
        </>
    )
}

export default InteriorDesigner;

