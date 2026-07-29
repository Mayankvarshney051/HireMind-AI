import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <Link
          to="/"
          className="text-3xl font-bold text-blue-500"
        >
          HireMind AI
        </Link>

        <div className="flex items-center gap-8 text-white">

          <a href="#features" className="hover:text-blue-500 transition">
            Features
          </a>

          <a href="#how-it-works" className="hover:text-blue-500 transition">
            How It Works
          </a>

          <a href="#why-us" className="hover:text-blue-500 transition">
            Why Us
          </a>

          <Link
            to="/login"
            className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-xl"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;