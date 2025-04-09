import { useState } from "react";

const SearchForm = ({ onSearch, isSearching }) => {
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    priceRange: "",
  });

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
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-6">
      <h2 className="text-2xl font-semibold text-white mb-4">Search Cars</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Make
            </label>
            <input
              type="text"
              name="make"
              value={formData.make}
              onChange={handleInputChange}
              placeholder="Toyota, Honda, etc."
              className="w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Model
            </label>
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleInputChange}
              placeholder="Camry, Civic, etc."
              className="w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Year
            </label>
            <input
              type="text"
              name="year"
              value={formData.year}
              onChange={handleInputChange}
              placeholder="2020, 2021, etc."
              className="w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Price Range
            </label>
            <select
              name="priceRange"
              value={formData.priceRange}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
            >
              <option value="">Any</option>
              <option value="low">Low (&lt; $30,000)</option>
              <option value="medium">Medium ($30,000 - $50,000)</option>
              <option value="high">High (&gt; $50,000)</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSearching}
            className="px-8 py-3 bg-white text-blue-600 font-medium rounded-md shadow-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300 transform transition duration-200 hover:scale-105 disabled:opacity-70"
          >
            {isSearching ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Searching...
              </span>
            ) : (
              "Find Cars"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
