import React from 'react';

// const SearchBox = () => {
const SearchBox = ({searchChange}) => {
    return (
        <div className="pa2">
            <input 
                className="pa3 ba b--green bw2 bg-lightest-blue tc" 
                type="search" 
                placeholder="search box" 
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;