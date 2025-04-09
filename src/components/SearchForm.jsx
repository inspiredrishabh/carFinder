import { useState } from "react";

const SearchForm = ({ onSearch, isSearching }) => {
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    priceRange: "",
  });
  const [advancedSearch, setAdvancedSearch] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(formData);
  };

  return (
    <div className="relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-24 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute left-20 bottom-0 w-36 h-36 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      {/* Actual form */}
      <div className="relative p-8 bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm rounded-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Find Your Dream Car</h2>
          <button
            type="button"
            onClick={() => setAdvancedSearch(!advancedSearch)}
            className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center focus:outline-none"
          >
            {advancedSearch ? (
              <>
                <span>Basic Search</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </>
            ) : (
              <>
                <span>Advanced Search</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </>
            )}
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">Make</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H11a1 1 0 001-1v-1h3.5a1 1 0 00.8-.4l1.5-2A1 1 0 0018 11h-1.5V8a1 1 0 00-1-1H15V4a1 1 0 00-1-1H3z" />
                  </svg>
                </div>
                <input
                  type="text"
                  name="make"
                  value={formData.make}
                  onChange={handleInputChange}
                  placeholder="Toyota, Honda, etc."
                  className="pl-10 w-full px-4 py-2.5 bg-gray-50 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Model</label>
              <input
                type="text"
                name="model"
                value={formData.model}
                onChange={handleInputChange}
                placeholder="Camry, Civic, etc."
                className="w-full px-4 py-2.5 bg-gray-50 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
              <input
                type="text"
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                placeholder="2020, 2021, etc."
                className="w-full px-4 py-2.5 bg-gray-50 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
              <select
                name="priceRange"
                value={formData.priceRange}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 bg-gray-50 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Any Price Range</option>
                <option value="low">Budget (&lt; $30,000)</option>
                <option value="medium">Mid-Range ($30,000 - $50,000)</option>
                <option value="high">Premium (&gt; $50,000)</option>
              </select>
            </div>
          </div>

          {advancedSearch && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mileage</label>
                <select
                  name="mileage"
                  className="w-full px-4 py-2.5 bg-gray-50 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Any Mileage</option>
                  <option value="low">Low (&lt; 10,000 mi)</option>
                  <option value="medium">Medium (10,000 - 50,000 mi)</option>
                  <option value="high">High (&gt; 50,000 mi)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Fuel Type</label>
                <select
                  name="fuelType"
                  className="w-full px-4 py-2.5 bg-gray-50 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Any Fuel Type</option>
                  <option value="gasoline">Gasoline</option>
                  <option value="diesel">Diesel</option>
                  <option value="electric">Electric</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Transmission</label>
                <select
                  name="transmission"
                  className="w-full px-4 py-2.5 bg-gray-50 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Any Transmission</option>
                  <option value="automatic">Automatic</option>
                  <option value="manual">Manual</option>
                  <option value="cvt">CVT</option>
                </select>
              </div>
            </div>
          )}

          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              disabled={isSearching}
              className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-md hover:shadow-lg focus:ring-4 focus:ring-blue-300 focus:outline-none disabled:opacity-70"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              {isSearching ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Searching...
                </span>
              ) : (
                <>
                  Search Cars
                  <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
