import { useState } from "react";
import "./App.css";

function App() {
  const [searchParams, setSearchParams] = useState({
    make: "",
    model: "",
    year: "",
    priceRange: "",
  });

  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Sample car data (would come from API in real app)
  const sampleCars = [
    { id: 1, make: "Toyota", model: "Camry", year: 2020, price: 25000 },
    { id: 2, make: "Honda", model: "Civic", year: 2021, price: 22000 },
    { id: 3, make: "Tesla", model: "Model 3", year: 2022, price: 45000 },
    { id: 4, make: "BMW", model: "X5", year: 2019, price: 55000 },
    { id: 5, make: "Ford", model: "Mustang", year: 2018, price: 35000 },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams({
      ...searchParams,
      [name]: value,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearching(true);

    // Simulate API search with setTimeout
    setTimeout(() => {
      const filtered = sampleCars.filter((car) => {
        return (
          (!searchParams.make ||
            car.make.toLowerCase().includes(searchParams.make.toLowerCase())) &&
          (!searchParams.model ||
            car.model
              .toLowerCase()
              .includes(searchParams.model.toLowerCase())) &&
          (!searchParams.year || car.year.toString() === searchParams.year) &&
          (!searchParams.priceRange ||
            (searchParams.priceRange === "low" && car.price < 30000) ||
            (searchParams.priceRange === "medium" &&
              car.price >= 30000 &&
              car.price < 50000) ||
            (searchParams.priceRange === "high" && car.price >= 50000))
        );
      });

      setResults(filtered);
      setIsSearching(false);
    }, 1000);
  };

  return (
    <div className="car-finder-app">
      <header>
        <h1>🚗 Car Finder</h1>
        <p>Find your perfect car match</p>
      </header>

      <div className="search-section">
        <form onSubmit={handleSearch}>
          <div className="form-group">
            <label>Make:</label>
            <input
              type="text"
              name="make"
              value={searchParams.make}
              onChange={handleInputChange}
              placeholder="Toyota, Honda, etc."
            />
          </div>

          <div className="form-group">
            <label>Model:</label>
            <input
              type="text"
              name="model"
              value={searchParams.model}
              onChange={handleInputChange}
              placeholder="Camry, Civic, etc."
            />
          </div>

          <div className="form-group">
            <label>Year:</label>
            <input
              type="text"
              name="year"
              value={searchParams.year}
              onChange={handleInputChange}
              placeholder="2020, 2021, etc."
            />
          </div>

          <div className="form-group">
            <label>Price Range:</label>
            <select
              name="priceRange"
              value={searchParams.priceRange}
              onChange={handleInputChange}
            >
              <option value="">Any</option>
              <option value="low">Low (&lt; $30,000)</option>
              <option value="medium">Medium ($30,000 - $50,000)</option>
              <option value="high">High (&gt; $50,000)</option>
            </select>
          </div>

          <button type="submit" className="search-button">
            {isSearching ? "Searching..." : "Find Cars"}
          </button>
        </form>
      </div>

      <div className="results-section">
        <h2>Search Results ({results.length})</h2>
        {isSearching ? (
          <p>Searching for cars...</p>
        ) : results.length > 0 ? (
          <div className="car-list">
            {results.map((car) => (
              <div className="car-card" key={car.id}>
                <h3>
                  {car.make} {car.model}
                </h3>
                <p>Year: {car.year}</p>
                <p>Price: ${car.price.toLocaleString()}</p>
                <button>View Details</button>
              </div>
            ))}
          </div>
        ) : (
          <p>
            No cars found matching your criteria. Try adjusting your search.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
