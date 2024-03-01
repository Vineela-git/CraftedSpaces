import React from 'react';
import Footer from '../common/footer/Footer';
import Header from '../common/header/Header';
import SEO from '../common/SEO';
import BannerBuilders from '../component/banner/BannerBuilders';
import CtaLayoutHome from '../component/cta/CtaLayoutHome';
import ProjectBuilders from '../component/project/ProjectBuilders';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';

const Builders = () => {

    return (
        <>
        <SEO title="Buidlers"/>
        <ColorSwitcher />
        <main className="main-wrapper">
        <Header/>
        <BannerBuilders/>
        <ProjectBuilders />
        <CtaLayoutHome/>
        <Footer />
        </main>
        </>
    )
}

export default Builders;

