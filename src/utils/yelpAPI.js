export const apiKey = "XXX";

const yelpBaseURL = "https://api.yelp.com/v3/";

const searchBusinesses = async (searchTerm, location, sortBy) => {
  const businessesEndpoint = "businesses/search";
  const queryParams = `?term=${searchTerm}&location=${location}&sort_by=${sortBy}`;
  const corsBypassURL = "https://cors-anywhere.herokuapp.com/";
  const urlToFetch = corsBypassURL + yelpBaseURL + businessesEndpoint + queryParams;

  const response = await fetch(urlToFetch, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      accept: "application/json",
    },
  });
  try {
    if (response.ok) {
      const responseJSON = await response.json();
      const businesses = responseJSON.businesses;
      return businesses;
    }
  } catch (error) {
    console.log(error);
  }
};

export { searchBusinesses };
