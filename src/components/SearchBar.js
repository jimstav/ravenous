import React from "react";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center mb-3 mt-3">
        <ul className="list-group list-group-horizontal">
          {Object.keys(sortByOptions).map((key) => (
            <li key={sortByOptions[key]} className="list-group-item">
              {key}
            </li>
          ))}
        </ul>
      </div>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Search Businesses" />
        <input type="text" className="form-control" placeholder="Where?" />
      </div>
      <div className="d-flex justify-content-center align-items-center mb-3">
        <button type="button" class="btn btn-primary">
          Let's Go
        </button>
      </div>
    </>
  );
};

export default SearchBar;
