export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-green-700 leading-tight mb-6">
            Welcome to{" "}
            <span className="inline-flex items-center">
              AGR
              <span className="inline-flex items-center mx-2">
                <svg
                  className="w-12 h-12 md:w-16 md:h-16 text-orange-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </span>
              SPHERE
            </span>{" "}
            🌱
          </h1>
          <p className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed mb-8">
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
          <button className="bg-yellow-400 text-gray-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105 shadow-lg">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Why Choose Agrosphere?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-700"
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
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Community Learning
              </h3>
              <p className="text-gray-600">
                Connect with experienced farmers and mentors to share knowledge
                and best practices.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-yellow-600"
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
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Bulk Purchasing
              </h3>
              <p className="text-gray-600">
                Pool resources with other farmers to get better prices on feed,
                equipment, and supplies.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-orange-600"
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
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Training Resources
              </h3>
              <p className="text-gray-600">
                Access courses on disease prevention, poultry management, and
                business skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-700 py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join Our Farming Community?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Start connecting with fellow farmers today and grow your business
            together.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button className="w-full sm:w-auto bg-yellow-400 text-gray-800 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-500 hover:text-white transition">
              Sign Up Free
            </button>
            <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-700 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
