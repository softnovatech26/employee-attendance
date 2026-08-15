import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/images/SoftNova-Logo.png";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "System Guide", href: "#features" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/95 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2.5"
          onClick={closeMenu}
        >
          <img
            src={Logo}
            alt="SoftNova HR"
            className="h-9 w-auto object-contain"
          />

          <span className="text-xl font-bold tracking-tight">
            <span className="text-red-500">SoftNova</span>{" "}
            <span className="text-white">HR</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm font-medium text-gray-400 transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">

          <button
            type="button"
            onClick={() => navigate("/register")}
            className="rounded-lg border border-gray-700 px-5 py-2 text-sm font-semibold text-gray-300 transition-all duration-300 hover:border-red-500 hover:text-white"
          >
            Register
          </button>

          <button
            type="button"
            onClick={() => navigate("/login")}
            className="rounded-lg bg-red-600 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-red-600/10 transition-all duration-300 hover:bg-red-700 hover:-translate-y-0.5"
          >
            Login
          </button>

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="rounded-lg border border-gray-800 p-2 text-gray-300 transition hover:border-red-500 hover:text-white md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-gray-800 bg-black md:hidden">

          <div className="px-5 py-5 sm:px-8">

            {/* Mobile Links */}
            <div className="flex flex-col gap-1">

              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-gray-400 transition-colors hover:bg-red-500/10 hover:text-white"
                >
                  {link.label}
                </a>
              ))}

            </div>

            {/* Mobile Buttons */}
            <div className="mt-5 grid grid-cols-2 gap-3">

              <button
                type="button"
                onClick={() => {
                  navigate("/register");
                  closeMenu();
                }}
                className="rounded-lg border border-gray-700 px-4 py-2.5 text-sm font-semibold text-gray-300 transition hover:border-red-500 hover:text-white"
              >
                Register
              </button>

              <button
                type="button"
                onClick={() => {
                  navigate("/login");
                  closeMenu();
                }}
                className="rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Login
              </button>

            </div>

          </div>
        </div>
      )}
    </header>
  );
}