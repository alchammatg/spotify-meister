import React from 'react';
import SearchItem from './SearchItem';

const SearchList = (props) => {
    if (props.value === "") {
        return null;
    }
    
    return (
        <div>
            SearchList
            <SearchItem/>
        </div>
    );
}

export default SearchList
