import ImageSlider from '../components/ImageSlider';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Image Slider */}
      <ImageSlider />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-8 sm:px-6 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center mb-4 sm:mb-6">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-green-700 leading-tight text-center px-2">
              Welcome to Agrosphere 🌱
            </h1>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
            Connecting small-scale farmers for{" "}
            <span className="font-semibold text-green-700">
              bulk feed contributions
            </span>
            ,{" "}
            <span className="font-semibold text-green-700">
              shared learning
            </span>
            , and{" "}
            <span className="font-semibold text-green-700">
              stronger communities
            </span>
            . Together, we grow better.
          </p>
          <button className="bg-yellow-400 text-gray-800 px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105 shadow-lg w-full max-w-xs sm:w-auto">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 sm:py-16 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-8 sm:mb-12">
            Why Choose Agrosphere?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-green-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                Community Learning
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Connect with experienced farmers and mentors to share knowledge
                and best practices.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600"
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
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                Bulk Purchasing
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Pool resources with other farmers to get better prices on feed,
                equipment, and supplies.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                Training Resources
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Access courses on disease prevention, poultry management, and
                business skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-700 py-12 px-4 sm:py-16 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 px-2">
            Ready to Join Our Farming Community?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-green-100 mb-6 sm:mb-8 px-4">
            Start connecting with fellow farmers today and grow your business
            together.
          </p>
          <div className="space-y-3 sm:space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center px-4">
            <button className="w-full md:w-auto bg-yellow-400 text-gray-800 px-6 py-3 sm:px-8 rounded-lg text-base sm:text-lg font-semibold hover:bg-orange-500 hover:text-white transition">
              Sign Up Free
            </button>
            <button className="w-full md:w-auto bg-transparent border-2 border-white text-white px-6 py-3 sm:px-8 rounded-lg text-base sm:text-lg font-semibold hover:bg-white hover:text-green-700 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
