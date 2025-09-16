export default function Marketplace() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="text-center flex-1">
            <h1 className="text-xl font-bold text-gray-800 tracking-wide">
              AGR
              <span className="inline-flex items-center mx-1">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </span>
              SPHERE
            </h1>
            <p className="text-sm text-gray-600 font-medium">MARKET PLACE</p>
          </div>
          <button className="p-2">
            <svg
              className="w-6 h-6 text-orange-500"
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

        {/* Upload and Search */}
        <div className="flex items-center space-x-3 mb-4">
          <button className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg border">
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
            <span className="text-gray-700 font-medium">Upload</span>
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
              className="w-full pl-4 pr-10 py-2 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
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

      {/* Product Grid */}
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4">
          {/* Egg Crate */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="aspect-square bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
              <svg
                className="w-16 h-16 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 2l3 6 3-6 3 6 3-6v20l-3-6-3 6-3-6-3 6V2z" />
              </svg>
            </div>
            <h3 className="text-center text-gray-800 font-semibold">
              Egg Crate
            </h3>
          </div>

          {/* Day Old Chicks */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="aspect-square bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
              <svg
                className="w-16 h-16 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 2l3 6 3-6 3 6 3-6v20l-3-6-3 6-3-6-3 6V2z" />
              </svg>
            </div>
            <h3 className="text-center text-gray-800 font-semibold">
              Day Old Chicks
            </h3>
          </div>

          {/* Poultry Meat */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="aspect-square bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
              <svg
                className="w-16 h-16 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 2l3 6 3-6 3 6 3-6v20l-3-6-3 6-3-6-3 6V2z" />
              </svg>
            </div>
            <h3 className="text-center text-gray-800 font-semibold">
              Poultry Meat
            </h3>
          </div>

          {/* Manure */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="aspect-square bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
              <svg
                className="w-16 h-16 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 2l3 6 3-6 3 6 3-6v20l-3-6-3 6-3-6-3 6V2z" />
              </svg>
            </div>
            <h3 className="text-center text-gray-800 font-semibold">Manure</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
