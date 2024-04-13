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
    // Define the background image URL
    const backgroundImageUrl = `${process.env.PUBLIC_URL}/images/banner/banner-bg-2.png`;

    return (
        <>
            <SEO title="About us" />
            {/* Render ColorSwitcher component */}
            <ColorSwitcher />
            <main className="main-wrapper">
                <Header />
                {/* Apply the background image */}
                <div className="banner-container" style={{ background: `url(${backgroundImageUrl}) center center/cover no-repeat` }}>
                    <BcrumbBannerOne 
                        title="We are one of the leading innovators in the industry"
                        paragraph="We specialize in designing and developing cutting-edge solutions for building projects of all scales."
                    />
                </div>
                <AboutFour />
                <AboutThree />
                <AboutFive />
                <ProcessOne />
                <Footer parentClass="" />
            </main>
        </>
    );
}

export default AboutUs;
