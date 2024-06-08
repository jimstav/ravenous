import { useState } from "react";
import "./App.css";
import BusinessList from "./components/BusinessList";
import SearchBar from "./components/SearchBar";
import { searchBusinesses } from "./utils/yelpAPI";

const App = () => {
  const [businesses, setBusinesses] = useState([]);

  const searchYelp = async (searchTerm, searchLocation, sortingOption) => {
    const results = await searchBusinesses(searchTerm, searchLocation, sortingOption);
    setBusinesses(results);
  };

  return (
    <>
      <h1 className="text-center">ravenous</h1>
      <SearchBar search={searchYelp} />
      <BusinessList businesses={businesses} />
    </>
  );
};

export default App;
