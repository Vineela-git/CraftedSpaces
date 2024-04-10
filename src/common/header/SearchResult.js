import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom'; // Import useLocation hook


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
        setLoading(false);
      } catch (error) {
        console.error('Error fetching search results:', error);
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [location.search]);

  return (
    <div>
      <h2>Search Results</h2>
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {searchResults.map((result) => (
            <li key={result._id}>
              {result.firstname} {result.lastname} - {result.companyname} - {result.state} - {result.city} - {result.professionaltype}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResult;
