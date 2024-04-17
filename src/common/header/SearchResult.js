import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom'; // Import useLocation hook
import { PacmanLoader } from 'react-spinners'; // Import PacmanLoader


const SearchResult = () => {
    const location = useLocation(); // Use useLocation hook to access location object
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

  return (
    // <div>
    //   <h2>Search Results</h2>
      
    //   {loading ? (
    //     <p>Loading...</p>
    //   ) : (
    //     <ul>
    //       {searchResults.map((result) => (
    //         <li key={result._id}>
    //           {result.firstname} {result.lastname} - {result.companyname} - {result.state} - {result.city} - {result.professionaltype}
    //         </li>
    //       ))}
    //     </ul>
    //   )}
    // </div>
    <div className="wrapper">
    {loading ? ( // Render PacmanLoader when loading is true
        <div className="loading-container">
            <PacmanLoader color="orange" size={100} />
            <div>Loading...</div>
        </div>
    ) : (
        <ul className="card-grid">
            {searchResults.map((result, index) => (
                <li key={index}>
                    <article className="card" key={result._id}>
                        <div className="card-image">
                        <img src={`http://localhost:3001/${result.profilePicture}`} alt={result.name} />  
                                              </div>
                        <div className="card-content">
                            <h2 className="card-name">{result.name}</h2>
                            <ol className="card-list"> 
                                <li >
                                    Company Name: <span>{result.companyname}</span>
                                </li>
                                <li>
                                    City: <span>{result.city}</span>
                                </li>
                                <li>
                                    firstname: <span>{result.firstname}</span>
                                </li>
                            </ol>
                        </div>
                    </article>
                </li>
            ))}
        </ul>
    )}
</div>
  );
};

export default SearchResult;
