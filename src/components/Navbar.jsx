// Navbar.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    alert("Logged out successfully");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white px-4 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="font-bold text-lg">SmartSpend</h1>

        {/* Hamburger button for mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
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

        {/* Links */}
        <div
          className={`flex-col md:flex-row md:flex md:items-center w-full md:w-auto absolute md:static top-16 left-0 md:top-0 bg-blue-600 md:bg-transparent transition-all duration-300 ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          <Link
            to="/"
            className="block px-4 py-2 md:py-0 hover:bg-blue-500 md:hover:bg-transparent"
          >
            Home
          </Link>

          {isLoggedIn ? (
            <>
              <Link
                to="/dashboard"
                className="block px-4 py-2 md:py-0 hover:bg-blue-500 md:hover:bg-transparent"
              >
                Dashboard
              </Link>
              <Link
                to="/reports"
                className="block px-4 py-2 md:py-0 hover:bg-blue-500 md:hover:bg-transparent"
              >
                Reports
              </Link>
              <button
                onClick={handleLogout}
                className="block px-4 py-2 md:py-0 bg-red-500 rounded md:rounded-none hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="block px-4 py-2 md:py-0 hover:bg-blue-500 md:hover:bg-transparent"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block px-4 py-2 md:py-0 hover:bg-blue-500 md:hover:bg-transparent"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
