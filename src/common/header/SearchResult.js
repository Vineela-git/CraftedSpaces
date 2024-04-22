import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation , useNavigate } from 'react-router-dom'; // Import useLocation hook
import { PacmanLoader } from 'react-spinners'; // Import PacmanLoader
import HeaderThree from './HeaderThree';


const SearchResult = () => {
    const location = useLocation(); // Use useLocation hook to access location object
    const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);  

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const queryParams = {
      firstname: searchParams.get('firstname') || '',
      lastname: searchParams.get('lastname') || '',
      companyname: searchParams.get('companyname') || '',
      city: searchParams.get('city') || '',
      state: searchParams.get('state') || '',
      professionaltype: searchParams.get('professionaltype') || '',
    };
    const fetchSearchResults = async () => {
      try {
        setLoading(true);
        // Make an API request to your backend server
        const response = await axios.get('http://localhost:3001/api/search', { params: queryParams });
        setSearchResults(response.data.data); // Update searchResults state with the fetched data
        console.log(response.data.data)
        setLoading(false);
      } catch (error) {
        console.log('Error fetching search results:', error);
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [location.search]);
  const handleProfessionalClick = (professional) => {
    // Navigate to the detailed view page, passing the professional's ID as a parameter
    navigate(`/professionals/companyname/${professional.companyname}`);
  };

  return (
    <>
   
    <div className="wrapper">
    {loading ? ( // Render PacmanLoader when loading is true
        <div className="loading-container">
            {/* <PacmanLoader color="orange" size={100} /> */}
            <div>Loading...</div>
        </div>
    ) : (
        <ul className="card-grid">
            {searchResults.map((result, index) => (
                <li key={index}>
                    <article className="card" key={result._id} onClick={() => handleProfessionalClick(result)}>
                        <div className="card-image">
                        <img src={`http://localhost:3001/${result.profilePicture}`} alt={result.name} />  
                                              </div>
                        <div className="card-content">
                            <h2 className="card-name">{result.name}</h2>
                            <ol className="card-list"> 
                            <li >
                                     <span>{result.companyname}</span>
                                </li>
                            <li>
                                   <span>{result.firstname}</span>  <span>{result.lastname}</span>
                                </li>
                               
                                <li>
                                  <span>{result.city}</span>
                                </li>
                                <li>
                                <span>{result.state}</span>
                                </li>
                              
                                
                            </ol>
                        </div>
                    </article>
                </li>
            ))}
        </ul>
    )}
</div>
</>
  );
};

export default SearchResult;
