import WeatherWidget from "../components/WeatherWidget";
import MarketDataWidget from "../components/MarketDataWidget";

export default function Farmers() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-white px-4 sm:px-6 lg:px-8 py-8 shadow-sm border-b border-slate-200">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-heading font-bold text-primary mb-2">Farmer Services</h1>
          <p className="text-sm text-secondary">Access essential farming tools and information</p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search services..."
            className="input pl-4 pr-12 rounded-full"
          />
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 hover:bg-slate-100 rounded transition-colors">
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

        {/* Menu Button */}
        <div className="flex justify-end">
          <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
            <svg
              className="w-6 h-6 text-secondary"
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
      <div className="px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <WeatherWidget />
        <MarketDataWidget />
      </div>

      {/* Services Grid */}
      <div className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {/* Quality Feed Formula Amplifications */}
          <div className="card hover:shadow-lg transition-all duration-300 cursor-pointer group">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center group-hover:bg-success/20 transition-colors">
                  <svg
                    className="w-8 h-8 text-success"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="card-title text-sm leading-tight">
                Quality Feed Formula Amplifications
              </h3>
            </div>
          </div>

          {/* Breeds */}
          <div className="card hover:shadow-lg transition-all duration-300 cursor-pointer group">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-brand-secondary/10 rounded-full flex items-center justify-center group-hover:bg-brand-secondary/20 transition-colors">
                  <svg
                    className="w-8 h-8 text-brand-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 011 1v2a1 1 0 01-1 1h-1v10a2 2 0 01-2 2H6a2 2 0 01-2-2V8H3a1 1 0 01-1-1V5a1 1 0 011-1h4zM9 3v1h6V3H9zm1 5v8h4v-8h-4z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="card-title text-sm">
                Breeds
              </h3>
            </div>
          </div>

          {/* Poultry Disease Management */}
          <div className="card hover:shadow-lg transition-all duration-300 cursor-pointer group">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-info/10 rounded-full flex items-center justify-center group-hover:bg-info/20 transition-colors">
                  <svg
                    className="w-8 h-8 text-info"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="card-title text-sm">
                Poultry Disease Management
              </h3>
            </div>
          </div>

          {/* Market Price Analytics */}
          <div className="card hover:shadow-lg transition-all duration-300 cursor-pointer group">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center group-hover:bg-warning/20 transition-colors">
                  <svg
                    className="w-8 h-8 text-warning"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="card-title text-sm">
                Market Price Analytics
              </h3>
            </div>
          </div>

          {/* Community Support Network */}
          <div className="card hover:shadow-lg transition-all duration-300 cursor-pointer group">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                  <svg
                    className="w-8 h-8 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="card-title text-sm leading-tight">
                Community Support Network
              </h3>
            </div>
          </div>

          {/* Recycling waste to manure */}
          <div className="card hover:shadow-lg transition-all duration-300 cursor-pointer group">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  <svg
                    className="w-8 h-8 text-emerald-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="card-title text-sm leading-tight">
                Recycling waste to manure
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
