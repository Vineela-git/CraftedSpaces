import React from 'react';
import { Link } from 'react-router-dom';
import Tilty from 'react-tilty';


const BannerFour = () => {
    return (
        <div className="banner banner-style-4">
            <div className="container">
                {/* <div className="banner-content">
                    <h1 className="title">Think the design, design the thinking.</h1>
                    <p>Create live segments and target the right people 
                        for messages based on their behaviors.</p>
                </div> */}
                <div className="banner-thumbnail">
                    <div className="large-thumb">
                        <Tilty perspective={3000}>
                            <img src={process.env.PUBLIC_URL + "/images/banner/banner-thumb-7.png"} alt="Shape" />
                        </Tilty>
                    </div>
                </div>
            
            </div>
   
        </div>
    )
}

export default BannerFour;