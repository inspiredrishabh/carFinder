import React, { useState } from "react";
import CarCard from "./CarCard";
import EmptyState from "./EmptyState";
import LoadingState from "./LoadingState";

const CarList = ({ results, isSearching, onResetSearch }) => {
  // Sort options ke liye state - kis order mein cars dikhani hain
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
          <svg className="w-7 h-7 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
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

      {/* Different states based on search status */}
      {isSearching ? (
        <LoadingState />
      ) : results.length > 0 ? (
        <>
          {/* Filter tags - currently applied filters */}
          <div className="mb-6 flex flex-wrap gap-2">
            {results.length > 0 && (
              <div className="inline-flex items-center bg-gray-700 text-gray-200 text-xs py-1 px-3 rounded-full">
                <span>All Results</span>
                <button 
                  className="ml-1 text-gray-400 hover:text-white"
                  onClick={onResetSearch}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
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

          {/* Pagination controls - if needed */}
          {results.length > 6 && (
            <div className="mt-10 flex justify-center">
              <nav className="flex items-center space-x-2">
                <a href="#" className="px-3 py-1 rounded-md bg-blue-900 text-blue-200 font-medium">1</a>
                <a href="#" className="px-3 py-1 rounded-md text-gray-400 hover:bg-gray-700 hover:text-white transition-colors">2</a>
                <a href="#" className="px-3 py-1 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </nav>
            </div>
          )}
        </>
      ) : (
        <EmptyState onResetSearch={onResetSearch} />
      )}
    </div>
  );
};

export default CarList;
