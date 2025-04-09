import React from "react";

// Loading state component - search results ke loading animation
const LoadingState = () => {
  return (
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
          Thoda intezaar karein, hum aapke liye sahi gaadi dhund rahe hain...
        </p>
      </div>
    </div>
  );
};

export default LoadingState;
