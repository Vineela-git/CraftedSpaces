import React, { useState } from 'react';
import Logo from '../../elements/logo/Logo';

import StickyHeader from './StickyHeader';


const HeaderThree = () => {


    const sticky = StickyHeader(100);

    return (
        <>
            <header className="header axil-header header-style-3">
                <div className={`axil-mainmenu ${sticky ? "axil-sticky" : ""}`}>
                    <div className="container">
                        <div className="header-navbar">
                            <div className="header-logo">
                                <Logo limage="/images/logo-transparent.png"
                                dimage="/images/logo-transparent-darktheme.png"
                                simage="/images/logo-transparent.png"
                                />
                            </div>
                         
                        </div>
                    </div>
                </div>
            </header>
          
        </>
    )
}

export default HeaderThree;