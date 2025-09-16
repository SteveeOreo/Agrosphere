export default function Forum() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-white p-4 shadow-sm border-b">
        <div className="flex items-center justify-between">
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h1 className="text-xl font-bold text-green-700">Q&A Forum</h1>
          <div className="w-6"></div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-4 border-b">
        <div className="relative">
          <input
            type="text"
            placeholder="Search discussions..."
            className="w-full pl-4 pr-10 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 text-gray-700"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
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
      </div>

      {/* Categories */}
      <div className="bg-white p-4 border-b">
        <div className="flex space-x-2 overflow-x-auto">
          <button className="bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
            All Topics
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-300">
            Feed & Nutrition
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-300">
            Disease Prevention
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-300">
            Breeding
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-300">
            Business Tips
          </button>
        </div>
      </div>

      {/* Forum Posts */}
      <div className="p-4 space-y-4">
        {/* Post 1 */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold text-gray-800">Chika Okafor</h3>
                <span className="text-sm text-gray-500">2 hours ago</span>
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-2">
                Best feed formula for 6-week old broilers?
              </h4>
              <p className="text-gray-700 text-sm mb-3">
                I'm looking for advice on the most effective feed formula for my
                6-week old broilers. Currently using a 22% protein starter feed
                but wondering if I should switch...
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-1 text-orange-500 hover:text-orange-600">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <span className="text-sm">15</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-600">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    <span className="text-sm">8 replies</span>
                  </button>
                </div>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                  Feed & Nutrition
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Post 2 */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold text-gray-800">Emmanuel Ude</h3>
                <span className="text-sm text-gray-500">5 hours ago</span>
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-2">
                Dealing with Newcastle disease outbreak
              </h4>
              <p className="text-gray-700 text-sm mb-3">
                My neighbor's farm just reported Newcastle disease. I'm worried
                about my 300 birds. What preventive measures should I take
                immediately?
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-1 text-orange-500 hover:text-orange-600">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <span className="text-sm">23</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-600">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    <span className="text-sm">12 replies</span>
                  </button>
                </div>
                <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
                  Disease Prevention
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Post 3 */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold text-gray-800">Grace Nkomo</h3>
                <span className="text-sm text-gray-500">1 day ago</span>
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-2">
                Egg production dropped suddenly - need help!
              </h4>
              <p className="text-gray-700 text-sm mb-3">
                My layers (18 weeks old) were producing well, but egg production
                dropped from 85% to 45% in just 3 days. No visible signs of
                illness. Any ideas?
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-1 text-orange-500 hover:text-orange-600">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <span className="text-sm">18</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-600">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    <span className="text-sm">6 replies</span>
                  </button>
                </div>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  Breeding
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Add Button */}
      <button className="fixed bottom-20 right-4 w-14 h-14 bg-yellow-400 text-green-900 rounded-full shadow-lg hover:bg-yellow-500 transition-colors flex items-center justify-center">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    </div>
  );
}
