import React from "react";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = () => {
  return (
    <>
      <div>
        <ul style={{ listStyle: "none", display: "flex", justifyContent: "center" }}>
          {Object.keys(sortByOptions).map((key) => (
            <li key={sortByOptions[key]} style={{ marginRight: 10, marginLeft: 10 }}>
              {key}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ display: "flex", justifyContent: "center", margin: 10 }}>
        <input type="text" placeholder="Search Businesses" />
        <input type="text" placeholder="Where?" />
      </div>
      <div style={{ display: "flex", justifyContent: "center", margin: 10 }}>
        <button>Let's Go</button>
      </div>
    </>
  );
};

export default SearchBar;
