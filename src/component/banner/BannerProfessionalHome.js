import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";


const BannerOne = () => {



  return (

        <div className="banner banner-style-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 d-flex flex-column"> {/* Changed to flex-column */}
                <h3>Explore Our Professionals</h3> {/* Moved the h3 title here */}
                <div className="banner-content">
                  <div className="row button-container axil-btn">
                    <Link
                      to={process.env.PUBLIC_URL + "/builders"}
                      className="axil-btn btn-large btn-fill-white"
                    >
                      Builders
                    </Link>
                    <Link
                      to={process.env.PUBLIC_URL + "/architects"}
                      className="axil-btn btn-large btn-fill-white"
                    >
                      Architects
                    </Link>
                    <Link
                      to={process.env.PUBLIC_URL + "/interior-designers"}
                      className="axil-btn btn-large btn-fill-white"
                    >
                      Interior Designers
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
      <ul className="list-unstyled shape-group-21">
        <li className="shape shape-1">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-39.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-2">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-38.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-3">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-4">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-5">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-6">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-40.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-7">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-41.png"}
            alt="Bubble"
          />
        </li>
      </ul>
    </div>
  );
};

export default BannerOne;
