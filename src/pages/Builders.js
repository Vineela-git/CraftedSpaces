import React from 'react';
import Footer from '../common/footer/Footer';
import Header from '../common/header/Header';
import SEO from '../common/SEO';
import BannerBuilders from '../component/banner/BannerBuilders';
import CtaLayoutBuilders from '../component/cta/CtaLayoutBuilders';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import ServiceBuilders from '../pages/ServiceBuilders';
import ProjectBuilders from '../component/project/ProjectBuilders';
import HeaderBuilder from '../common/header/HeaderBuilder';

const Builders = () => {

    return (
        <>
        <SEO title="Buidlers"/>
        <ColorSwitcher />
        <main className="main-wrapper">
        <HeaderBuilder/>
        <BannerBuilders/>
        <ServiceBuilders/>
        <ProjectBuilders/>
        <CtaLayoutBuilders/>
        <Footer />
        </main>
        </>
    )
}

export default Builders;

