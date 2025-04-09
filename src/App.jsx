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
      image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      mileage: 15000,
      fuelType: "Gasoline",
      transmission: "Automatic",
      features: ["Bluetooth", "Backup Camera", "Cruise Control", "Keyless Entry"],
      rating: 4.5,
      location: "Seattle, WA"
    },
    {
      id: 2,
      make: "Honda",
      model: "Civic",
      year: 2021,
      price: 22000,
      image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      mileage: 8000,
      fuelType: "Gasoline",
      transmission: "CVT",
      features: ["Apple CarPlay", "Lane Assist", "Heated Seats", "Sunroof"],
      rating: 4.7,
      location: "Portland, OR"
    },
    {
      id: 3,
      make: "Tesla",
      model: "Model 3",
      year: 2022,
      price: 45000,
      image: "https://images.unsplash.com/photo-1562016600-ece13e8ba570?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      mileage: 5000,
      fuelType: "Electric",
      transmission: "Automatic",
      features: ["Autopilot", "Premium Sound", "Glass Roof", "Supercharging"],
      rating: 4.9,
      location: "San Francisco, CA"
    },
    {
      id: 4,
      make: "BMW",
      model: "X5",
      year: 2019,
      price: 55000,
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      mileage: 28000,
      fuelType: "Diesel",
      transmission: "Automatic",
      features: ["Leather Seats", "Navigation", "Premium Audio", "Parking Sensors"],
      rating: 4.3,
      location: "Chicago, IL"
    },
    {
      id: 5,
      make: "Ford",
      model: "Mustang",
      year: 2018,
      price: 35000,
      image: "https://images.unsplash.com/photo-1584345604476-8ec5f82d718c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      mileage: 32000,
      fuelType: "Gasoline",
      transmission: "Manual",
      features: ["Convertible", "Leather Interior", "Performance Package", "Bluetooth"],
      rating: 4.2,
      location: "Las Vegas, NV"
    },
    {
      id: 6,
      make: "Audi",
      model: "A4",
      year: 2021,
      price: 42000,
      image: "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      mileage: 12000,
      fuelType: "Gasoline",
      transmission: "Automatic",
      features: ["Quattro AWD", "Virtual Cockpit", "Bang & Olufsen Sound", "LED Headlights"],
      rating: 4.6,
      location: "Denver, CO"
    }
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
