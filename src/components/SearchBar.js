import React, { useState } from "react";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [sortingOption, setSortingOption] = useState("best_match");

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(`Searching Yelp with ${searchTerm}, ${searchLocation}, ${sortingOption}`);
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center mb-3 mt-3">
        <ul className="list-group list-group-horizontal">
          {Object.keys(sortByOptions).map((key) => (
            <li
              key={sortByOptions[key]}
              onClick={() => setSortingOption(sortByOptions[key])}
              className={`list-group-item ${sortingOption === sortByOptions[key] ? "active" : ""}`}
            >
              {key}
            </li>
          ))}
        </ul>
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search Businesses"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Where?"
          value={searchLocation}
          onChange={(event) => setSearchLocation(event.target.value)}
        />
      </div>
      <div className="d-flex justify-content-center align-items-center mb-3">
        <button type="button" className="btn btn-primary" onClick={handleSearch}>
          Let's Go
        </button>
      </div>
    </>
  );
};

export default SearchBar;
