import { useState, useEffect } from "react";
import { carsData } from "./data/carsData";
import Layout from "./components/layout/Layout";
import Header from "./components/ui/Header";
import SearchForm from "./components/features/search/SearchForm";
import CarList from "./components/features/cars/CarList";
import Footer from "./components/ui/Footer";
import "./App.css";

function App() {
  // Search params ka state - searching ke parameters store karne ke liye
  const [searchParams, setSearchParams] = useState({
    make: "",
    model: "",
    year: "",
    priceRange: "",
    fuelType: "",
    transmission: "",
  });

  // Results aur loading ka state - results aur loading status track karne ke liye
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [allCars, setAllCars] = useState([]);

  // Startup pe saari cars load karo - initial load of all cars
  useEffect(() => {
    setAllCars(carsData);
    // Initial search results mein kuch popular cars dikha do
    setResults(carsData.slice(0, 3));
  }, []);

  // Search function - cars ko filter karne ka function
  const handleSearch = (params) => {
    setSearchParams(params);
    setIsSearching(true);

    // API call ka simulation with timeout
    setTimeout(() => {
      const filtered = carsData.filter((car) => {
        return (
          (!params.make ||
            car.make.toLowerCase().includes(params.make.toLowerCase())) &&
          (!params.model ||
            car.model.toLowerCase().includes(params.model.toLowerCase())) &&
          (!params.year || car.year.toString() === params.year) &&
          (!params.fuelType ||
            car.fuelType.toLowerCase() === params.fuelType.toLowerCase()) &&
          (!params.transmission ||
            car.transmission.toLowerCase() ===
              params.transmission.toLowerCase()) &&
          (!params.priceRange ||
            (params.priceRange === "low" && car.price < 1000000) ||
            (params.priceRange === "medium" &&
              car.price >= 1000000 &&
              car.price < 2500000) ||
            (params.priceRange === "high" && car.price >= 2500000))
        );
      });

      setResults(filtered);
      setIsSearching(false);
    }, 1000);
  };

  // Reset search function - search ko reset karne ke liye
  const handleResetSearch = () => {
    setSearchParams({
      make: "",
      model: "",
      year: "",
      priceRange: "",
      fuelType: "",
      transmission: "",
    });
    setResults(carsData.slice(0, 6)); // Popular cars dikhao
  };

  return (
    <Layout>
      <Header />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <section className="mb-8">
            <SearchForm
              onSearch={handleSearch}
              isSearching={isSearching}
              initialValues={searchParams}
            />
          </section>

          <section>
            <CarList
              results={results}
              isSearching={isSearching}
              onResetSearch={handleResetSearch}
            />
          </section>
        </div>
      </main>
      <Footer />
    </Layout>
  );
}

export default App;
