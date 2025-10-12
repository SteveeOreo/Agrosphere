import { useState, useEffect } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import SkeletonCard, { SkeletonGrid } from "../components/SkeletonCard";

export default function Marketplace() {
  const [activeTab, setActiveTab] = useState("products");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [priceRange, setPriceRange] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Simulate loading when changing categories
  useEffect(() => {
    if (!isLoading) {
      setIsLoadingProducts(true);
      const timer = setTimeout(() => {
        setIsLoadingProducts(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [selectedCategory, activeTab]);

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

  // Enhanced product data with more details for filtering
  const products = [
    { id: 1, name: "Egg Crate", price: 2500, category: "poultry", unit: "crate", description: "30 pieces", rating: 4.5, seller: "Farm Fresh Ltd", location: "Lagos" },
    { id: 2, name: "Day Old Chicks", price: 350, category: "poultry", unit: "chick", description: "Broiler breed", rating: 4.8, seller: "Poultry Pro", location: "Ogun" },
    { id: 3, name: "Poultry Feed", price: 8500, category: "feeds", unit: "bag", description: "25kg bag", rating: 4.3, seller: "Feed Masters", location: "Kano" },
    { id: 4, name: "Organic Manure", price: 1200, category: "feeds", unit: "bag", description: "50kg bag", rating: 4.6, seller: "Green Farm", location: "Kaduna" },
    { id: 5, name: "Maize Seeds", price: 15000, category: "grains", unit: "bag", description: "Hybrid variety", rating: 4.4, seller: "Seed Co", location: "Abuja" },
    { id: 6, name: "Rice Paddy", price: 25000, category: "grains", unit: "bag", description: "100kg bag", rating: 4.2, seller: "Rice Valley", location: "Kebbi" },
    { id: 7, name: "Live Goats", price: 45000, category: "livestock", unit: "each", description: "Adult male", rating: 4.7, seller: "Livestock Hub", location: "Sokoto" },
    { id: 8, name: "Cow Feed", price: 12000, category: "feeds", unit: "bag", description: "50kg concentrate", rating: 4.1, seller: "Cattle Care", location: "Plateau" }
  ];

  // Filter and sort products
  const filteredProducts = products
    .filter(product => {
      if (selectedCategory !== "all" && product.category !== selectedCategory) return false;
      if (priceRange === "low" && product.price > 5000) return false;
      if (priceRange === "medium" && (product.price <= 5000 || product.price > 20000)) return false;
      if (priceRange === "high" && product.price <= 20000) return false;
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low": return a.price - b.price;
        case "price-high": return b.price - a.price;
        case "rating": return b.rating - a.rating;
        case "name": return a.name.localeCompare(b.name);
        default: return 0;
      }
    });

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Show page loader on initial load */}
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen">
          <LoadingSpinner 
            size="xl" 
            color="green" 
            text="Loading marketplace..." 
          />
        </div>
      ) : (
        <>
          {/* Enhanced Header with Market Stats */}
          <div className="bg-white shadow-sm">
            <div className="px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex items-center justify-between mb-6">
                <div className="text-center flex-1">
                  <h1 className="font-heading text-2xl sm:text-3xl font-bold text-secondary mb-2">Marketplace</h1>
                  <p className="text-sm sm:text-base text-secondary">
                    Trade agricultural products and commodities
                  </p>
                </div>
                <div className="flex space-x-3">
                  <button className="p-2 sm:p-3 bg-success/10 rounded-xl hover:bg-success/20 transition-colors">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </button>
                  <button className="p-2 sm:p-3 hover:bg-slate-100 rounded-xl transition-colors">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-brand-secondary"
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
          <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-6">
            <div className="text-center bg-success/5 p-4 sm:p-6 rounded-2xl border border-success/10">
              <p className="text-xl sm:text-2xl font-bold text-success mb-1">{marketData.totalVolume}</p>
              <p className="text-sm sm:text-base text-secondary">Total Volume</p>
            </div>
            <div className="text-center bg-info/5 p-4 sm:p-6 rounded-2xl border border-info/10">
              <p className="text-xl sm:text-2xl font-bold text-info mb-1">{marketData.activeTraders}</p>
              <p className="text-sm sm:text-base text-secondary">Active Traders</p>
            </div>
            <div className="text-center bg-brand-secondary/5 p-4 sm:p-6 rounded-2xl border border-brand-secondary/10">
              <p className="text-xl sm:text-2xl font-bold text-brand-secondary mb-1">{marketData.countries}</p>
              <p className="text-sm sm:text-base text-secondary">Countries</p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-2 bg-slate-100 p-2 rounded-2xl mb-6">
            <button
              onClick={() => setActiveTab("products")}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === "products"
                  ? "bg-white text-success shadow-sm"
                  : "text-secondary hover:text-primary"
              }`}
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab("prices")}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === "prices"
                  ? "bg-white text-success shadow-sm"
                  : "text-secondary hover:text-primary"
              }`}
            >
              Live Prices
            </button>
            <button
              onClick={() => setActiveTab("bulk")}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === "bulk"
                  ? "bg-white text-success shadow-sm"
                  : "text-secondary hover:text-primary"
              }`}
            >
              Bulk Orders
            </button>
          </div>

          {/* Upload and Search */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-6">
            <button className="flex items-center justify-center space-x-2 bg-slate-100 px-4 py-3 rounded-xl border border-slate-200 hover:bg-slate-200 transition-colors">
              <svg
                className="w-4 h-4 text-brand-secondary"
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
              <span className="text-secondary font-medium text-sm">Upload</span>
              <svg
                className="w-4 h-4 text-secondary"
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
                className="text-secondary w-full pl-4 pr-12 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-success/20 focus:border-success text-sm"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-5 h-5 text-secondary"
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

            {/* Filter Toggle Button */}
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 bg-slate-100 px-4 py-3 rounded-xl border border-slate-200 hover:bg-slate-200 transition-colors"
            >
              <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
              </svg>
              <span className="text-secondary font-medium text-sm">Filters</span>
            </button>
          </div>

          {/* Advanced Filters Panel */}
          {showFilters && (
            <div className="card mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Sort By */}
                <div>
                  <label className="block text-sm font-medium text-secondary mb-3">Sort By</label>
                  <select 
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-success/20 focus:border-success text-sm"
                  >
                    <option value="name">Name</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Rating</option>
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-secondary mb-3">Price Range</label>
                  <select 
                    value={priceRange} 
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-success/20 focus:border-success text-sm"
                  >
                    <option value="all">All Prices</option>
                    <option value="low">Under ₦5,000</option>
                    <option value="medium">₦5,000 - ₦20,000</option>
                    <option value="high">Above ₦20,000</option>
                  </select>
                </div>

                {/* Clear Filters */}
                <div className="flex items-end">
                  <button 
                    onClick={() => {
                      setSortBy("name");
                      setPriceRange("all");
                      setSelectedCategory("all");
                    }}
                    className="w-full btn-outline"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Dynamic Content Based on Active Tab */}
      <div className="px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === "products" && (
          <div>
            {/* Category Filter */}
            <div className="flex space-x-3 mb-6 overflow-x-auto pb-2">
              {["all", "grains", "livestock", "poultry", "feeds"].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-success text-white shadow-sm"
                      : "bg-white text-secondary hover:bg-slate-50 hover:text-primary border border-slate-200"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            {/* Enhanced Product Grid */}
            {isLoadingProducts ? (
              <SkeletonGrid count={8} />
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="card group hover:shadow-lg transition-all duration-300">
                    <div className="aspect-square bg-slate-100 rounded-xl mb-4 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                      <svg className="w-12 h-12 sm:w-16 sm:h-16 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 2l3 6 3-6 3 6 3-6v20l-3-6-3 6-3-6-3 6V2z" />
                      </svg>
                    </div>
                    
                    {/* Product Info */}
                    <h3 className="text-center card-title text-sm sm:text-base mb-2">{product.name}</h3>
                    <p className="text-center text-success font-bold text-sm mb-1">₦{product.price.toLocaleString()}/{product.unit}</p>
                    <p className="text-center card-description text-xs mb-3">{product.description}</p>
                    
                    {/* Rating */}
                    <div className="flex items-center justify-center mb-3">
                      <div className="flex items-center space-x-1">
                        <svg className="w-4 h-4 text-warning" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        <span className="text-xs text-secondary">{product.rating}</span>
                      </div>
                    </div>
                    
                    {/* Seller Info */}
                    <div className="text-center mb-4">
                      <p className="text-xs font-medium text-primary">{product.seller}</p>
                      <p className="text-xs text-secondary">{product.location}</p>
                    </div>
                    
                    {/* Action Button */}
                    <button className="w-full btn-primary text-xs">
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* No Results Message */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <svg className="w-16 h-16 text-slate-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 6.306a7.962 7.962 0 00-6 0m6 0V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2.306" />
                </svg>
                <h3 className="text-lg font-medium text-primary mb-2">No products found</h3>
                <p className="text-secondary">Try adjusting your filters or search terms</p>
              </div>
            )}
          </div>
        )}

        {activeTab === "prices" && (
          <div className="space-y-6">
            <div className="card">
              <h3 className="card-title text-lg mb-6">Today's Commodity Prices</h3>
              <div className="space-y-4">
                {marketData.todaysPrices.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-success" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 2l3 6 3-6 3 6 3-6v20l-3-6-3 6-3-6-3 6V2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-primary">{item.commodity}</p>
                        <p className="text-sm text-secondary">Per kilogram</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg text-primary">{item.price}</p>
                      <p className={`text-sm font-medium ${item.trend === 'up' ? 'text-success' : 'text-error'}`}>
                        {item.change}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h3 className="card-title text-lg mb-6">Price Alerts</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-warning/5 rounded-xl border-l-4 border-warning">
                  <div>
                    <p className="font-medium text-primary">Maize price increased</p>
                    <p className="text-sm text-secondary">Alert triggered at ₦450/kg</p>
                  </div>
                  <span className="text-xs text-warning font-medium">2 hours ago</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-info/5 rounded-xl border-l-4 border-info">
                  <div>
                    <p className="font-medium text-primary">Rice market stable</p>
                    <p className="text-sm text-secondary">Price holding at ₦520/kg</p>
                  </div>
                  <span className="text-xs text-info font-medium">5 hours ago</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "bulk" && (
          <div className="space-y-6">
            <div className="card">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="card-title">Premium Poultry Feed - Bulk Order</h4>
                  <p className="card-description">Minimum 100 bags • Save 15%</p>
                </div>
                <span className="bg-success/10 text-success text-xs font-medium px-3 py-1 rounded-full">
                  Active
                </span>
              </div>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-sm text-secondary mb-1">Regular Price</p>
                  <p className="font-bold text-primary">₦8,500/bag</p>
                </div>
                <div>
                  <p className="text-sm text-secondary mb-1">Bulk Price</p>
                  <p className="font-bold text-success">₦7,225/bag</p>
                </div>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-secondary">
                  <span className="font-medium">Progress:</span> 67/100 bags committed
                </div>
                <button className="btn-primary text-sm">
                  Join Order
                </button>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3">
                <div className="bg-success h-3 rounded-full transition-all duration-300" style={{width: '67%'}}></div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="card-title">Day Old Chicks - Group Purchase</h4>
                  <p className="card-description">Minimum 500 chicks • Save 20%</p>
                </div>
                <span className="bg-info/10 text-info text-xs font-medium px-3 py-1 rounded-full">
                  Starting Soon
                </span>
              </div>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-sm text-secondary mb-1">Regular Price</p>
                  <p className="font-bold text-primary">₦350/chick</p>
                </div>
                <div>
                  <p className="text-sm text-secondary mb-1">Group Price</p>
                  <p className="font-bold text-info">₦280/chick</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-secondary">
                  <span className="font-medium">Interest:</span> 23 farmers registered
                </div>
                <button className="btn-secondary text-sm">
                  Register Interest
                </button>
              </div>
            </div>

            {/* Create New Bulk Order */}
            <div className="card">
              <h3 className="card-title text-lg mb-6">Create New Bulk Order</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Product Name</label>
                  <input type="text" placeholder="e.g., Organic Fertilizer" className="input" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Minimum Quantity</label>
                    <input type="number" placeholder="100" className="input" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Target Price (₦)</label>
                    <input type="number" placeholder="7000" className="input" />
                  </div>
                </div>
                <button className="w-full btn-primary">
                  Create Bulk Order
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
        </>
      )}
    </div>
  );
}
