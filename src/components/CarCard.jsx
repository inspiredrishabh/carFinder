import React, { useState } from "react";

const CarCard = ({ car }) => {
  // Hover effect ke liye state
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Car image section - gaadi ki photo wala section */}
      <div className="relative overflow-hidden h-56">
        <img 
          src={car.image} 
          alt={`${car.make} ${car.model}`} 
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
        
        {/* Car year badge - gaadi ka model year */}
        <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
          {car.year}
        </div>
        
        {/* Car title and rating */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white">
            {car.make} {car.model}
          </h3>
          <div className="flex items-center mt-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className={`w-4 h-4 ${i < Math.floor(car.rating) ? 'text-yellow-400' : 'text-gray-500'}`}
                  fill="currentColor" 
                  viewBox="0 0 20 20" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
            <span className="text-white text-sm ml-2">({car.rating})</span>
          </div>
        </div>
      </div>
      
      {/* Car details section - gaadi ki details ka section */}
      <div className="p-5">
        <div className="flex justify-between items-center mb-4">
          {/* Price with ₹ symbol - keemat */}
          <span className="text-2xl font-bold text-gray-100">₹{car.price.toLocaleString()}</span>
          <span className="text-sm text-gray-400">{car.location}</span>
        </div>
        
        {/* Car specifications - gaadi ke specifications */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center text-gray-400">
            <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
            </svg>
            <span className="text-sm">{car.mileage.toLocaleString()} km</span>
          </div>
          
          <div className="flex items-center text-gray-400">
            <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            <span className="text-sm">{car.fuelType}</span>
          </div>
          
          <div className="flex items-center text-gray-400">
            <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
            </svg>
            <span className="text-sm">{car.transmission}</span>
          </div>
          
          <div className="flex items-center text-gray-400">
            <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span className="text-sm">{car.location}</span>
          </div>
        </div>
        
        {/* Car features - gaadi ke features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {car.features.slice(0, 3).map((feature, index) => (
            <span key={index} className="px-2.5 py-1 bg-blue-900 text-blue-200 text-xs font-medium rounded">
              {feature}
            </span>
          ))}
          {car.features.length > 3 && (
            <span className="px-2.5 py-1 bg-gray-700 text-gray-300 text-xs font-medium rounded">
              +{car.features.length - 3} more
            </span>
          )}
        </div>
        
        {/* Action buttons - action buttons */}
        <div className="mt-5 flex space-x-3">
          <button className="flex-1 px-4 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition-colors duration-200">
            View Details
          </button>
          <button className="p-2.5 text-blue-400 border border-blue-800 rounded-lg hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
