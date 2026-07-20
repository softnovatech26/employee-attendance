const Navbar = () => {
  return (
    <header className="w-full h-20 bg-white shadow-md flex items-center justify-between px-8">

      {/* Logo */}
      <h2 className="text-2xl font-bold text-blue-600">
        SoftNova
      </h2>

      {/* Navigation */}
      <ul className="flex items-center gap-8 font-medium text-gray-700">
        <li>
          <a href="#" className="hover:text-blue-600 transition">
            Home
          </a>
        </li>

        <li>
          <a href="#" className="hover:text-blue-600 transition">
            About
          </a>
        </li>

        <li>
          <a href="#" className="hover:text-blue-600 transition">
            Services
          </a>
        </li>

        <li>
          <a href="#" className="hover:text-blue-600 transition">
            Contact
          </a>
        </li>
      </ul>

      {/* Right Side */}
      <div>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
          Login
        </button>
      </div>

    </header>
  );
};

export default Navbar;