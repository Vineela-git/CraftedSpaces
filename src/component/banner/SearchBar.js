import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.trim()) {
        navigate(`/search?firstname=${firstname}`);
      } else {
        navigate('/search'); // Redirect to search page without query if search query is empty
      }
    }, 500); // Adjust the delay according to your preference

    return () => clearTimeout(timer); // Cleanup function to clear the timer
  }, [searchQuery, navigate]);

  return (
    <div className="banner banner-style-1">
            <div className="container">
                <div className="row align-items-end align-items-xl-start"></div>

    <div className="col-lg-6 col-xl-6">
                        <div className="login_banner-search text-center">
                            <input type="text"  
                                   placeholder="Search Professionals" 
                                   value={searchQuery}
                                   onChange={handleInputChange}/>
                            <button className="axil-btn  btn-small btn-fill-white"type="submit" style={{ marginBlock: 10 }}>Search</button>
                        </div>
                    </div>

                </div>
                </div>

   
  );
};

export default SearchBar;
