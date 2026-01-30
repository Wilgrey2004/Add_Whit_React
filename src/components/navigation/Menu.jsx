import { NavLink } from "react-router-dom";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const linkBase = "block px-4 py-2 rounded-md transition-colors duration-200";

  const linkActive = "bg-slate-900 text-white";

  const linkInactive = "text-slate-200 hover:bg-slate-600";

  return (
    <nav className="bg-slate-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <span className="text-white font-bold text-lg">Default app</span>

          {/* Botón mobile */}
          <button
            className="md:hidden text-slate-200"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

          {/* Menu desktop */}
          <div className="hidden md:flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Menu;
