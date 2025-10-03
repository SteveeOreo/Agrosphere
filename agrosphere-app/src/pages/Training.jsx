import useAuthStore from "../store/useAuthStore";

export default function Training() {
  const { savedCourses } = useAuthStore();
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-white p-4 shadow-sm border-b">
        <div className="flex items-center justify-between">
          <button className="p-2">
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div className="text-right text-xl font-bold text-primary">6</div>
        </div>
      </div>

      {/* Profile Avatar */}
      <div className="bg-white p-4 border-b">
        <div className="flex justify-center">
          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-secondary"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 6.5V7.5C15 8.1 14.6 8.5 14 8.5S13 8.1 13 7.5V6.5L12 6.5V7.5C12 8.1 11.6 8.5 11 8.5S10 8.1 10 7.5V6.5L9 6.5V7.5C9 8.1 8.6 8.5 8 8.5S7 8.1 7 7.5V6.5L3 7V9C3 10.1 3.9 11 5 11V12.5C5 13.3 5.7 14 6.5 14S8 13.3 8 12.5V11H16V12.5C16 13.3 16.7 14 17.5 14S19 13.3 19 12.5V11C20.1 11 21 10.1 21 9Z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Saved Courses Section */}
      <div className="p-4">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-primary mb-2">Training Modules</h1>
          <p className="text-muted">
            You have saved {savedCourses.length} Courses
          </p>
        </div>

        {/* Course Cards */}
        <div className="space-y-4">
          {savedCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-muted"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-primary">
                  {course.title}
                </h3>
                <p className="text-sm text-secondary mt-1">
                  {course.description}
                </p>
                <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-success text-xs rounded-full">
                  {course.category}
                </span>
              </div>
            </div>
          ))}

          {savedCourses.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted">No saved courses yet</p>
              <p className="text-sm text-muted opacity-75 mt-1">
                Start browsing courses to save your favorites
              </p>
            </div>
          )}
        </div>

        {/* Browse More Courses */}
        <div className="mt-8">
          <button className="w-full bg-yellow-400 text-primary py-4 rounded-lg text-lg font-semibold hover:bg-green-500 hover:text-white transition-colors">
            Browse More Courses
          </button>
        </div>
      </div>
    </div>
  );
}
