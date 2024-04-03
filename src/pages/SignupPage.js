import React from "react";
import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';
import SEO from '../common/SEO';
import BannerLS from '../component/banner/BannerLS';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import CtaLayoutHome from '../component/cta/CtaLayoutHome';
import SectionTitle from '../elements/section-title/SectionTitle';
import SignupForm from "../component/contact/SignupForm";

const Signup = () => {
    

return(
    <>
    <SEO title="Signup" />
    <ColorSwitcher />
    <main className="main-wrapper">
        <Header/>
        <BannerLS/>
        <div className="container">
        <section className="">    
            <div className="container">
                <div className="">
                    <div className="">
                    <div className="">
                            {/* <h3 className="title">Your Journey Starts Here, Sign Up Today</h3> */}
                           <SignupForm />
                        </div>  
                    </div>
                </div>
            </div>
            <ul className="shape-group-6 list-unstyled">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/bubble-7.png"} alt="Bubble" /></li>
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} alt="line" /></li>
                <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/line-5.png"} alt="line" /></li>
            </ul>
        </section>
             


        </div>

     <CtaLayoutHome/>
    <Footer/>
    </main>
    

    
    
    
    
    
    
    
    
    </>


)

}

export default Signup;
