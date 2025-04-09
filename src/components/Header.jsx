import React from "react";

const Header = () => {
  return (
    <header className="relative rounded-xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 animate-gradient-x"></div>
      <div className="relative py-12 px-6 text-center text-white">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-white opacity-20 blur-sm"></div>
            <div className="relative bg-white text-blue-600 rounded-full p-4 shadow-lg transform hover:scale-105 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H11a1 1 0 001-1v-1h3.5a1 1 0 00.8-.4l1.5-2A1 1 0 0018 11h-1.5V8a1 1 0 00-1-1H15V4a1 1 0 00-1-1H3z" />
              </svg>
            </div>
          </div>
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight">
          Car Finder
        </h1>
        <p className="mt-4 text-xl opacity-80 max-w-xl mx-auto">
          Find your perfect car match with our premium search engine
        </p>
        <div className="mt-8 flex justify-center space-x-6">
          <button className="px-6 py-2.5 bg-white text-blue-600 font-medium rounded-lg shadow-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200 hover:shadow-lg">
            Browse Popular
          </button>
          <button className="px-6 py-2.5 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-all duration-200">
            How It Works
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
