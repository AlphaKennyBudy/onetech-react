import React from "react";

import "./SearchBar.css";

function SearchBar(props) {
  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Search"
        value={props.filterText}
        onChange={(e) => props.onFilterTextChange(e.target.value)}
        className="SearchBar__Input"
      />
    </div>
  );
}

export default SearchBar;
