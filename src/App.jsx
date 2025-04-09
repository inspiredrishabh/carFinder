import { useState } from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import CarList from "./components/CarList";
import "./App.css";

function App() {
  // Search parameters state - search ke parameters
  const [searchParams, setSearchParams] = useState({
    make: "",
    model: "",
    year: "",
    priceRange: "",
  });

  // Results and loading state - results aur loading state
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Sample car data (would come from API in real app)
  // Sample cars - ye dummy data hai, asli app mein API se aayega
  const sampleCars = [
    {
      id: 1,
      make: "Toyota",
      model: "Fortuner",
      year: 2025,
      price: 3500000, // Price in INR
      image:
        "https://images.unsplash.com/photo-1559416523-140ddc3d238c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      mileage: 3500,
      fuelType: "Hybrid",
      transmission: "Automatic",
      features: ["360 Camera", "ADAS", "Wireless CarPlay", "Panoramic Sunroof"],
      rating: 4.9,
      location: "Mumbai, MH",
    },
    {
      id: 2,
      make: "Maruti Suzuki",
      model: "Swift",
      year: 2025,
      price: 950000, // Price in INR
      image:
        "https://images.unsplash.com/photo-1583267746897-2cf415887172?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      mileage: 1200,
      fuelType: "Electric",
      transmission: "Automatic",
      features: ["Connected Car", "6 Airbags", "ABS", "Digital Cockpit"],
      rating: 4.5,
      location: "Delhi, DL",
    },
    {
      id: 3,
      make: "Tata",
      model: "Nexon",
      year: 2025,
      price: 1500000, // Price in INR
      image:
        "https://images.unsplash.com/photo-1616422285623-13ff8e0eccc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      mileage: 800,
      fuelType: "Electric",
      transmission: "Automatic",
      features: ["500km Range", "Touch Panel", "Air Purifier", "8 Airbags"],
      rating: 4.8,
      location: "Bengaluru, KA",
    },
    {
      id: 4,
      make: "Mahindra",
      model: "XUV900",
      year: 2025,
      price: 2800000, // Price in INR
      image:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      mileage: 500,
      fuelType: "Hydrogen",
      transmission: "Automatic",
      features: ["Level 3 Autonomy", "AR HUD", "Premium Audio", "7 Seats"],
      rating: 4.9,
      location: "Chennai, TN",
    },
    {
      id: 5,
      make: "Honda",
      model: "City",
      year: 2025,
      price: 1600000, // Price in INR
      image:
        "https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      mileage: 2000,
      fuelType: "Hybrid",
      transmission: "CVT",
      features: [
        "Hybrid Drive",
        "Leather Interior",
        "Adaptive Cruise",
        "Matrix LED",
      ],
      rating: 4.6,
      location: "Hyderabad, TS",
    },
    {
      id: 6,
      make: "Hyundai",
      model: "Ioniq",
      year: 2025,
      price: 1800000, // Price in INR
      image:
        "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      mileage: 1500,
      fuelType: "Electric",
      transmission: "Automatic",
      features: [
        "Bidirectional Charging",
        "BlueLink 3.0",
        "Bose Sound System",
        "Wireless Charging",
      ],
      rating: 4.7,
      location: "Pune, MH",
    },
  ];

  // Handle search function - search handle karne ka function
  const handleSearch = (params) => {
    setSearchParams(params);
    setIsSearching(true);

    // Simulate API search with setTimeout
    // API call ka simulation setTimeout ke saath
    setTimeout(() => {
      const filtered = sampleCars.filter((car) => {
        return (
          (!params.make ||
            car.make.toLowerCase().includes(params.make.toLowerCase())) &&
          (!params.model ||
            car.model.toLowerCase().includes(params.model.toLowerCase())) &&
          (!params.year || car.year.toString() === params.year) &&
          (!params.priceRange ||
            (params.priceRange === "low" && car.price < 1000000) ||
            (params.priceRange === "medium" &&
              car.price >= 1000000 &&
              car.price < 2000000) ||
            (params.priceRange === "high" && car.price >= 2000000))
        );
      });

      setResults(filtered);
      setIsSearching(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Header />
        <div className="mt-8 rounded-lg overflow-hidden">
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
