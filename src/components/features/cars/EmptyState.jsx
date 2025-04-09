import React from "react";

// No results found empty state - koi result nahi milne par dikhane ke liye
const EmptyState = ({ onResetSearch }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center bg-gray-900 rounded-lg border border-dashed border-gray-700 p-8">
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
        mili. Apne filters ko adjust karein ya search ko thoda aur broad karein.
      </p>

      <div className="space-y-4">
        <button
          onClick={onResetSearch}
          className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-800 transition-colors"
        >
          Search Reset Karein
        </button>

        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <span className="text-sm text-gray-400">Popular Searches:</span>
          <button
            onClick={onResetSearch}
            className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            Electric Cars
          </button>
          <span className="text-gray-600">•</span>
          <button
            onClick={onResetSearch}
            className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            SUVs
          </button>
          <span className="text-gray-600">•</span>
          <button
            onClick={onResetSearch}
            className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            Hybrid
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmptyState;
