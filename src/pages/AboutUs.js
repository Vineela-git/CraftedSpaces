import React from 'react';
import Footer from '../common/footer/Footer';
import Header from '../common/header/Header';
import SEO from '../common/SEO';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import ProcessOne from '../component/process/ProcessOne';
import AboutThree from '../component/about/AboutThree';
import AboutFour from '../component/about/AboutFour';
import AboutFive from '../component/about/AboutFive';


const AboutUs = () => {

    return (
        <>
        <SEO title="About us" />
        <ColorSwitcher />
            <main className="main-wrapper">
                <Header />
                <BcrumbBannerOne 
                title="We are one of the leading innovators in the industry"
                paragraph ="we specialize in designing and developing cutting-edge solutions for building projects of all scales."
                
                />
                <AboutFour />
                <AboutThree />
                <AboutFive />
                <ProcessOne />
              
                <Footer parentClass="" />
            </main>
        </>
    )
}

export default AboutUs;