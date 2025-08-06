import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkClass = "text-[var(--eerie-black)] hover:text-[var(--keppel)] transition-all duration-300 cursor-pointer transform hover:scale-110";
  const activeLinkClass = "text-[var(--eerie-black)]";
  return (
    <nav className="bg-[var(--onyx)]/80 backdrop-blur-sm p-4 shadow-md sticky top-0 z-50">
      <ul className="flex justify-center space-x-8 bg-[var(--steel-blue)]/20 rounded-full px-6 py-2">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? `${linkClass} ${activeLinkClass}` : linkClass}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/experiences" 
            className={({ isActive }) => isActive ? `${linkClass} ${activeLinkClass}` : linkClass}
          >
            Experiences
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/learning" 
            className={({ isActive }) => isActive ? `${linkClass} ${activeLinkClass}` : linkClass}
          >
            Learning
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? `${linkClass} ${activeLinkClass}` : linkClass}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/simulations" 
            className={({ isActive }) => isActive ? `${linkClass} ${activeLinkClass}` : linkClass}
          >
            Simulations.
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
