import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/images/SoftNova-Logo.png";

/**
 * Navbar — SoftNova HR
 * ---------------------------------------------------------------
 * A responsive, accessible top navigation bar built with React
 * and Tailwind CSS, matching the SoftNova HR brand.
 *
 * Setup:
 *  - Save the provided SoftNova-Logo.png into src/assets/images/
 *    (same folder this import points to). If you place it
 *    somewhere else, just update the import path below to match.
 *
 * Customize:
 *  - NAV_LINKS: update label/href for each navigation item.
 *  - Replace the two <button> handlers with your auth routes
 *    (e.g. onClick={() => navigate("/login")}) or swap the
 *    <button> tags for <Link> if you're using React Router.
 * ---------------------------------------------------------------
 */

const NAV_LINKS = [
  { label: "Home", href: "#", color: "text-gray-300 hover:text-white" },
  { label: "System Guide", href: "#", color: "text-gray-300 hover:text-white" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-red-900 bg-black">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-2"
      >
        {/* Brand */}
        <a href="/" className="flex flex-shrink-0 items-center gap-2">
          <img src={Logo} alt="SoftNova HR" className="h-9 w-auto select-none" />
          <span className="text-xl font-extrabold tracking-tight sm:text-2xl">
            <span className="text-red-500">SoftNova</span>{" "}
            <span className="text-white">HR</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden flex-1 items-center justify-center gap-10 md:flex">
          {NAV_LINKS.map(({ label, href, color }) => (
            <a
              key={label}
              href={href}
              className={`text-sm transition-colors duration-150 ${color}`} >
              {label}
            </a>
          ))}
        </div>

        {/* Desktop auth buttons */}
        <div className="hidden flex-shrink-0 items-center gap-3 md:flex">
          <button
            type="button"
            className="rounded-lg bg-red-600 px-5 py-2 text-sm font-semibold text-white transition-colors duration-150 hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Register
          </button>
          <button
            type="button"
            className="rounded-lg bg-red-600 px-6 py-2 text-sm font-semibold text-white transition-colors duration-150 hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Login
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="rounded-md p-1 text-white md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="border-t border-red-900 bg-black px-4 pb-5 pt-4 md:hidden">
          <div className="flex gap-4">
            {NAV_LINKS.map(({ label, href, color }) => (
              <a
                key={label}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-base font-medium ${color}`}
              >
                {label}
              </a>
            ))}
          </div>
          <div className="mt-5 flex gap-3">
            <button
              type="button"
              className="flex-1 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-red-700"
            >
              Register
            </button>
            <button
              type="button"
              className="flex-1 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-red-700"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
}