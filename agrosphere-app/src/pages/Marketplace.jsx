import { useState } from "react";

export default function Marketplace() {
  const [activeTab, setActiveTab] = useState("products");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Mock market data inspired by Farmcrowdy
  const marketData = {
    totalVolume: "2,588 MT",
    activeTraders: "427,331+",
    countries: "3",
    todaysPrices: [
      { commodity: "Maize", price: "₦450/kg", change: "+2.5%", trend: "up" },
      { commodity: "Soybeans", price: "₦680/kg", change: "-1.2%", trend: "down" },
      { commodity: "Rice", price: "₦520/kg", change: "+0.8%", trend: "up" },
      { commodity: "Wheat", price: "₦380/kg", change: "+1.5%", trend: "up" }
    ]
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Enhanced Header with Market Stats */}
      <div className="bg-white shadow-sm">
        <div className="p-3 sm:p-4">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="text-center flex-1">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">Marketplace</h1>
              <p className="text-xs sm:text-sm text-gray-600">
                Trade agricultural products and commodities
              </p>
            </div>
            <div className="flex space-x-2">
              <button className="p-1.5 sm:p-2 bg-green-100 rounded-lg">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </button>
              <button className="p-1.5 sm:p-2">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.68 6.32a.5.5 0 00.48.68h9.4a.5.5 0 00.48-.68L14 13"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Market Statistics */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4">
            <div className="text-center bg-green-50 p-2 sm:p-3 rounded-lg">
              <p className="text-lg sm:text-xl font-bold text-green-700">{marketData.totalVolume}</p>
              <p className="text-xs sm:text-sm text-gray-600">Total Volume</p>
            </div>
            <div className="text-center bg-blue-50 p-2 sm:p-3 rounded-lg">
              <p className="text-lg sm:text-xl font-bold text-blue-700">{marketData.activeTraders}</p>
              <p className="text-xs sm:text-sm text-gray-600">Active Traders</p>
            </div>
            <div className="text-center bg-orange-50 p-2 sm:p-3 rounded-lg">
              <p className="text-lg sm:text-xl font-bold text-orange-700">{marketData.countries}</p>
              <p className="text-xs sm:text-sm text-gray-600">Countries</p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-4">
            <button
              onClick={() => setActiveTab("products")}
              className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                activeTab === "products"
                  ? "bg-white text-green-700 shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab("prices")}
              className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                activeTab === "prices"
                  ? "bg-white text-green-700 shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Live Prices
            </button>
            <button
              onClick={() => setActiveTab("bulk")}
              className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                activeTab === "bulk"
                  ? "bg-white text-green-700 shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Bulk Orders
            </button>
          </div>

          {/* Upload and Search */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-3 sm:mb-4">
            <button className="flex items-center justify-center space-x-2 bg-gray-100 px-3 py-2 rounded-lg border">
              <svg
                className="w-4 h-4 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <span className="text-gray-700 font-medium text-sm">Upload</span>
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="I am looking for....."
                className="w-full pl-3 pr-10 py-2 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 text-sm"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-4 h-4 text-gray-500"
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
          </div>
        </div>
      </div>

      {/* Dynamic Content Based on Active Tab */}
      <div className="p-3 sm:p-4">
        {activeTab === "products" && (
          <div>
            {/* Category Filter */}
            <div className="flex space-x-2 mb-4 overflow-x-auto">
              {["all", "grains", "livestock", "poultry", "feeds"].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? "bg-green-700 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {/* Enhanced Product Cards */}
              <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gray-200 rounded-lg mb-2 sm:mb-3 flex items-center justify-center">
                  <svg className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 2l3 6 3-6 3 6 3-6v20l-3-6-3 6-3-6-3 6V2z" />
                  </svg>
                </div>
                <h3 className="text-center text-gray-800 font-semibold text-sm sm:text-base mb-1">Egg Crate</h3>
                <p className="text-center text-green-600 font-bold text-sm">₦2,500/crate</p>
                <p className="text-center text-xs text-gray-500">30 pieces</p>
              </div>

              <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gray-200 rounded-lg mb-2 sm:mb-3 flex items-center justify-center">
                  <svg className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 2l3 6 3-6 3 6 3-6v20l-3-6-3 6-3-6-3 6V2z" />
                  </svg>
                </div>
                <h3 className="text-center text-gray-800 font-semibold text-sm sm:text-base mb-1">Day Old Chicks</h3>
                <p className="text-center text-green-600 font-bold text-sm">₦350/chick</p>
                <p className="text-center text-xs text-gray-500">Broiler breed</p>
              </div>

              <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gray-200 rounded-lg mb-2 sm:mb-3 flex items-center justify-center">
                  <svg className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 2l3 6 3-6 3 6 3-6v20l-3-6-3 6-3-6-3 6V2z" />
                  </svg>
                </div>
                <h3 className="text-center text-gray-800 font-semibold text-sm sm:text-base mb-1">Poultry Feed</h3>
                <p className="text-center text-green-600 font-bold text-sm">₦8,500/bag</p>
                <p className="text-center text-xs text-gray-500">25kg bag</p>
              </div>

              <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gray-200 rounded-lg mb-2 sm:mb-3 flex items-center justify-center">
                  <svg className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 2l3 6 3-6 3 6 3-6v20l-3-6-3 6-3-6-3 6V2z" />
                  </svg>
                </div>
                <h3 className="text-center text-gray-800 font-semibold text-sm sm:text-base mb-1">Organic Manure</h3>
                <p className="text-center text-green-600 font-bold text-sm">₦1,200/bag</p>
                <p className="text-center text-xs text-gray-500">50kg bag</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "prices" && (
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Today's Commodity Prices</h3>
              <div className="space-y-3">
                {marketData.todaysPrices.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 2l3 6 3-6 3 6 3-6v20l-3-6-3 6-3-6-3 6V2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{item.commodity}</p>
                        <p className="text-sm text-gray-600">Per kilogram</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg text-gray-800">{item.price}</p>
                      <p className={`text-sm ${item.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                        {item.change}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Price Alerts</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                  <div>
                    <p className="font-medium text-gray-800">Maize price increased</p>
                    <p className="text-sm text-gray-600">Above your target price of ₦400/kg</p>
                  </div>
                  <span className="text-xs text-gray-500">2 min ago</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                  <div>
                    <p className="font-medium text-gray-800">Good time to sell Rice</p>
                    <p className="text-sm text-gray-600">Price trending upward</p>
                  </div>
                  <span className="text-xs text-gray-500">1 hour ago</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "bulk" && (
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Bulk Purchase Opportunities</h3>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-800">Poultry Feed - Bulk Order</h4>
                      <p className="text-sm text-gray-600">Minimum 100 bags • Save 15%</p>
                    </div>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                      Active
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Regular Price</p>
                      <p className="font-bold text-gray-800">₦8,500/bag</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Bulk Price</p>
                      <p className="font-bold text-green-600">₦7,225/bag</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Progress:</span> 67/100 bags committed
                    </div>
                    <button className="bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-800 transition-colors">
                      Join Order
                    </button>
                  </div>
                  <div className="mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '67%'}}></div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-800">Day Old Chicks - Group Purchase</h4>
                      <p className="text-sm text-gray-600">Minimum 500 chicks • Save 20%</p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                      Starting Soon
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Regular Price</p>
                      <p className="font-bold text-gray-800">₦350/chick</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Group Price</p>
                      <p className="font-bold text-blue-600">₦280/chick</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Interest:</span> 23 farmers registered
                    </div>
                    <button className="bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors">
                      Register Interest
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Create Bulk Order</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Product</label>
                  <select className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700">
                    <option>Select product...</option>
                    <option>Poultry Feed</option>
                    <option>Day Old Chicks</option>
                    <option>Fertilizer</option>
                    <option>Seeds</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Quantity</label>
                    <input type="number" placeholder="100" className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Target Price</label>
                    <input type="number" placeholder="7000" className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700" />
                  </div>
                </div>
                <button className="w-full bg-green-700 text-white py-3 rounded-lg font-medium hover:bg-green-800 transition-colors">
                  Create Bulk Order
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
