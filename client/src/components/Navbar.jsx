function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-slate-900 text-white shadow-lg">
      {/* Logo */}
      <h1 className="text-3xl font-bold text-blue-500">
        HireMind AI
      </h1>

      {/* Menu */}
      <div className="flex items-center gap-8">
        <a href="#" className="hover:text-blue-400 transition">
          Home
        </a>

        <a href="#" className="hover:text-blue-400 transition">
          Features
        </a>

        <a href="#" className="hover:text-blue-400 transition">
          About
        </a>

        <button className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 transition">
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;