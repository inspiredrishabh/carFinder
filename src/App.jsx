import { useState } from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import CarList from "./components/CarList";
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
    {
      id: 1,
      make: "Toyota",
      model: "Camry",
      year: 2020,
      price: 25000,
      image: "https://via.placeholder.com/300x200?text=Toyota+Camry",
    },
    {
      id: 2,
      make: "Honda",
      model: "Civic",
      year: 2021,
      price: 22000,
      image: "https://via.placeholder.com/300x200?text=Honda+Civic",
    },
    {
      id: 3,
      make: "Tesla",
      model: "Model 3",
      year: 2022,
      price: 45000,
      image: "https://via.placeholder.com/300x200?text=Tesla+Model+3",
    },
    {
      id: 4,
      make: "BMW",
      model: "X5",
      year: 2019,
      price: 55000,
      image: "https://via.placeholder.com/300x200?text=BMW+X5",
    },
    {
      id: 5,
      make: "Ford",
      model: "Mustang",
      year: 2018,
      price: 35000,
      image: "https://via.placeholder.com/300x200?text=Ford+Mustang",
    },
  ];

  const handleSearch = (params) => {
    setSearchParams(params);
    setIsSearching(true);

    // Simulate API search with setTimeout
    setTimeout(() => {
      const filtered = sampleCars.filter((car) => {
        return (
          (!params.make ||
            car.make.toLowerCase().includes(params.make.toLowerCase())) &&
          (!params.model ||
            car.model.toLowerCase().includes(params.model.toLowerCase())) &&
          (!params.year || car.year.toString() === params.year) &&
          (!params.priceRange ||
            (params.priceRange === "low" && car.price < 30000) ||
            (params.priceRange === "medium" &&
              car.price >= 30000 &&
              car.price < 50000) ||
            (params.priceRange === "high" && car.price >= 50000))
        );
      });

      setResults(filtered);
      setIsSearching(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Header />
        <div className="mt-8 bg-white shadow-lg rounded-lg overflow-hidden">
          <SearchForm onSearch={handleSearch} isSearching={isSearching} />
        </div>
        <div className="mt-8">
          <CarList results={results} isSearching={isSearching} />
        </div>
      </div>
    </div>
  );
}

export default App;
