export default function Farmers() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-white p-4 shadow-sm">
        <div className="flex items-center justify-center mb-4">
          <div className="text-center relative">
            {/* Chicken silhouette background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <svg
                className="w-32 h-32 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 8.35L17.65 7H16.5C15.24 7 14.04 6.65 13 6L11.5 5.5L10 6C8.96 6.65 7.76 7 6.5 7H5.35L4 8.35V10.5C4 11.33 4.67 12 5.5 12H6.5V13.5C6.5 15.16 7.84 16.5 9.5 16.5V18.5C9.5 19.33 10.17 20 11 20S12.5 19.33 12.5 18.5V16.5H13.5V18.5C13.5 19.33 14.17 20 15 20S16.5 19.33 16.5 18.5V16.5C18.16 16.5 19.5 15.16 19.5 13.5V12H20.5C21.33 12 22 11.33 22 10.5V8.35H19Z" />
              </svg>
            </div>

            <h1 className="text-2xl font-bold text-gray-800 tracking-wide relative z-10">
              AGR
              <span className="inline-flex items-center mx-1">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </span>
              SPHERE
            </h1>
          </div>
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
