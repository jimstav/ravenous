import logo from "./logo.svg";
import "./App.css";
import BusinessList from "./components/BusinessList";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <h1 className="text-center">ravenous</h1>
      <SearchBar />
      <BusinessList />
    </>
  );
}

export default App;
