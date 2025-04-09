import React, { useState } from "react";
import CarCard from "./CarCard";

const CarList = ({ results, isSearching }) => {
  // Sort options ke liye state
  const [sortOption, setSortOption] = useState("relevance");

  // Sorting function - gadiyon ko sort karne ke liye
  const getSortedResults = () => {
    if (!results.length) return [];

    switch (sortOption) {
      case "price_low":
        return [...results].sort((a, b) => a.price - b.price);
      case "price_high":
        return [...results].sort((a, b) => b.price - a.price);
      case "year_new":
        return [...results].sort((a, b) => b.year - a.year);
      case "year_old":
        return [...results].sort((a, b) => a.year - b.year);
      case "rating":
        return [...results].sort((a, b) => b.rating - a.rating);
      default:
        return results; // Default relevance sorting
    }
  };

  // Get sorted cars
  const sortedCars = getSortedResults();

  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
      {/* Header with count of cars - kitni gaadiya mili hai */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 border-b border-gray-700 pb-4 gap-4">
        <h2 className="text-2xl font-bold text-white flex items-center">
          <svg
            className="w-7 h-7 mr-3 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            ></path>
          </svg>
          Future Cars - 2025+
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <span className="bg-blue-900 text-blue-100 text-sm font-medium px-3 py-1.5 rounded-full shadow-md">
            {results.length} {results.length === 1 ? "car" : "cars"} mila
          </span>
          <div>
            <select
              className="bg-gray-700 border border-gray-600 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="relevance">Relevance ke hisaab se</option>
              <option value="price_low">Price: Kam se Zyada</option>
              <option value="price_high">Price: Zyada se Kam</option>
              <option value="year_new">Year: Newest First</option>
              <option value="rating">Rating: Best First</option>
            </select>
          </div>
        </div>
      </div>

      {/* Loading state - searching ka animation */}
      {isSearching ? (
        <div className="flex flex-col justify-center items-center h-80">
          <div className="relative h-24 w-24">
            <div className="absolute top-0 left-0 w-full h-full border-8 border-gray-700 rounded-full"></div>
            <div className="absolute top-0 left-0 w-full h-full border-8 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H11a1 1 0 001-1v-1h3.5a1 1 0 00.8-.4l1.5-2A1 1 0 0018 11h-1.5V8a1 1 0 00-1-1H15V4a1 1 0 00-1-1H3z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="mt-6 text-center">
            <h3 className="text-xl font-semibold text-gray-200 animate-pulse">
              Aapki futuristic gaadi ki khoj jaari hai
            </h3>
            <p className="text-gray-400 mt-2">
              Thoda intezaar karein, hum aapke liye sahi gaadi dhund rahe
              hain...
            </p>
          </div>
        </div>
      ) : results.length > 0 ? (
        <>
          {/* Filter tags - currently applied filters */}
          <div className="mb-6 flex flex-wrap gap-2">
            {results.length > 0 && (
              <div className="inline-flex items-center bg-gray-700 text-gray-200 text-xs py-1 px-3 rounded-full">
                <span>All Results</span>
                <button className="ml-1 text-gray-400 hover:text-white">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* Search results with auto-animation - search ke results */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedCars.map((car, index) => (
              <div
                key={car.id}
                className="opacity-0 animate-fadeIn"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CarCard car={car} />
              </div>
            ))}
          </div>

          {/* Results count and pagination */}
          <div className="mt-10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              Showing{" "}
              <span className="font-medium text-white">
                {sortedCars.length}
              </span>{" "}
              of{" "}
              <span className="font-medium text-white">
                {sortedCars.length}
              </span>{" "}
              cars
            </p>
            <nav className="flex items-center space-x-2">
              <a
                href="#"
                className="px-3 py-1 rounded-md bg-blue-900 text-blue-200 font-medium"
              >
                1
              </a>
              <a
                href="#"
                className="px-3 py-1 rounded-md text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
              >
                2
              </a>
              <a
                href="#"
                className="px-3 py-1 rounded-md text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
              >
                3
              </a>
              <span className="px-3 py-1 text-gray-500">...</span>
              <a
                href="#"
                className="px-3 py-1 rounded-md text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
              >
                10
              </a>
              <a
                href="#"
                className="px-3 py-1 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </nav>
          </div>
        </>
      ) : (
        // Empty state - koi gaadi nahi mili
        <div className="flex flex-col items-center justify-center h-80 text-center bg-gray-900 rounded-lg border border-dashed border-gray-700 p-8">
          <div className="relative w-24 h-24 mb-4">
            <svg
              className="w-full h-full text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H11a1 1 0 001-1v-1h3.5a1 1 0 00.8-.4l1.5-2A1 1 0 0018 11h-1.5V8a1 1 0 00-1-1H15V4a1 1 0 00-1-1H3z"
              ></path>
            </svg>
            <div className="absolute top-0 right-0 h-full w-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-300 mb-2">
            Oops! Koi gaadi nahi mili
          </h3>
          <p className="text-gray-400 max-w-md mx-auto mb-6">
            Aapke search criteria se match karne waali koi future ki gaadi nahi
            mili. Apne filters ko adjust karein ya search ko thoda aur broad
            karein.
          </p>

          <div className="space-y-4">
            <button className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-800 transition-colors">
              Search Reset Karein
            </button>

            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="text-sm text-gray-400">Popular Searches:</span>
              <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                Electric Cars
              </button>
              <span className="text-gray-600">•</span>
              <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                SUVs
              </button>
              <span className="text-gray-600">•</span>
              <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                Hybrid
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarList;
