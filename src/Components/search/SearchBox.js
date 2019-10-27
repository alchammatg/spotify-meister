//Library imports
import React, { useState, useEffect } from 'react';
import axios from './node_modules/axios';
//Components
import SearchList from './SearchList';

const SearchBox = () => {
  //https://www.robinwieruch.de/react-hooks-fetch-data
    const [search, setSearch] = useState("");
    const [result, setResult] = useState("");


    useEffect(() => {
        console.log(search,result);
        const fetchData = async () => {
          const result = await axios(
            'https://hn.algolia.com/api/v1/search?query=redux',
          );
          setResult(result.data);
        };
        fetchData();
      }, [search]); //Do useEffect when [search] change

        
    return(
        <div>
            <input
                placeholder="Spotify search..."
                onChange={event => {
                    setSearch(event.target.value);
                }}
            />
            <SearchList value={result} />
        </div>
    )
}

export default SearchBox;