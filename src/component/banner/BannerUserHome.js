import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const base_url="http://localhost:3000/api/search";

const BannerOne = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [searchOption, setSearchOption] = useState('companyname');
     const navigate = useNavigate();

  const handleInputChange = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };
  const handleSearchOptionChange = (e)=>{
    e.preventDefault();
    setSearchOption(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (searchQuery.toLowerCase()) {
        
        try {
            // const response = await axios.get(`http://localhost:3001/api/search/?firstname=${encodeURIComponent(searchQuery)}`);
            if (searchQuery) {
                if(searchOption === "city"){
                    navigate(`/api/search?city=${encodeURIComponent(searchQuery)}`);
                }
                else if(searchOption === "companyname"){
                    navigate(`/api/search?companyname=${encodeURIComponent(searchQuery)}`);
                }
                else if(searchOption === "state"){
                    navigate(`/api/search?state=${encodeURIComponent(searchQuery)}`);
                }
                else{
                    navigate(`/api/search?locality=${encodeURIComponent(searchQuery)}`);
                }
                
            } else {
                console.log('Failed to fetch search results');
            }
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    } else {
        navigate('/search');
    }
};

    return (
        <div className="banner banner-style-1">
            <div className="container">
                <div className="row align-items-end align-items-xl-start">
                    <div className="col-lg-6">
                        <div className="banner-content">
                                <div className=" row button-container axil-btn"> <h3>Explore Our Professionals</h3>
                                <Link to={process.env.PUBLIC_URL + "/builders"} className="axil-btn btn-large btn-fill-white"> Builders</Link>

                                <Link to={process.env.PUBLIC_URL + "/architects"}className="axil-btn btn-large btn-fill-white">Architects</Link> 
                                  
                                <Link to={process.env.PUBLIC_URL + "/interior-designers"}className="axil-btn btn-large btn-fill-white">Interior Designers</Link> 
                        
                                </div>

             
                        </div>
                    </div>

                    {/* <div className="login_banner-search text-center">
                            <input type="text"  
                                   placeholder="Search Professionals" 
                                   value={searchQuery}
                                   onChange={handleInputChange}/>
                            <button className="axil-btn  btn-small btn-fill-white"type="submit" style={{ marginBlock: 10 }}>Search</button>
                        </div> */}

                    {/* //import search bar here */}

                    <div className="col-lg-6 col-xl-6">
                        <div className="login_banner-search text-center">
                            <input type="text"  placeholder="Search Professionals"value={searchQuery}
                                   onChange={handleInputChange} />
                            <button className="axil-btn  btn-small btn-fill-white"
                                    type="submit" 
                                    style={{ marginBlock: 10 }}
                                    value={searchQuery}
                                    onClick={handleSubmit}>Search</button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-6">
                        <div className="login_banner-search text-center">
                            <select
                                value={searchOption}
                                onChange={handleSearchOptionChange}
                                className="search-option"
                            >
                                <option value="companyname">Company Name</option>
                                <option value="city">City</option>
                                <option value="locality">Locality</option>
                                <option value="state">State</option>
                            </select>
                            </div>
                            </div>
                
                </div>
            </div>
            <ul className="list-unstyled shape-group-21">
                <li className="shape shape-1">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-39.png"} alt="Bubble" />
                </li>
                <li className="shape shape-2">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-38.png"} alt="Bubble" />
                </li>
                <li className="shape shape-3">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"} alt="Bubble" />
                </li>
                <li className="shape shape-4">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"} alt="Bubble" />
                </li>
                <li className="shape shape-5">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"} alt="Bubble" />
                </li>
                <li className="shape shape-6">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-40.png"} alt="Bubble" />
                </li>
                <li className="shape shape-7">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-41.png"} alt="Bubble" />
                </li>
            </ul>
        </div>
    )
}

export default BannerOne;