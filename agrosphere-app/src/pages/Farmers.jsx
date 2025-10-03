import WeatherWidget from "../components/WeatherWidget";
import MarketDataWidget from "../components/MarketDataWidget";

export default function Farmers() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-white p-4 shadow-sm">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-gray-800">Farmer Services</h1>
          <p className="text-sm text-gray-600 mt-1">Access essential farming tools and information</p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-4 pr-12 py-3 bg-gray-100 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-green-700 text-gray-700"
          />
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        {/* Hamburger Menu */}
        <div className="flex justify-end">
          <button className="p-2">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Weather and Market Data Section */}
      <div className="p-4 space-y-4">
        <WeatherWidget />
        <MarketDataWidget />
      </div>

      {/* Services Grid */}
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4">
          {/* Quality Feed Formula Amplifications */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="aspect-square bg-gray-200 flex items-center justify-center">
              <svg
                className="w-16 h-16 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 2l3 6 3-6 3 6 3-6v20l-3-6-3 6-3-6-3 6V2z" />
              </svg>
            </div>
            <div className="p-3">
              <h3 className="text-center text-gray-800 font-semibold text-sm leading-tight">
                Quality Feed Formula Amplifications
              </h3>
            </div>
          </div>

          {/* Breeds */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="aspect-square bg-gray-200 flex items-center justify-center">
              <svg
                className="w-16 h-16 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 2l3 6 3-6 3 6 3-6v20l-3-6-3 6-3-6-3 6V2z" />
              </svg>
            </div>
            <div className="p-3">
              <h3 className="text-center text-gray-800 font-semibold text-sm">
                Breeds
              </h3>
            </div>
          </div>

          {/* Veterinary Services */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="aspect-square bg-gray-200 flex items-center justify-center">
              <svg
                className="w-16 h-16 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 2l3 6 3-6 3 6 3-6v20l-3-6-3 6-3-6-3 6V2z" />
              </svg>
            </div>
            <div className="p-3">
              <h3 className="text-center text-gray-800 font-semibold text-sm">
                Veterinary Services
              </h3>
            </div>
          </div>

          {/* Recycling waste to manure */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="aspect-square bg-gray-200 flex items-center justify-center">
              <svg
                className="w-16 h-16 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 2l3 6 3-6 3 6 3-6v20l-3-6-3 6-3-6-3 6V2z" />
              </svg>
            </div>
            <div className="p-3">
              <h3 className="text-center text-gray-800 font-semibold text-sm leading-tight">
                Recycling waste to manure
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
