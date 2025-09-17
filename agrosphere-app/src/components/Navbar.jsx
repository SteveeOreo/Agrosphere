import { Link } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import logoImage from "../images/logo.PNG";

export default function Navbar() {
  const { user, isAuthenticated, signOut } = useAuthStore();
  return (
    <nav className="bg-green-700 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logoImage} alt="Agrosphere" className="h-10 w-auto" />
        </Link>

        {/* Nav Links */}
        <div className="space-x-6 hidden md:flex">
          <Link to="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <Link to="/marketplace" className="hover:text-yellow-400 transition">
            Marketplace
          </Link>
          <Link to="/farmers" className="hover:text-yellow-400 transition">
            Services
          </Link>
          <Link to="/forum" className="hover:text-yellow-400 transition">
            Forum
          </Link>
        </div>

        {/* Auth Buttons */}
        {isAuthenticated ? (
          <div className="flex items-center space-x-4">
            <span className="text-yellow-400 font-medium">
              Hi, {user?.firstName}!
            </span>
            <Link
              to="/profile"
              className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition font-semibold"
            >
              Profile
            </Link>
            <button
              onClick={signOut}
              className="text-yellow-400 hover:text-orange-500 transition font-medium"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center space-x-2">
            <Link
              to="/signin"
              className="text-yellow-400 hover:text-orange-500 transition font-medium"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition font-semibold"
            >
              Join Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
