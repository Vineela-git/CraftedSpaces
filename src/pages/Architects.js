import React from 'react';
import HeaderArchitect from '../common/header/HeaderArchitect';
import Footer from '../common/footer/Footer';
import SEO from '../common/SEO';
import BannerArchitects from '../component/banner/BannerArchitects';

import ProjectArchitects from '../component/project/ProjectArchitects';

import ColorSwitcher from '../elements/switcher/ColorSwitcher';


const Architects = () => {

    return (
        <>
            <SEO title="Corporate Agency"/>
            <ColorSwitcher />
            <main className="main-wrapper">
            <HeaderArchitect />
            <BannerArchitects />
                    
        
    
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
            
                <ProjectArchitects />
           
          
                <Footer parentClass="" />
            </main>
        </>
    )
}

export default Architects;
