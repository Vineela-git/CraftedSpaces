import React from 'react';
import SEO from '../common/SEO';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import Footer from '../common/footer/Footer';
import ServiceHome from '../component/service/ServiceHome';
import SectionTitle from '../elements/section-title/SectionTitle';
import BannerLogin from '../component/banner/BannerLogin';
import HeaderArchitect from '../common/header/HeaderArchitect';

const Login = () => {

    return (
        <>
        <SEO title="Login"/>
        <ColorSwitcher />
        <main className="main-wrapper">
        <HeaderArchitect />
        <BannerLogin />

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
                    <ServiceHome colSize="col-lg-4" serviceStyle="service-style-2" itemShow="3" marginTop="yes"/>
                </div>
            </div>
            <ul className="shape-group-7 list-unstyled">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/circle-2.png"} alt="circle" /></li>
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-2.png"} alt="Line" /></li>
                <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"} alt="Line" /></li>
            </ul>

        </div>
    
        <Footer />
        </main>
        </>
    )
}

export default Login;