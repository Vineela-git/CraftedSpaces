import React from 'react';


const BannerThree = () => {
    return (
            <div className="banner banner-style-3">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="banner-content" style={{marginBlock:100}}>
                        
                        
                            <h1 className="title">My Account Details</h1>                       
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="banner-thumbnail">
                    <div className="large-thumb">                       
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <ul className="list-unstyled shape-group-20">
                <li className="shape shape-1">
                <img src={process.env.PUBLIC_URL + "/images/others/bubble-32.png"} alt="Bubble" />
                </li>
                {/* <li className="shape shape-2">
                <img src={process.env.PUBLIC_URL + "/images/others/bubble-33.png"} alt="Bubble" />
                </li> */}
                <li className="shape shape-4">
                <img src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"} alt="Bubble" />
                </li>
                <li className="shape shape-5">
                <img src={process.env.PUBLIC_URL + "/images/others/bubble-4.png"} alt="Bubble" />
                </li>
                <li className="shape shape-6">
                <img src={process.env.PUBLIC_URL + "/images/others/bubble-30.png"} alt="Bubble" />
                </li>
                <li className="shape shape-7">
                <img src={process.env.PUBLIC_URL + "/images/others/bubble-31.png"} alt="Bubble" />
                </li>
                <li className="shape shape-8 marque-images" />
            </ul>
        </div>

    )
}

export default BannerThree;
