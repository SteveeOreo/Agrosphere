import { Link } from "react-router-dom";
import { useState } from "react";
import useAuthStore from "../store/useAuthStore";
import logoImage from "../images/logo.PNG";

export default function Navbar() {
  const { user, isAuthenticated, signOut } = useAuthStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-green-700 text-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logoImage}
              alt="Agrosphere"
              className="h-8 sm:h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="space-x-6 hidden md:flex">
            <Link to="/" className="hover:text-yellow-400 transition">
              Home
            </Link>
            <Link
              to="/marketplace"
              className="hover:text-yellow-400 transition"
            >
              Marketplace
            </Link>
            <Link to="/farmers" className="hover:text-yellow-400 transition">
              Services
            </Link>
            <Link to="/forum" className="hover:text-yellow-400 transition">
              Forum
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          {isAuthenticated ? (
            <div className="hidden md:flex items-center space-x-4">
              <span className="text-yellow-400 font-medium text-sm lg:text-base">
                Hi, {user?.firstName}!
              </span>
              <Link
                to="/profile"
                className="bg-yellow-400 text-gray-800 px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg hover:bg-orange-500 hover:text-white transition font-semibold text-sm lg:text-base"
              >
                Profile
              </Link>
              <button
                onClick={signOut}
                className="text-yellow-400 hover:text-orange-500 transition font-medium text-sm lg:text-base"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-2">
              <Link
                to="/signin"
                className="text-yellow-400 hover:text-orange-500 transition font-medium text-sm lg:text-base"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="bg-yellow-400 text-gray-800 px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg hover:bg-orange-500 hover:text-white transition font-semibold text-sm lg:text-base"
              >
                Join Now
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-yellow-400 focus:outline-none focus:text-yellow-400 transition"
            >
              <svg
                className="w-6 h-6"
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
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-green-600 py-4">
            <div className="space-y-3">
              {/* Mobile Nav Links */}
              <Link
                to="/"
                className="block px-4 py-2 text-white hover:text-yellow-400 hover:bg-green-600 rounded transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/marketplace"
                className="block px-4 py-2 text-white hover:text-yellow-400 hover:bg-green-600 rounded transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Marketplace
              </Link>
              <Link
                to="/farmers"
                className="block px-4 py-2 text-white hover:text-yellow-400 hover:bg-green-600 rounded transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/forum"
                className="block px-4 py-2 text-white hover:text-yellow-400 hover:bg-green-600 rounded transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Forum
              </Link>

              {/* Mobile Auth Section */}
              <div className="border-t border-green-600 pt-3 mt-3">
                {isAuthenticated ? (
                  <div className="space-y-2">
                    <div className="px-4 py-2 text-yellow-400 font-medium">
                      Hi, {user?.firstName}!
                    </div>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 bg-yellow-400 text-gray-800 rounded hover:bg-orange-500 hover:text-white transition font-semibold"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    <button
                      onClick={() => {
                        signOut();
                        setIsMobileMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-yellow-400 hover:text-orange-500 transition font-medium"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Link
                      to="/signin"
                      className="block px-4 py-2 text-yellow-400 hover:text-orange-500 transition font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/signup"
                      className="block px-4 py-2 bg-yellow-400 text-gray-800 rounded hover:bg-orange-500 hover:text-white transition font-semibold"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Join Now
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
