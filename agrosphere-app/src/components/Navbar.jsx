import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useAuthStore from "../store/useAuthStore";
import logoImage from "../images/logo.PNG";
import NotificationSystem from "./NotificationSystem";

export default function Navbar() {
  const { user, isAuthenticated, signOut } = useAuthStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <nav className={`bg-green-700 text-white shadow-md sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-green-800/95 backdrop-blur-sm' : ''
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src={logoImage}
              alt="Agrosphere"
              className="h-7 sm:h-8 w-auto transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="space-x-8 hidden lg:flex text-sm font-medium">
            <Link to="/" className="hover:text-green-200 transition-colors duration-200 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-200 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link
              to="/marketplace"
              className="hover:text-green-200 transition-colors duration-200 relative group"
            >
              Marketplace
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-200 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link to="/farmers" className="hover:text-green-200 transition-colors duration-200 relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-200 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link to="/forum" className="hover:text-green-200 transition-colors duration-200 relative group">
              Forum
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-200 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link to="/analytics" className="hover:text-green-200 transition-colors duration-200 relative group">
              Analytics
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-200 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link to="/bulk-purchasing" className="hover:text-green-200 transition-colors duration-200 relative group">
              Bulk Buying
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-200 transition-all duration-200 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          {isAuthenticated ? (
            <div className="hidden lg:flex items-center space-x-4">
              <NotificationSystem />
              <span className="text-green-200 font-medium text-sm">
                Hi, {user?.firstName}!
              </span>
              <Link
                to="/profile"
                className="bg-green-200 text-green-800 px-4 py-2 rounded-full hover:bg-green-100 hover:shadow-lg transition-all duration-200 font-semibold text-sm transform hover:scale-105"
              >
                Profile
              </Link>
              <button
                onClick={signOut}
                className="text-green-200 hover:text-green-100 transition-colors duration-200 font-medium text-sm"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="hidden lg:flex items-center space-x-3">
              <Link
                to="/signin"
                className="text-green-200 hover:text-green-100 transition-colors duration-200 font-medium text-sm"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="bg-green-200 text-green-800 px-4 py-2 rounded-full hover:bg-green-100 hover:shadow-lg transition-all duration-200 font-semibold text-sm transform hover:scale-105"
              >
                Join Now
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-green-200 focus:outline-none focus:text-green-200 transition-colors duration-200 p-2 rounded-lg hover:bg-green-600"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-screen opacity-100 pb-4' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="border-t border-green-600 pt-4">
            <div className="space-y-1">
              {/* Mobile Nav Links */}
              <Link
                to="/"
                className="block px-4 py-3 text-white hover:text-green-200 hover:bg-green-600 rounded-lg transition-all duration-200 font-medium active:bg-green-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Home
                </div>
              </Link>
              <Link
                to="/marketplace"
                className="block px-4 py-3 text-white hover:text-green-200 hover:bg-green-600 rounded-lg transition-all duration-200 font-medium active:bg-green-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Marketplace
                </div>
              </Link>
              <Link
                to="/farmers"
                className="block px-4 py-3 text-white hover:text-green-200 hover:bg-green-600 rounded-lg transition-all duration-200 font-medium active:bg-green-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Services
                </div>
              </Link>
              <Link
                to="/forum"
                className="block px-4 py-3 text-white hover:text-green-200 hover:bg-green-600 rounded-lg transition-all duration-200 font-medium active:bg-green-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h2m2-4h6a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V8a2 2 0 012-2h2z" />
                  </svg>
                  Forum
                </div>
              </Link>
              <Link
                to="/analytics"
                className="block px-4 py-3 text-white hover:text-green-200 hover:bg-green-600 rounded-lg transition-all duration-200 font-medium active:bg-green-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  Analytics
                </div>
              </Link>
              <Link
                to="/bulk-purchasing"
                className="block px-4 py-3 text-white hover:text-green-200 hover:bg-green-600 rounded-lg transition-all duration-200 font-medium active:bg-green-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.68 6.32a.5.5 0 00.48.68h9.4a.5.5 0 00.48-.68L14 13" />
                  </svg>
                  Bulk Buying
                </div>
              </Link>

              {/* Mobile Auth Section */}
              <div className="border-t border-green-600 pt-4 mt-4">
                {isAuthenticated ? (
                  <div className="space-y-2">
                    <div className="px-4 py-3 text-green-200 font-medium flex items-center justify-between bg-green-600/50 rounded-lg">
                      <span>Hi, {user?.firstName}!</span>
                      <NotificationSystem />
                    </div>
                    <Link
                      to="/profile"
                      className="block px-4 py-3 bg-green-200 text-green-800 rounded-lg hover:bg-green-100 transition-all duration-200 font-semibold active:bg-green-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Profile
                      </div>
                    </Link>
                    <button
                      onClick={() => {
                        signOut();
                        setIsMobileMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-3 text-green-200 hover:text-green-100 hover:bg-green-600 rounded-lg transition-all duration-200 font-medium"
                    >
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Logout
                      </div>
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Link
                      to="/signin"
                      className="block px-4 py-3 text-green-200 hover:text-green-100 hover:bg-green-600 rounded-lg transition-all duration-200 font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                        </svg>
                        Sign In
                      </div>
                    </Link>
                    <Link
                      to="/signup"
                      className="block px-4 py-3 bg-green-200 text-green-800 rounded-lg hover:bg-green-100 transition-all duration-200 font-semibold active:bg-green-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                        Join Now
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
