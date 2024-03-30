import React from 'react';
import Footer from '../common/footer/Footer';
import Header from '../common/header/Header';
import SEO from '../common/SEO';
import BannerBuilders from '../component/banner/BannerBuilders';
import CtaLayoutBuilders from '../component/cta/CtaLayoutBuilders';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import ProjectGridTwo from './ProjectGridTwo';

const Builders = () => {

    return (
        <>
        <SEO title="Buidlers"/>
        <ColorSwitcher />
        <main className="main-wrapper">
        <Header/>
        <BannerBuilders/>
        <ProjectGridTwo/>
        <CtaLayoutBuilders/>
        <Footer />
        </main>
        </>
    )
}

export default Builders;

