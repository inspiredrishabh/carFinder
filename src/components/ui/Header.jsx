import React from "react";

const Header = () => {
  return (
    // Header component - website ka main header
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-800"></div>
      <div className="relative py-8 sm:py-12 px-6 text-center text-white">
        {/* Car logo - gaadi ka icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-blue-500 opacity-30 blur-sm"></div>
            <div className="relative bg-blue-600 text-white rounded-full p-4 shadow-lg transform hover:scale-105 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H11a1 1 0 001-1v-1h3.5a1 1 0 00.8-.4l1.5-2A1 1 0 0018 11h-1.5V8a1 1 0 00-1-1H15V4a1 1 0 00-1-1H3z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Main heading with gradient text */}
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
          Car Finder
        </h1>

        {/* Tagline */}
        <p className="mt-4 text-lg sm:text-xl opacity-80 max-w-xl mx-auto text-gray-300">
          Find the best car here at your specs
        </p>

        {/* Action buttons */}
        <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-4">
          <button className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 hover:shadow-lg">
            Popular Gaadiyaan
          </button>
          <button className="px-6 py-2.5 bg-transparent border-2 border-gray-300 text-gray-300 font-medium rounded-lg hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200">
            Kaise Use Karein
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
