import { Link, useLocation } from "react-router-dom";

export default function BottomNavigation() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="flex justify-around items-center py-2">
        {/* Home */}
        <Link
          to="/"
          className={`flex flex-col items-center py-2 px-3 min-w-0 flex-1 ${
            isActive("/")
              ? "text-green-700"
              : "text-gray-500 hover:text-orange-500"
          } transition-colors`}
        >
          <svg
            className="w-6 h-6 mb-1"
            fill={isActive("/") ? "currentColor" : "none"}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={isActive("/") ? 0 : 2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span className="text-xs font-medium">Home</span>
        </Link>

        {/* Marketplace */}
        <Link
          to="/marketplace"
          className={`flex flex-col items-center py-2 px-3 min-w-0 flex-1 ${
            isActive("/marketplace")
              ? "text-green-700"
              : "text-gray-500 hover:text-orange-500"
          } transition-colors`}
        >
          <svg
            className="w-6 h-6 mb-1"
            fill={isActive("/marketplace") ? "currentColor" : "none"}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={isActive("/marketplace") ? 0 : 2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.68 6.32a.5.5 0 00.48.68h9.4a.5.5 0 00.48-.68L14 13"
            />
          </svg>
          <span className="text-xs font-medium">Market</span>
        </Link>

        {/* Notifications */}
        <Link
          to="/notifications"
          className={`flex flex-col items-center py-2 px-3 min-w-0 flex-1 relative ${
            isActive("/notifications")
              ? "text-green-700"
              : "text-gray-500 hover:text-orange-500"
          } transition-colors`}
        >
          <svg
            className="w-6 h-6 mb-1"
            fill={isActive("/notifications") ? "currentColor" : "none"}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={isActive("/notifications") ? 0 : 2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          {/* Notification Badge */}
          <div className="absolute top-1 right-3 w-2 h-2 bg-orange-500 rounded-full"></div>
          <span className="text-xs font-medium">Alerts</span>
        </Link>

        {/* Forum/Chat */}
        <Link
          to="/forum"
          className={`flex flex-col items-center py-2 px-3 min-w-0 flex-1 ${
            isActive("/forum")
              ? "text-green-700"
              : "text-gray-500 hover:text-orange-500"
          } transition-colors`}
        >
          <svg
            className="w-6 h-6 mb-1"
            fill={isActive("/forum") ? "currentColor" : "none"}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={isActive("/forum") ? 0 : 2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <span className="text-xs font-medium">Forum</span>
        </Link>
      </div>
    </nav>
  );
}
