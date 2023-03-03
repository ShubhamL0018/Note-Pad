import React from "react";
import { MdSearch } from 'react-icons/md';

const Search = ({ handleSearchNote }) => {
    return (
        <div className = "search">
            <MdSearch className="Search-icons" size= "1.3em" />
            <input 
                onChange={(Event) => 
                handleSearchNote(Event.target.value)
        }
        type = "text"
        placeholder="Type To Search..." />
    </div>
    );
};

export default Search;