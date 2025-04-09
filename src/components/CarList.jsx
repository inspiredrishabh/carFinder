import React from "react";
import CarCard from "./CarCard";

const CarList = ({ results, isSearching }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
          <svg className="w-7 h-7 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
          </svg>
          Search Results
        </h2>
        <div className="flex items-center">
          <span className="bg-blue-600 text-white text-sm font-medium px-3 py-1.5 rounded-full shadow-md">
            {results.length} cars found
          </span>
          <div className="ml-4">
            <select className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2">
              <option value="relevance">Sort by: Relevance</option>
              <option value="price_low">Price: Low to High</option>
              <option value="price_high">Price: High to Low</option>
              <option value="year_new">Year: Newest First</option>
              <option value="year_old">Year: Oldest First</option>
            </select>
          </div>
        </div>
      </div>

      {isSearching ? (
        <div className="flex justify-center items-center h-80">
          <div className="relative h-24 w-24">
            <div className="absolute top-0 left-0 w-full h-full border-8 border-gray-200 rounded-full"></div>
            <div className="absolute top-0 left-0 w-full h-full border-8 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H11a1 1 0 001-1v-1h3.5a1 1 0 00.8-.4l1.5-2A1 1 0 0018 11h-1.5V8a1 1 0 00-1-1H15V4a1 1 0 00-1-1H3z"></path>
              </svg>
            </div>
          </div>
          <div className="ml-6">
            <h3 className="text-xl font-semibold text-gray-800">Searching for your perfect match</h3>
            <p className="text-gray-500 mt-2">We're finding the best cars based on your criteria...</p>
          </div>
        </div>
      ) : results.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <nav className="flex items-center space-x-2">
              <a href="#" className="px-3 py-1 rounded-md bg-blue-50 text-blue-600 font-medium">1</a>
              <a href="#" className="px-3 py-1 rounded-md text-gray-500 hover:bg-gray-100">2</a>
              <a href="#" className="px-3 py-1 rounded-md text-gray-500 hover:bg-gray-100">3</a>
              <span className="px-3 py-1 text-gray-500">...</span>
              <a href="#" className="px-3 py-1 rounded-md text-gray-500 hover:bg-gray-100">10</a>
              <a href="#" className="px-3 py-1 rounded-md text-gray-700 hover:bg-gray-100">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
              </a>
            </nav>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-80 text-center bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 p-8">
          <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No matching cars found</h3>
          <p className="text-gray-500 max-w-md mx-auto mb-6">
            We couldn't find any cars that match your search criteria. Try adjusting your filters or broadening your search terms.
          </p>
          <button className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-colors">
            Reset Search
          </button>
        </div>
      )}
    </div>
  );
};

export default CarList;
