
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skill", path: "/skill" },
    { name: "Project", path: "/project" },
    { name: "Login", path: "/login" },
    { name: "SignUp", path: "/signup" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-2xl font-bold text-white">
            M
          </div>
          <span className="text-2xl font-bold text-slate-900">
            Mantu<span className="text-blue-600"></span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `font-medium transition hover:text-blue-600 ${
                  isActive ? "text-blue-600" : "text-slate-700"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Hamburger Button - Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-gray-200 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <span
            className={`h-0.5 w-6 bg-slate-800 transition-all duration-300 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-slate-800 transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-slate-800 transition-all duration-300 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`overflow-hidden bg-white transition-all duration-300 md:hidden ${
          isOpen
            ? "max-h-96 border-t border-gray-100 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-5 py-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `rounded-lg px-4 py-3 font-medium transition ${
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-700 hover:bg-gray-50 hover:text-blue-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

