import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function BottomNavigation() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const isActive = (path) => location.pathname === path;

  // Hide/show bottom nav on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200/50 shadow-2xl z-50 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : 'translate-y-full'
    }`}>
      <div className="flex items-center justify-around py-2 px-2 safe-area-pb">
        {/* Home */}
        <Link
          to="/"
          className={`flex flex-col items-center py-3 px-3 min-w-0 rounded-xl transition-all duration-200 ${
            isActive("/")
              ? "text-green-700 bg-green-50 scale-105"
              : "text-gray-500 hover:text-green-600 hover:bg-gray-50 active:scale-95"
          }`}
        >
          <div className="relative">
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
            {isActive("/") && (
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-700 rounded-full"></div>
            )}
          </div>
          <span className="text-xs font-semibold truncate">Home</span>
        </Link>

        {/* Marketplace */}
        <Link
          to="/marketplace"
          className={`flex flex-col items-center py-3 px-3 min-w-0 rounded-xl transition-all duration-200 ${
            isActive("/marketplace")
              ? "text-green-700 bg-green-50 scale-105"
              : "text-gray-500 hover:text-green-600 hover:bg-gray-50 active:scale-95"
          }`}
        >
          <div className="relative">
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
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            {isActive("/marketplace") && (
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-700 rounded-full"></div>
            )}
          </div>
          <span className="text-xs font-semibold truncate">Market</span>
        </Link>

        {/* Forum/Chat */}
        <Link
          to="/forum"
          className={`flex flex-col items-center py-3 px-3 min-w-0 rounded-xl transition-all duration-200 ${
            isActive("/forum")
              ? "text-green-700 bg-green-50 scale-105"
              : "text-gray-500 hover:text-green-600 hover:bg-gray-50 active:scale-95"
          }`}
        >
          <div className="relative">
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
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h2m2-4h6a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V8a2 2 0 012-2h2z"
              />
            </svg>
            {isActive("/forum") && (
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-700 rounded-full"></div>
            )}
          </div>
          <span className="text-xs font-semibold truncate">Forum</span>
        </Link>

        {/* Profile/Services */}
        <Link
          to="/farmers"
          className={`flex flex-col items-center py-3 px-3 min-w-0 rounded-xl transition-all duration-200 ${
            isActive("/farmers")
              ? "text-green-700 bg-green-50 scale-105"
              : "text-gray-500 hover:text-green-600 hover:bg-gray-50 active:scale-95"
          }`}
        >
          <div className="relative">
            <svg
              className="w-6 h-6 mb-1"
              fill={isActive("/farmers") ? "currentColor" : "none"}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={isActive("/farmers") ? 0 : 2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            {isActive("/farmers") && (
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-700 rounded-full"></div>
            )}
          </div>
          <span className="text-xs font-semibold truncate">Services</span>
        </Link>

        {/* More/Menu */}
        <Link
          to="/profile"
          className={`flex flex-col items-center py-3 px-3 min-w-0 rounded-xl transition-all duration-200 relative ${
            isActive("/profile") || isActive("/analytics") || isActive("/bulk-purchasing")
              ? "text-green-700 bg-green-50 scale-105"
              : "text-gray-500 hover:text-green-600 hover:bg-gray-50 active:scale-95"
          }`}
        >
          <div className="relative">
            <svg
              className="w-6 h-6 mb-1"
              fill={isActive("/profile") ? "currentColor" : "none"}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={isActive("/profile") ? 0 : 2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            {/* Notification dot for updates */}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            {(isActive("/profile") || isActive("/analytics") || isActive("/bulk-purchasing")) && (
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-700 rounded-full"></div>
            )}
          </div>
          <span className="text-xs font-semibold truncate">Profile</span>
        </Link>
      </div>
      
      {/* Safe area for devices with home indicator */}
      <div className="h-safe-area-inset-bottom bg-white/95"></div>
    </nav>
  );
}
