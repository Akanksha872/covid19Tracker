import { useState } from "react";

function SearchBar() {

    const searchBarStyling ={
    padding: "1rem",
    borderRadius: '19px',
    width: "50%",
    };
    let [searchValue, setSearchValue]= useState('');

    function handleClick(searchInput){
        setSearchValue(searchInput);
    }

  return (
    <div >
        <input 
        style={searchBarStyling}
        type="text"
        placeholder="Search your state.. "
        value={searchValue}
        onChange={(e)=>handleClick(e.target.value)} />
    </div>
  );
}

export default SearchBar;